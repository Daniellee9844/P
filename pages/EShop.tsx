import React from 'react';
import { PRODUCTS, MY_DEVICES } from '../constants';
import { ShoppingCart, Plus, Tag, RefreshCcw } from 'lucide-react';
import { User } from '../types';

interface EShopProps {
    user: User;
}

const EShop: React.FC<EShopProps> = ({ user }) => {
  return (
    <div className="space-y-10 animate-fade-in">
        {/* F-ES-02: Smart Replenishment (Top Priority for Ease of Business) */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg text-white">
                    <RefreshCcw size={20} />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-gray-900">智能补货推荐</h2>
                    <p className="text-sm text-gray-600">基于您的设备使用情况为您推荐。</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MY_DEVICES.filter(d => d.tonerLevelBlack < 30).map(device => (
                    <div key={device.id} className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase">{device.model}</p>
                            <p className="font-semibold text-gray-800">黑色墨粉 (高容量)</p>
                            <p className="text-red-500 text-xs font-medium mt-1">剩余量: {device.tonerLevelBlack}% (过低)</p>
                        </div>
                        <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors" title="添加到购物车">
                            <Plus size={18} />
                        </button>
                    </div>
                ))}
                 {/* Fallback if no low toner */}
                 {MY_DEVICES.every(d => d.tonerLevelBlack >= 30) && (
                     <div className="col-span-3 text-center text-sm text-gray-500 italic py-2">
                         您的设备状态良好，暂无急需补充的耗材。
                     </div>
                 )}
            </div>
        </div>

        {/* F-ES-01: Bundles */}
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-ricoh-red pl-3">精选套餐</h2>
                <a href="#" className="text-ricoh-red font-semibold text-sm hover:underline">查看所有优惠</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded mb-3 inline-block">限时特惠</span>
                        <h3 className="text-2xl font-bold mb-2">初创企业办公包</h3>
                        <p className="text-gray-300 mb-6 max-w-sm">购买 IM C2000 + 1年上门服务 + 全套墨粉，立享 8 折优惠。</p>
                        <button className="bg-white text-black px-6 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                            购买套餐
                        </button>
                    </div>
                    <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-10 translate-y-10">
                         <Tag size={150} />
                    </div>
                </div>
                 <div className="bg-white border border-gray-200 rounded-2xl p-8 relative overflow-hidden">
                    <div className="relative z-10">
                         <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded mb-3 inline-block">环保之选</span>
                        <h3 className="text-2xl font-bold mb-2 text-gray-900">绿色办公软件套件</h3>
                        <p className="text-gray-600 mb-6 max-w-sm">使用 Ricoh Streamline NX 实现无纸化办公。节省 15% 成本。</p>
                        <button className="border-2 border-gray-900 text-gray-900 px-6 py-2.5 rounded-lg font-bold hover:bg-gray-900 hover:text-white transition-colors">
                            了解详情
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Product Grid */}
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-ricoh-red pl-3">产品目录</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.map(product => (
                    <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group flex flex-col">
                        <div className="h-48 overflow-hidden bg-gray-100 relative">
                             <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                            <div className="text-xs text-gray-500 mb-1">{product.category === 'PRINTER' ? '数码复合机' : product.category === 'SOFTWARE' ? '软件' : '耗材'}</div>
                            <h3 className="font-bold text-gray-900 mb-2 truncate" title={product.name}>{product.name}</h3>
                            <div className="flex flex-wrap gap-1 mb-4">
                                {product.tags.map(tag => (
                                    <span key={tag} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tag}</span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="font-bold text-lg text-ricoh-red">¥{product.price.toLocaleString()}</span>
                                <button className="bg-gray-900 text-white p-2 rounded-lg hover:bg-ricoh-red transition-colors" title="加入购物车">
                                    <ShoppingCart size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default EShop;