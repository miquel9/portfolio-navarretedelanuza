import React, { useEffect, useRef } from 'react';

export const BackgroundShader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    const gl = (canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;

    if (!gl) {
      console.warn('WebGL not supported, falling back to static background');
      return;
    }

    const syncSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    window.addEventListener('resize', syncSize);
    syncSize();

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
        m = m * m;
        m = m * m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
        vec3 g;
        g.x  = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
        vec2 p = (uv - 0.5) * aspect;
        vec2 mouse = (u_mouse.xy / u_resolution.xy - 0.5) * aspect;

        float t = u_time * 0.09;
        
        float mouseDist = length(p - mouse * 0.4);
        float mouseInfluence = smoothstep(0.65, 0.0, mouseDist) * 0.35;

        float wave1 = snoise(p * 1.3 + vec2(t * 0.22, t * 0.16) + mouseInfluence);
        float wave2 = snoise(p * 2.6 - vec2(t * 0.18, -t * 0.2) + wave1 * 0.5);
        float wave3 = snoise(p * 4.4 + vec2(-t * 0.14, t * 0.28) + wave2 * 0.3);

        float combined = wave1 * 0.55 + wave2 * 0.3 + wave3 * 0.15;

        vec3 bgVoid = vec3(0.015, 0.035, 0.075);
        vec3 navyMid = vec3(0.04, 0.10, 0.20);
        vec3 royalBlue = vec3(0.12, 0.26, 0.68);
        vec3 electricCyan = vec3(0.22, 0.74, 0.98);
        vec3 softIndigo = vec3(0.38, 0.65, 0.98);

        vec3 col = mix(bgVoid, navyMid, smoothstep(-0.4, 0.5, combined));
        col += royalBlue * pow(max(0.0, combined * 0.65 + 0.35), 3.2) * 0.55;
        col += electricCyan * pow(max(0.0, wave2 * 0.6 + 0.4), 4.0) * 0.38;
        col += softIndigo * pow(max(0.0, wave3 * 0.5 + 0.5), 5.0) * 0.22;

        vec2 gridUV = fract(p * 10.0);
        float grid = (step(0.988, gridUV.x) + step(0.988, gridUV.y)) * 0.02;
        col += vec3(grid * 0.3, grid * 0.7, grid * 1.0);

        float vignette = 1.0 - smoothstep(0.35, 1.45, length(p * 1.1));
        col *= vignette;

        gl_FragColor = vec4(col, 0.88);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl.VERTEX_SHADER, vs);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos = {
        x: e.clientX,
        y: window.innerHeight - e.clientY,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = (time: number) => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, time * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mousePos.x, mousePos.y);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', syncSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none opacity-60 z-0">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
