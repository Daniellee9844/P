export enum UserRole {
  GUEST = 'GUEST',
  SME = 'SME', // Small Medium Enterprise
  KA = 'KA',   // Key Account
  PARTNER = 'PARTNER' // Distributor/Reseller
}

export interface User {
  id: string;
  name: string;
  company: string;
  role: UserRole;
  avatar: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'PRINTER' | 'SOFTWARE' | 'CONSUMABLE';
  price: number;
  image: string;
  description: string;
  tags: string[];
}

export interface ServiceTicket {
  id: string;
  issue: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  date: string;
  device: string;
}

export interface DeviceData {
  id: string;
  model: string;
  serialNumber: string;
  location: string;
  status: 'ACTIVE' | 'WARNING' | 'ERROR' | 'OFFLINE';
  tonerLevelBlack: number;
  tonerLevelColor?: number;
  uptime: number; // percentage
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
