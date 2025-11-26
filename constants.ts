import { UserRole, Product, DeviceData, ServiceTicket } from './types';

// Mock User Profiles for switching context
export const MOCK_USERS = {
  SME: {
    id: 'u1',
    name: '陈大卫',
    company: '速长科技初创企业',
    role: UserRole.SME,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200'
  },
  KA: {
    id: 'u2',
    name: '吴莎拉',
    company: '环球科技集团',
    role: UserRole.KA,
    avatar: 'https://images.unsplash.com/photo-1573496359-7047d23aa486?auto=format&fit=crop&q=80&w=200'
  },
  PARTNER: {
    id: 'u3',
    name: '张迈克',
    company: '上海办公解决方案有限公司',
    role: UserRole.PARTNER,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  }
};

// Updated with relevant office equipment images
export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'IM C2000',
    category: 'PRINTER',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1588619461332-45f63e9c8a9b?auto=format&fit=crop&q=80&w=600', // Printer closeup
    description: '智能 A3 彩色数码复合机，助您实现高效办公。',
    tags: ['A3', '彩色', '智能面板']
  },
  {
    id: 'p2',
    name: 'Ricoh Streamline NX',
    category: 'SOFTWARE',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600', // Dashboard/Software
    description: '可扩展的集成文档管理套件，优化工作流。',
    tags: ['工作流', '安全性']
  },
  {
    id: 'p3',
    name: '黑色墨粉 (IM C2000)',
    category: 'CONSUMABLE',
    price: 450,
    image: 'https://images.unsplash.com/photo-1623228833777-227038e2354c?auto=format&fit=crop&q=80&w=600', // Toner-like abstract
    description: 'IM C2000 系列高容量黑色墨粉。',
    tags: ['黑色', '高容量']
  }
];

export const MY_DEVICES: DeviceData[] = [
  {
    id: 'd1',
    model: 'IM C6000',
    serialNumber: 'RC-2024-001',
    location: '总部 - 2楼',
    status: 'ACTIVE',
    tonerLevelBlack: 85,
    tonerLevelColor: 70,
    uptime: 99.8
  },
  {
    id: 'd2',
    model: 'P C600',
    serialNumber: 'RC-2024-002',
    location: '分公司办公室',
    status: 'WARNING',
    tonerLevelBlack: 15, // Low toner triggers recommendation
    tonerLevelColor: 40,
    uptime: 95.2
  },
  {
    id: 'd3',
    model: 'IM 7000',
    serialNumber: 'RC-2024-003',
    location: '仓库',
    status: 'OFFLINE',
    tonerLevelBlack: 0,
    uptime: 0
  }
];

export const SERVICE_TICKETS: ServiceTicket[] = [
  { id: 'T-1001', issue: '纸盘2卡纸', status: 'RESOLVED', date: '2023-11-20', device: 'IM C6000' },
  { id: 'T-1002', issue: '网络连接错误', status: 'IN_PROGRESS', date: '2023-11-25', device: 'P C600' },
  { id: 'T-1003', issue: '驱动程序安装协助', status: 'OPEN', date: '2023-11-26', device: 'IM C6000' }
];

export const SOLUTIONS_DATA = [
  { title: '制造业数字化转型', category: '制造业', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600' },
  { title: '医疗患者档案管理', category: '医疗卫生', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600' },
  { title: '教育智慧校园', category: '教育', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600' },
  { title: '金融文档安全', category: '金融', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=600' },
];