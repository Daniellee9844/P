import React from 'react';
import { Download, Award, Briefcase, FileCheck, FileText, ChevronRight } from 'lucide-react';

const Partner: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in">
        {/* Partner Header - Corporate Style */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-10 md:p-12 rounded-lg shadow-sm relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 bg-ricoh-red"></span>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300">Partner Zone</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 font-sans">合作伙伴专区</h1>
                <p className="text-gray-400 text-lg mb-8 max-w-xl">理光授权经销商专属工具与资源中心。共创价值，共享成功。</p>
                
                <div className="flex flex-wrap gap-6">
                    <div className="bg-white/10 p-4 rounded min-w-[140px] border-l-2 border-ricoh-red backdrop-blur-sm">
                        <div className="text-2xl font-bold">金牌代理</div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">当前级别</div>
                    </div>
                     <div className="bg-white/10 p-4 rounded min-w-[140px] border-l-2 border-gray-500 backdrop-blur-sm">
                        <div className="text-2xl font-bold">12</div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">活跃商机</div>
                    </div>
                </div>
            </div>
            
            {/* Abstract Background Element */}
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
                <Award size={300} />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* F-PT-01: Opportunity Registration */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                    <div className="bg-ricoh-red/10 p-3 rounded-full text-ricoh-red">
                        <Briefcase size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">商机报备</h2>
                        <p className="text-xs text-gray-500">录入新项目以申请价格保护</p>
                    </div>
                </div>
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">客户名称</label>
                        <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:border-ricoh-red focus:ring-0 outline-none transition-colors" placeholder="输入公司全称" />
                    </div>
                    <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">预计项目金额 (RMB)</label>
                        <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:border-ricoh-red focus:ring-0 outline-none transition-colors" placeholder="¥ 0.00" />
                    </div>
                    <button className="w-full bg-ricoh-red text-white py-3 rounded font-bold hover:bg-red-700 transition-colors uppercase tracking-wide text-sm">提交报备申请</button>
                </form>
            </div>

            {/* F-PT-02: Bidding Tools */}
             <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                    <div className="bg-gray-100 p-3 rounded-full text-gray-700">
                        <FileCheck size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">竞标工具箱</h2>
                        <p className="text-xs text-gray-500">官方授权文件与模板下载</p>
                    </div>
                </div>
                
                <div className="space-y-4">
                     {[
                         {name: '理光 IM 系列规格书 (2024)', size: '2.4 MB', type: 'PDF'},
                         {name: 'ISO 14001 环境管理体系证书', size: '1.1 MB', type: 'IMG'},
                         {name: '政府采购投标模板 v3', size: '5.6 MB', type: 'DOC'},
                     ].map((file, i) => (
                         <div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded hover:bg-gray-50 cursor-pointer group transition-all">
                             <div className="flex items-center gap-4">
                                <div className="text-gray-400 group-hover:text-ricoh-red transition-colors"><FileText size={20}/></div>
                                <div>
                                    <div className="text-sm font-bold text-gray-800">{file.name}</div>
                                    <div className="text-[10px] text-gray-400 mt-1">{file.type} • {file.size}</div>
                                </div>
                             </div>
                             <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 group-hover:bg-ricoh-red group-hover:text-white transition-all">
                                 <Download size={14} />
                             </div>
                         </div>
                     ))}
                </div>
                <button className="w-full mt-8 flex items-center justify-center gap-2 border border-gray-300 text-gray-600 py-3 rounded font-bold text-sm hover:border-gray-400 hover:text-gray-900 transition-colors uppercase">
                    查看所有资源 <ChevronRight size={14}/>
                </button>
            </div>
        </div>
    </div>
  );
};

export default Partner;