import React from 'react';
import { UserRole } from '../types';

interface RoleSwitcherProps {
  currentRole: UserRole;
  onChange: (role: UserRole) => void;
}

const RoleSwitcher: React.FC<RoleSwitcherProps> = ({ currentRole, onChange }) => {
  const labels: Record<string, string> = {
    'SME': '中小企业',
    'KA': '大客户',
    'PARTNER': '经销商/伙伴'
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md border border-gray-200 text-xs flex flex-col gap-2">
      <div className="font-semibold text-gray-500 uppercase tracking-wider px-1">当前视角 (演示用):</div>
      <div className="flex gap-2">
        {(['SME', 'KA', 'PARTNER'] as UserRole[]).map((role) => (
          <button
            key={role}
            onClick={() => onChange(role)}
            className={`px-3 py-1.5 rounded-md transition-all ${
              currentRole === role
                ? 'bg-ricoh-dark text-white font-medium shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {labels[role]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoleSwitcher;