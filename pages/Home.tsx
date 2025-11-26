import React from 'react';
import { User, UserRole } from '../types';
import { ArrowRight, ShoppingBag, FileText, Settings, Users, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  user: User;
}

const Home: React.FC<HomeProps> = ({ user }) => {
  // F-HM-01: Personalized Banner Logic
  const getBannerContent = () => {
    switch (user.role) {
      case UserRole.PARTNER:
        return {
          title: "赋能合作伙伴，共创未来",
          subtitle: "获取独家竞标工具，报备商机，与理光共同拓展业务版图。",
          bg: "bg-ricoh-dark", // Corporate Dark for Partners
          cta: "前往合作伙伴专区",
          link: "/partner"
        };
      case UserRole.KA:
        return {
          title: "企业级数字化转型方案",
          subtitle: "为大型企业量身定制的文档管理与可持续发展战略，助力高效运营。",
          bg: "bg-ricoh-red", // Brand Red for KA
          cta: "查看解决方案",
          link: "/solutions"
        };
      case UserRole.SME:
      default:
        return {
          title: "智慧办公，高效之选",
          subtitle: "专为成长型企业设计的超值办公组合，提升团队协作效率。",
          bg: "bg-gradient-to-r from-[#cf142b] to-[#a00f21]", // Red Gradient
          cta: "立即选购",
          link: "/eshop"
        };
    }
  };

  const banner = getBannerContent();

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <div className={`relative rounded-none md:rounded-lg overflow-hidden shadow-sm ${banner.bg} text-white`}>
        {/* Subtle texture overlay for premium feel */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="relative px-8 py-20 md:px-16 md:py-24 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-white/60"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/90">
               Welcome, {user.name}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight font-sans">
            {banner.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 font-light max-w-2xl leading-relaxed">
            {banner.subtitle}
          </p>
          <Link
            to={banner.link}
            className="inline-flex items-center gap-3 bg-white text-ricoh-red px-8 py-3.5 text-sm font-bold hover:bg-gray-100 transition-all shadow-md uppercase tracking-wide group"
          >
            {banner.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Quick Links (F-HM-02) */}
      <div>
        <div className="flex items-end justify-between mb-8 border-b border-gray-200 pb-4">
             <h2 className="text-2xl font-bold text-gray-900 tracking-tight">快速访问</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {user.role === UserRole.PARTNER && (
                 <Link to="/partner" className="bg-white p-8 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-ricoh-red/30 hover:shadow-md transition-all group text-center">
                 <div className="w-14 h-14 mx-auto bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-ricoh-red group-hover:text-white transition-colors duration-300">
                   <Users size={24} />
                 </div>
                 <h3 className="font-bold text-gray-900 mb-2">合作伙伴专区</h3>
                 <p className="text-xs text-gray-500">投标与商机报备</p>
               </Link>
            )}
            <Link to="/solutions" className="bg-white p-8 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-ricoh-red/30 hover:shadow-md transition-all group text-center">
              <div className="w-14 h-14 mx-auto bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-ricoh-red group-hover:text-white transition-colors duration-300">
                <FileText size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">智能选型</h3>
              <p className="text-xs text-gray-500">寻找最适合的产品</p>
            </Link>
            <Link to="/eshop" className="bg-white p-8 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-ricoh-red/30 hover:shadow-md transition-all group text-center">
              <div className="w-14 h-14 mx-auto bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-ricoh-red group-hover:text-white transition-colors duration-300">
                <ShoppingBag size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">耗材订购</h3>
              <p className="text-xs text-gray-500">原厂耗材 极速送达</p>
            </Link>
            <Link to="/service" className="bg-white p-8 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-ricoh-red/30 hover:shadow-md transition-all group text-center">
              <div className="w-14 h-14 mx-auto bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-ricoh-red group-hover:text-white transition-colors duration-300">
                <Settings size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">服务与驱动</h3>
              <p className="text-xs text-gray-500">获取技术支持</p>
            </Link>
            {/* Generic fallback card if not partner to fill grid */}
            {user.role !== UserRole.PARTNER && (
                <Link to="/profile" className="bg-white p-8 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-ricoh-red/30 hover:shadow-md transition-all group text-center">
                <div className="w-14 h-14 mx-auto bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-ricoh-red group-hover:text-white transition-colors duration-300">
                  <Truck size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">我的订单</h3>
                <p className="text-xs text-gray-500">查看物流状态</p>
              </Link>
            )}
        </div>
      </div>

      {/* F-HM-03 Personalized Recommendations - Corporate Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: ESG - Clean Light Style */}
        <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-ricoh-red flex flex-col justify-between h-full hover:shadow-lg transition-shadow">
            <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">SUSTAINABILITY</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">追踪您的碳足迹</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">理光承诺实现零碳社会。查看您的设备使用 Eco-Mode 如何帮助减少能源消耗。</p>
            </div>
            <button className="text-ricoh-red text-sm font-bold hover:text-red-800 text-left uppercase tracking-wider flex items-center gap-2">
                查看报告 <ArrowRight size={14} />
            </button>
        </div>
        
        {/* Card 2: Events - Gray Style */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-t-4 border-gray-800 flex flex-col justify-between h-full hover:shadow-lg transition-shadow">
            <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">EVENTS</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">数字化工作场所网络研讨会</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">12月10日，诚邀您参与，深入了解理光 Streamline NX 的全新功能与实战案例。</p>
            </div>
            <button className="text-gray-900 text-sm font-bold hover:text-ricoh-red text-left uppercase tracking-wider flex items-center gap-2">
                立即报名 <ArrowRight size={14} />
            </button>
        </div>

        {/* Card 3: Promotion - Dark Style */}
        <div className="bg-ricoh-dark text-white p-8 rounded-lg shadow-sm border-t-4 border-white/20 flex flex-col justify-between h-full hover:shadow-lg transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-ricoh-red rounded-full opacity-20 blur-xl"></div>
            <div className="relative z-10">
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-4 block">CAMPAIGN</span>
                <h3 className="text-xl font-bold mb-3 leading-tight">以旧换新计划</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">升级您的旧设备，购买全新 IM 系列数码复合机最高可享 85 折优惠。</p>
            </div>
            <button className="relative z-10 text-white text-sm font-bold hover:text-gray-200 text-left uppercase tracking-wider flex items-center gap-2">
                检查资格 <ArrowRight size={14} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Home;