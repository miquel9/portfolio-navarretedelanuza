export interface OrderItem {
  id: string;
  name: string;
  details?: string;
  quantity: number;
  unitPrice: number;
}

export interface ClientOrder {
  id: string;
  clientName: string;
  date: string;
  phone: string;
  email: string;
  items: OrderItem[];
  total: number;
  status: 'active' | 'archived';
  category?: string;
}

export interface WorkflowNode {
  id: string;
  label: string;
  type: 'trigger' | 'source' | 'transform' | 'ai' | 'code' | 'action';
  icon: string;
  description: string;
  status: 'idle' | 'running' | 'success';
}

export interface NewsItem {
  source: string;
  title: string;
  category: string;
  time: string;
  url: string;
}
