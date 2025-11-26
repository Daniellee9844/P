import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, User as UserIcon, LogOut, ShoppingCart, Briefcase, Settings, Wrench, Search, LayoutDashboard } from 'lucide-react';
import { User, UserRole } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  user: User;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, user, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: '首页', path: '/', icon: <LayoutDashboard size={18} /> },
    { name: '解决方案', path: '/solutions', icon: <Briefcase size={18} /> },
    { name: '在线商城', path: '/eshop', icon: <ShoppingCart size={18} /> },
    { name: '服务支持', path: '/service', icon: <Wrench size={18} /> },
    // Only show Partner Zone to Partners
    ...(user.role === UserRole.PARTNER 
      ? [{ name: '合作伙伴专区', path: '/partner', icon: <UserIcon size={18} /> }] 
      : []),
    { name: '个人中心', path: '/profile', icon: <Settings size={18} /> },
  ];

  // Helper to translate role display
  const getRoleName = (role: string) => {
    switch(role) {
      case UserRole.SME: return '中小企业';
      case UserRole.KA: return '大客户';
      case UserRole.PARTNER: return '合作伙伴';
      default: return '访客';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 font-sans shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              {/* Official Logo Lockup */}
              <NavLink to="/" className="flex-shrink-0 flex flex-col justify-center group">
                <div className="flex items-baseline gap-2">
                   <span className="font-sans font-bold text-3xl text-ricoh-red tracking-tighter leading-none">RICOH</span>
                   <span className="font-sans font-bold text-2xl text-ricoh-red leading-none">理光</span>
                </div>
                <span className="text-[11px] text-black font-medium tracking-[0.05em] leading-tight mt-1 group-hover:text-ricoh-red transition-colors">
                  imagine. change.
                </span>
              </NavLink>
              
              <nav className="hidden md:ml-12 md:flex md:space-x-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200 h-20 ${
                        isActive
                          ? 'border-ricoh-red text-ricoh-red'
                          : 'border-transparent text-gray-600 hover:text-ricoh-red hover:border-gray-200'
                      }`
                    }
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
               <div className="relative group">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-ricoh-red transition-colors" size={16} />
                 <input 
                   type="text" 
                   placeholder="搜索产品或服务..." 
                   className="pl-10 pr-4 py-2 rounded-none border-b border-gray-300 text-sm focus:outline-none focus:border-ricoh-red w-64 bg-transparent transition-colors placeholder-gray-400"
                 />
               </div>
              <div className="flex items-center gap-3 border-l pl-6 border-gray-200 h-8">
                 <div className="text-right hidden lg:block">
                    <div className="text-sm font-bold text-gray-800">{user.name}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wide">{getRoleName(user.role)}</div>
                 </div>
                 <img src={user.avatar} alt="User" className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover" />
                 <button onClick={onLogout} className="ml-2 text-gray-400 hover:text-ricoh-red transition-colors" title="退出登录">
                   <LogOut size={18} />
                 </button>
              </div>
            </div>
            
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-ricoh-red hover:bg-gray-50 focus:outline-none"
              >
                <span className="sr-only">打开菜单</span>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 shadow-lg absolute w-full z-50">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block pl-3 pr-4 py-3 border-l-4 text-base font-medium ${
                      isActive
                        ? 'bg-red-50 border-ricoh-red text-ricoh-red'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    {item.name}
                  </div>
                </NavLink>
              ))}
            </div>
            <div className="pt-4 pb-4 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full object-cover" src={user.avatar} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">{user.name}</div>
                  <div className="text-sm font-medium text-gray-500">{user.company}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
             <div>
                <div className="flex items-baseline gap-2 mb-4">
                   <span className="font-bold text-2xl text-ricoh-red tracking-tighter">RICOH</span>
                   <span className="font-bold text-xl text-ricoh-red">理光</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                   理光集团致力于通过创新的技术和服务，助力客户实现数字化工作场所的变革。
                </p>
             </div>
             <div>
               <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">产品与服务</h4>
               <ul className="space-y-2 text-sm text-gray-500">
                 <li><a href="#" className="hover:text-ricoh-red">办公打印设备</a></li>
                 <li><a href="#" className="hover:text-ricoh-red">商业印刷</a></li>
                 <li><a href="#" className="hover:text-ricoh-red">工业喷墨</a></li>
                 <li><a href="#" className="hover:text-ricoh-red">软件解决方案</a></li>
               </ul>
             </div>
             <div>
               <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">关于理光</h4>
               <ul className="space-y-2 text-sm text-gray-500">
                 <li><a href="#" className="hover:text-ricoh-red">企业概况</a></li>
                 <li><a href="#" className="hover:text-ricoh-red">可持续发展 (ESG)</a></li>
                 <li><a href="#" className="hover:text-ricoh-red">新闻中心</a></li>
                 <li><a href="#" className="hover:text-ricoh-red">招贤纳士</a></li>
               </ul>
             </div>
             <div>
               <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">联系我们</h4>
               <ul className="space-y-2 text-sm text-gray-500">
                 <li>全国服务热线: 400-888-XXXX</li>
                 <li>工作时间: 周一至周五 9:00-18:00</li>
                 <li className="flex gap-4 mt-4">
                    {/* Social Placeholders */}
                    <div className="w-8 h-8 bg-gray-200 rounded-full hover:bg-ricoh-red cursor-pointer transition-colors"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full hover:bg-ricoh-red cursor-pointer transition-colors"></div>
                 </li>
               </ul>
             </div>
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; 2024 理光（中国）投资有限公司 版权所有。 沪ICP备XXXXXXXX号</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-ricoh-red transition-colors">隐私政策</a>
              <a href="#" className="hover:text-ricoh-red transition-colors">使用条款</a>
              <a href="#" className="hover:text-ricoh-red transition-colors">网站地图</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;