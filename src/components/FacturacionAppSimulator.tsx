import React, { useState } from 'react';
import { Download, FileText, CheckCircle, Search, Archive, Plus, Printer, X, Building, User, Mail, Phone, ExternalLink } from 'lucide-react';
import { ClientOrder } from '../types';

export const FacturacionAppSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pedidos' | 'nuevo' | 'archivados' | 'reportes'>('pedidos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModal, setSelectedModal] = useState<{ type: 'presupuesto' | 'factura'; order: ClientOrder } | null>(null);

  // Initial orders from the user's real app screenshot
  const [orders, setOrders] = useState<ClientOrder[]>([
    {
      id: 'PED-001',
      clientName: 'Miquel Navarrete',
      date: '23/11/2025, 16:52:46',
      phone: '6076754761',
      email: 'miqnavdel@gmail.com',
      total: 216.59,
      status: 'active',
      items: [
        {
          id: '1',
          name: 'Practicable 1 hoja V-94 (120cm x 120cm) Blanco',
          quantity: 1,
          unitPrice: 179.00
        }
      ]
    },
    {
      id: 'PED-002',
      clientName: 'Mercedes',
      date: '17/11/2025, 15:31:06',
      phone: '608757900',
      email: 'mercedes@gmail.com',
      total: 504.57,
      status: 'active',
      items: [
        {
          id: '2a',
          name: 'Practicable 2 hojas V-94 (120cm x 120cm) Blanco',
          quantity: 1,
          unitPrice: 212.00
        },
        {
          id: '2b',
          name: 'Herrajes puerta 1H',
          quantity: 1,
          unitPrice: 85.00
        },
        {
          id: '2c',
          name: 'Construcción y mano de obra',
          quantity: 1,
          unitPrice: 120.00
        }
      ]
    }
  ]);

  // Form state for creating a new order in the demo
  const [newClientName, setNewClientName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newClientPhone, setNewClientPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('Practicable 1 hoja V-94 (120x120cm)');
  const [productPrice, setProductPrice] = useState(195);
  const [orderCreatedMsg, setOrderCreatedMsg] = useState(false);

  const activeOrders = orders.filter(
    (o) => o.status === 'active' && o.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const archivedOrders = orders.filter((o) => o.status === 'archived');

  const handleArchive = (id: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: o.status === 'active' ? 'archived' : 'active' } : o))
    );
  };

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName) return;

    const subtotal = productPrice;
    const totalWithIva = Number((subtotal * 1.21).toFixed(2));

    const newOrder: ClientOrder = {
      id: `PED-${Date.now().toString().slice(-4)}`,
      clientName: newClientName,
      date: new Date().toLocaleString('es-ES'),
      phone: newClientPhone || '600000000',
      email: newClientEmail || 'cliente@ejemplo.com',
      total: totalWithIva,
      status: 'active',
      items: [
        {
          id: String(Date.now()),
          name: selectedProduct,
          quantity: 1,
          unitPrice: productPrice
        }
      ]
    };

    setOrders([newOrder, ...orders]);
    setNewClientName('');
    setNewClientEmail('');
    setNewClientPhone('');
    setOrderCreatedMsg(true);
    setTimeout(() => {
      setOrderCreatedMsg(false);
      setActiveTab('pedidos');
    }, 1200);
  };

  return (
    <div className="rounded-xl bg-[#ffffff] text-slate-800 border border-[#38bdf8]/40 shadow-2xl overflow-hidden font-sans">
      {/* Top Application Header (recreated from screenshot) */}
      <div className="px-6 py-4 bg-white border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-[#fee2e2] text-red-600 font-bold flex items-center justify-center border border-red-200">
            <span className="text-xs font-mono font-black">HNOS</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg">
                NAVARRETE HNOS ALUMINIO
              </span>
              <span className="text-blue-600 font-semibold text-base hidden sm:inline">
                · Sistema de Presupuestos
              </span>
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              © Miquel Navarrete de Lanuza · Software para Gestión de Presupuestos
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-slate-600 font-mono">
            <User className="w-3.5 h-3.5 text-blue-600" />
            <span>miqnavdel@gmail.com</span>
          </div>
          <button
            onClick={() => alert('Sesión de demostración activa en el portafolio')}
            className="px-3 py-1.5 rounded bg-red-600 hover:bg-red-700 text-white font-medium text-xs flex items-center gap-1 transition-colors"
          >
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="px-6 pt-3 bg-slate-50/80 border-b border-slate-200 flex flex-wrap gap-2 text-xs font-medium">
        <button
          onClick={() => setActiveTab('nuevo')}
          className={`px-4 py-2 rounded-t-lg transition-all flex items-center gap-1.5 ${
            activeTab === 'nuevo'
              ? 'bg-white text-blue-600 font-bold border-t-2 border-blue-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Nuevo Pedido</span>
        </button>

        <button
          onClick={() => setActiveTab('pedidos')}
          className={`px-4 py-2 rounded-t-lg transition-all flex items-center gap-1.5 ${
            activeTab === 'pedidos'
              ? 'bg-white text-blue-600 font-bold border-t-2 border-blue-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>Pedidos Activos ({activeOrders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('archivados')}
          className={`px-4 py-2 rounded-t-lg transition-all flex items-center gap-1.5 ${
            activeTab === 'archivados'
              ? 'bg-white text-blue-600 font-bold border-t-2 border-blue-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Archive className="w-3.5 h-3.5" />
          <span>Archivados ({archivedOrders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('reportes')}
          className={`px-4 py-2 rounded-t-lg transition-all flex items-center gap-1.5 ${
            activeTab === 'reportes'
              ? 'bg-white text-blue-600 font-bold border-t-2 border-blue-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>Reportes &amp; Métricas</span>
        </button>
      </div>

      {/* Main View Area */}
      <div className="p-6 bg-slate-50 min-h-[360px]">
        {/* TAB 1: Pedidos Activos */}
        {activeTab === 'pedidos' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h4 className="text-lg font-bold text-slate-900">Pedidos Activos</h4>
              {/* Search bar matching screenshot */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar por nombre del cliente..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                />
              </div>
            </div>

            {/* List of Orders matching user's image */}
            <div className="space-y-4">
              {activeOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-base">{order.clientName}</span>
                      <span className="text-slate-400 text-xs">✏️</span>
                    </div>

                    <div className="text-xs text-slate-500 font-mono space-y-0.5">
                      <div>{order.date}</div>
                      <div>Tel: {order.phone}</div>
                      <div>Correo: {order.email}</div>
                    </div>

                    <div className="pt-1 text-xs text-slate-700 space-y-1">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-1.5">
                          <span className="text-slate-400">•</span>
                          <span>{item.name}</span>
                          <span className="text-slate-500 font-mono">
                            - {item.quantity} x {item.unitPrice.toFixed(2)}€
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons matching exact design: Presupuesto (blue), Factura (green), Archivar (gray) */}
                    <div className="flex flex-wrap items-center gap-2 pt-3">
                      <button
                        onClick={() => setSelectedModal({ type: 'presupuesto', order })}
                        className="px-3.5 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Presupuesto</span>
                      </button>

                      <button
                        onClick={() => setSelectedModal({ type: 'factura', order })}
                        className="px-3.5 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Factura</span>
                      </button>

                      <button
                        onClick={() => handleArchive(order.id)}
                        className="px-3 py-1.5 rounded-md bg-slate-600 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <Archive className="w-3.5 h-3.5" />
                        <span>Archivar</span>
                      </button>
                    </div>
                  </div>

                  {/* Right: Total price & items count */}
                  <div className="text-right md:min-w-[120px]">
                    <div className="text-2xl font-extrabold text-blue-600 font-mono">
                      {order.total.toFixed(2)}€
                    </div>
                    <div className="text-xs text-slate-500 font-mono mt-0.5">
                      {order.items.length} {order.items.length === 1 ? 'artículo' : 'artículos'}
                    </div>
                  </div>
                </div>
              ))}

              {activeOrders.length === 0 && (
                <div className="text-center py-10 bg-white rounded-xl border border-dashed border-slate-300 text-slate-500 text-xs">
                  No se encontraron pedidos con el término "{searchTerm}".
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: Nuevo Pedido */}
        {activeTab === 'nuevo' && (
          <form onSubmit={handleCreateOrder} className="max-w-xl mx-auto bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="text-base font-bold text-slate-900 border-b pb-2">
              Crear Nuevo Presupuesto para Cliente
            </h4>

            {orderCreatedMsg && (
              <div className="p-3 rounded bg-emerald-50 text-emerald-800 text-xs border border-emerald-300 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>¡Pedido generado y agregado a la lista activa con éxito!</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre del Cliente</label>
              <input
                type="text"
                required
                placeholder="Ej. Juan Pérez"
                value={newClientName}
                onChange={(e) => setNewClientName(e.target.value)}
                className="w-full px-3 py-2 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Teléfono</label>
                <input
                  type="text"
                  placeholder="612345678"
                  value={newClientPhone}
                  onChange={(e) => setNewClientPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  placeholder="juan@empresa.com"
                  value={newClientEmail}
                  onChange={(e) => setNewClientEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Producto / Carpintería</label>
              <select
                value={selectedProduct}
                onChange={(e) => {
                  setSelectedProduct(e.target.value);
                  if (e.target.value.includes('2 hojas')) setProductPrice(245);
                  else if (e.target.value.includes('Corredera')) setProductPrice(320);
                  else setProductPrice(195);
                }}
                className="w-full px-3 py-2 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="Practicable 1 hoja V-94 (120x120cm)">Practicable 1 hoja V-94 (120x120cm) - 195€</option>
                <option value="Practicable 2 hojas V-94 (140x120cm)">Practicable 2 hojas V-94 (140x120cm) - 245€</option>
                <option value="Corredera 2 hojas Serie 70 Inox">Corredera 2 hojas Serie 70 Inox - 320€</option>
              </select>
            </div>

            <div className="p-3 bg-slate-50 rounded border border-slate-200 text-xs flex justify-between items-center font-mono">
              <span className="text-slate-600">Total estimado (con IVA 21%):</span>
              <span className="text-base font-bold text-blue-600">{(productPrice * 1.21).toFixed(2)}€</span>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider transition-colors shadow-sm"
            >
              Guardar y Calcular Presupuesto
            </button>
          </form>
        )}

        {/* TAB 3: Archivados */}
        {activeTab === 'archivados' && (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900">Pedidos Archivados</h4>
            {archivedOrders.length === 0 ? (
              <div className="text-center py-10 bg-white rounded-xl border border-dashed border-slate-300 text-slate-500 text-xs">
                No hay pedidos en el archivo actualmente. Haz clic en "Archivar" en cualquier pedido para moverlo aquí.
              </div>
            ) : (
              archivedOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold text-slate-900 text-sm">{order.clientName}</span>
                    <span className="text-xs text-slate-500 ml-2">({order.date})</span>
                    <div className="text-xs text-slate-600 mt-1">{order.items[0]?.name}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold font-mono text-slate-800">{order.total.toFixed(2)}€</span>
                    <button
                      onClick={() => handleArchive(order.id)}
                      className="px-2.5 py-1 text-xs rounded bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium"
                    >
                      Restaurar
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* TAB 4: Reportes */}
        {activeTab === 'reportes' && (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900">Resumen &amp; Facturación Automática</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-slate-500 block mb-1">FACTURACIÓN ACUMULADA</span>
                <span className="text-2xl font-bold text-blue-600">
                  {orders.reduce((acc, o) => acc + o.total, 0).toFixed(2)}€
                </span>
                <span className="text-[11px] text-emerald-600 block mt-1">✓ 100% presupuestos sincronizados</span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-slate-500 block mb-1">PEDIDOS TRAMITADOS</span>
                <span className="text-2xl font-bold text-slate-900">{orders.length}</span>
                <span className="text-[11px] text-slate-500 block mt-1">Navarrete Hnos Aluminio</span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-slate-500 block mb-1">TIEMPO MEDIO DE GENERACIÓN</span>
                <span className="text-2xl font-bold text-emerald-600">&lt; 3 seg</span>
                <span className="text-[11px] text-slate-500 block mt-1">Cálculo de aluminio + PDF</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Document Preview Modal (Presupuesto o Factura Oficial) */}
      {selectedModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative text-slate-800">
            {/* Close button */}
            <button
              onClick={() => setSelectedModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Document Header */}
            <div className="border-b border-slate-200 pb-5 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    NAVARRETE HNOS ALUMINIO
                  </h3>
                  <p className="text-xs text-slate-500">
                    Carpintería Metálica &amp; Cristalería · Valencia
                  </p>
                  <p className="text-xs text-slate-500">NIF: B-46981204 · Tel: 963 800 123</p>
                </div>
                <div className="text-right font-mono">
                  <span className={`inline-block px-3 py-1 rounded text-xs font-bold uppercase ${
                    selectedModal.type === 'factura' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {selectedModal.type === 'factura' ? 'FACTURA OFICIAL' : 'PRESUPUESTO'}
                  </span>
                  <div className="text-xs text-slate-500 mt-1">
                    {selectedModal.type === 'factura' ? 'Nº: FAC-2025-089' : 'Nº: PRES-2025-142'}
                  </div>
                  <div className="text-xs text-slate-500">Fecha: {selectedModal.order.date}</div>
                </div>
              </div>
            </div>

            {/* Client Info */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6 text-xs grid grid-cols-2 gap-4">
              <div>
                <span className="text-slate-400 font-semibold block mb-0.5">DATOS DEL CLIENTE:</span>
                <span className="font-bold text-slate-900 block text-sm">{selectedModal.order.clientName}</span>
                <span className="text-slate-600 block">Teléfono: {selectedModal.order.phone}</span>
                <span className="text-slate-600 block">Email: {selectedModal.order.email}</span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 font-semibold block mb-0.5">SISTEMA:</span>
                <span className="text-slate-700 block">Generado automáticamente</span>
                <span className="text-slate-500 block">Desarrollado por Miquel Navarrete</span>
                <span className="text-emerald-600 font-semibold block mt-1">Estado: Válido</span>
              </div>
            </div>

            {/* Items Table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-4">Descripción del Material / Trabajo</th>
                    <th className="py-2.5 px-3 text-center">Cant.</th>
                    <th className="py-2.5 px-3 text-right">Precio Unit.</th>
                    <th className="py-2.5 px-4 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-mono">
                  {selectedModal.order.items.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-sans">{item.name}</td>
                      <td className="py-2.5 px-3 text-center">{item.quantity}</td>
                      <td className="py-2.5 px-3 text-right">{item.unitPrice.toFixed(2)}€</td>
                      <td className="py-2.5 px-4 text-right font-bold">
                        {(item.quantity * item.unitPrice).toFixed(2)}€
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tax breakdown */}
            <div className="flex justify-end mb-6 font-mono text-xs">
              <div className="w-64 space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="flex justify-between text-slate-600">
                  <span>Base Imponible:</span>
                  <span>{(selectedModal.order.total / 1.21).toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>I.V.A. (21%):</span>
                  <span>{(selectedModal.order.total - selectedModal.order.total / 1.21).toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-slate-900 font-bold text-sm border-t border-slate-300 pt-1.5">
                  <span>TOTAL:</span>
                  <span className="text-blue-600">{selectedModal.order.total.toFixed(2)}€</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <span className="text-[11px] text-slate-400 font-mono">
                Documento legal generado por el software web de Miquel Navarrete
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => alert('Simulación: Archivo descargado en formato PDF')}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar PDF</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimir</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
