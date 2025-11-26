import React from 'react';
import { User } from '../types';
import { MY_DEVICES } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Printer, AlertTriangle, CheckCircle, WifiOff } from 'lucide-react';

interface ProfileProps {
    user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  // Prepare data for chart
  const data = MY_DEVICES.map(d => ({
    name: d.model,
    black: d.tonerLevelBlack,
    color: d.tonerLevelColor || 0,
  }));

  const getRoleName = (role: string) => {
    switch(role) {
      case 'SME': return '中小企业';
      case 'KA': return '大客户';
      case 'PARTNER': return '合作伙伴';
      default: return '访客';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
        {/* User Info Header */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-center gap-6">
            <img src={user.avatar} alt="Profile" className="w-24 h-24 rounded-full border-4 border-gray-50 object-cover" />
            <div className="text-center md:text-left flex-1">
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-500">{user.company} • {getRoleName(user.role)}</p>
                <div className="mt-4 flex gap-3 justify-center md:justify-start">
                    <button className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">编辑资料</button>
                    <button className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">账单设置</button>
                </div>
            </div>
            {/* Quick Stats */}
            <div className="flex gap-8 border-l border-gray-100 pl-8">
                <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{MY_DEVICES.length}</div>
                    <div className="text-xs text-gray-500 uppercase">设备总数</div>
                </div>
                <div className="text-center">
                     <div className="text-2xl font-bold text-gray-900">2</div>
                     <div className="text-xs text-gray-500 uppercase">进行中订单</div>
                </div>
            </div>
        </div>

        {/* F-MP-01: Device Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 mb-6">墨粉剩余量</h2>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12} />
                            <YAxis axisLine={false} tickLine={false} fontSize={12} />
                            <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                            <Bar dataKey="black" fill="#333" radius={[4, 4, 0, 0]} name="黑色墨粉" />
                            <Bar dataKey="color" fill="#CF142B" radius={[4, 4, 0, 0]} name="彩色墨粉" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Device List Status */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 mb-6">设备状态 (@Remote)</h2>
                <div className="space-y-4">
                    {MY_DEVICES.map(device => (
                        <div key={device.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded-lg ${
                                    device.status === 'ACTIVE' ? 'bg-green-100 text-green-600' :
                                    device.status === 'WARNING' ? 'bg-yellow-100 text-yellow-600' :
                                    'bg-red-100 text-red-600'
                                }`}>
                                    <Printer size={20} />
                                </div>
                                <div>
                                    <div className="font-semibold text-sm text-gray-900">{device.model}</div>
                                    <div className="text-xs text-gray-500">{device.location} • {device.serialNumber}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {device.status === 'ACTIVE' && <><CheckCircle size={16} className="text-green-500" /> <span className="text-xs font-medium text-green-600">在线</span></>}
                                {device.status === 'WARNING' && <><AlertTriangle size={16} className="text-yellow-500" /> <span className="text-xs font-medium text-yellow-600">墨粉不足</span></>}
                                {device.status === 'OFFLINE' && <><WifiOff size={16} className="text-red-500" /> <span className="text-xs font-medium text-red-600">离线</span></>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Profile;