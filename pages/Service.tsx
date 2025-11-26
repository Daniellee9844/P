import React, { useState } from 'react';
import { SERVICE_TICKETS } from '../constants';
import { ShieldCheck, Search, FileText, AlertCircle, Phone } from 'lucide-react';

const Service: React.FC = () => {
  const [serial, setSerial] = useState('');
  const [verificationResult, setVerificationResult] = useState<'idle' | 'valid' | 'invalid'>('idle');

  // F-SV-01: Anti-fake check simulation
  const handleCheck = () => {
    if (serial.length > 5) {
        setVerificationResult('valid');
    } else {
        setVerificationResult('invalid');
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
        {/* Top Hero: Anti-fake & Warranty */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="text-ricoh-red" /> 
                    正品查验与保修
                </h2>
                <p className="text-gray-500 mb-6">输入您的设备或耗材序列号，验证真伪并查询保修状态。</p>
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                            type="text" 
                            value={serial}
                            onChange={(e) => {setSerial(e.target.value); setVerificationResult('idle')}}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ricoh-red"
                            placeholder="例如：SN-12345678"
                        />
                    </div>
                    <button 
                        onClick={handleCheck}
                        className="bg-ricoh-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
                    >
                        查询
                    </button>
                </div>
                {verificationResult === 'valid' && (
                    <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm flex items-center gap-2">
                        <ShieldCheck size={16} /> 正品认证。保修有效期至 2025年12月。
                    </div>
                )}
                {verificationResult === 'invalid' && (
                    <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm flex items-center gap-2">
                        <AlertCircle size={16} /> 无效的序列号。请核对后重试。
                    </div>
                )}
            </div>
             <div className="hidden md:block w-px bg-gray-200"></div>
             <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-4">快速下载</h3>
                <ul className="space-y-3">
                    {['IM C2000 驱动程序 (Windows 11)', '智能操作面板用户指南', '安全信息手册'].map((item, i) => (
                        <li key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer group transition-colors border border-transparent hover:border-gray-200">
                             <div className="flex items-center gap-3">
                                <div className="bg-gray-100 p-2 rounded text-gray-600 group-hover:text-ricoh-red transition-colors">
                                    <FileText size={18} />
                                </div>
                                <span className="text-sm font-medium text-gray-700">{item}</span>
                             </div>
                             <span className="text-xs text-blue-600 font-semibold opacity-0 group-hover:opacity-100">下载</span>
                        </li>
                    ))}
                </ul>
             </div>
        </div>

        {/* F-SV-05: Ticket System */}
        <div>
            <div className="flex items-center justify-between mb-6">
                 <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-ricoh-red pl-3">服务工单</h2>
                 <button className="flex items-center gap-2 text-ricoh-red font-semibold border border-ricoh-red px-4 py-2 rounded-lg hover:bg-red-50">
                    <Phone size={18} /> 新建报修
                 </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">工单号</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">问题描述</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">相关设备</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {SERVICE_TICKETS.map((ticket) => (
                            <tr key={ticket.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{ticket.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.issue}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.device}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                        ${ticket.status === 'RESOLVED' ? 'bg-green-100 text-green-800' : 
                                          ticket.status === 'IN_PROGRESS' ? 'bg-yellow-100 text-yellow-800' : 
                                          'bg-red-100 text-red-800'}`}>
                                        {ticket.status === 'RESOLVED' ? '已解决' : 
                                         ticket.status === 'IN_PROGRESS' ? '处理中' : '待处理'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default Service;