import React, { useState } from 'react';
import { SOLUTIONS_DATA } from '../constants';
import { Check, ChevronRight, Sliders } from 'lucide-react';

const Solutions: React.FC = () => {
  const [step, setStep] = useState(0);
  const [selection, setSelection] = useState<any>({});
  const [showResult, setShowResult] = useState(false);

  // F-SL-01: OP Smart Selection Mock Logic
  const handleSelect = (key: string, value: string) => {
    setSelection({ ...selection, [key]: value });
    if (step < 2) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetSelection = () => {
    setStep(0);
    setSelection({});
    setShowResult(false);
  };

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">寻找您的理想解决方案</h1>
        <p className="text-gray-500 mt-3">无论您需要硬件还是软件，我们的智能向导都能帮您找到最适合业务需求的产品。</p>
      </div>

      {/* F-SL-01: Smart Selection Wizard */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <Sliders size={20} className="text-ricoh-red"/>
            <h2 className="font-semibold text-gray-800">智能产品选型</h2>
        </div>
        
        <div className="p-8">
            {!showResult ? (
                <div className="max-w-xl mx-auto">
                    {step === 0 && (
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-center">您的月打印量大约是多少？</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {['< 1,000 页', '1,000 - 5,000 页', '> 5,000 页'].map((opt) => (
                                    <button key={opt} onClick={() => handleSelect('volume', opt)} className="p-4 rounded-xl border-2 border-gray-100 hover:border-ricoh-red hover:bg-red-50 transition-all text-sm font-medium text-gray-700">
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {step === 1 && (
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-center">您是否需要彩色打印？</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['仅黑白', '彩色 + 黑白'].map((opt) => (
                                    <button key={opt} onClick={() => handleSelect('color', opt)} className="p-4 rounded-xl border-2 border-gray-100 hover:border-ricoh-red hover:bg-red-50 transition-all text-sm font-medium text-gray-700">
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                     {step === 2 && (
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-center">您需要的主要功能是什么？</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {['仅打印', '多功能 (打印/扫描/复印)', '专业生产型'].map((opt) => (
                                    <button key={opt} onClick={() => handleSelect('function', opt)} className="p-4 rounded-xl border-2 border-gray-100 hover:border-ricoh-red hover:bg-red-50 transition-all text-sm font-medium text-gray-700">
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    <div className="mt-8 flex justify-center gap-2">
                        {[0, 1, 2].map(i => (
                            <div key={i} className={`h-2 w-2 rounded-full ${i === step ? 'bg-ricoh-red' : 'bg-gray-200'}`}></div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col md:flex-row gap-8 items-center animate-fade-in">
                    <div className="flex-1">
                        <span className="text-green-600 font-bold text-sm uppercase tracking-wide">最佳匹配</span>
                        <h3 className="text-2xl font-bold text-gray-900 mt-2">Ricoh IM C2000</h3>
                        <p className="text-gray-600 mt-4">基于您对 <span className="font-semibold">{selection.volume}</span> 和 <span className="font-semibold">{selection.color}</span> 的需求推荐。</p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-green-500" /> 20 页/分钟 输出速度</li>
                            <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-green-500" /> 10.1英寸 智能操作面板</li>
                            <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-green-500" /> 支持移动打印</li>
                        </ul>
                        <div className="mt-8 flex gap-4">
                            <button className="bg-ricoh-red text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">查看详情</button>
                            <button onClick={resetSelection} className="text-gray-500 font-medium hover:text-gray-800">重新选择</button>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="https://images.unsplash.com/photo-1588619461332-45f63e9c8a9b?auto=format&fit=crop&q=80&w=600" alt="Recommended Product" className="rounded-lg shadow-lg max-w-xs" />
                    </div>
                </div>
            )}
        </div>
      </div>

      {/* F-SL-03 & F-SL-04: Industry Solutions */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-ricoh-red pl-3">行业成功案例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOLUTIONS_DATA.map((item, index) => (
                <div key={index} className="group relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
                    <img src={item.image} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-0 left-0 p-6 z-20 text-white w-full">
                        <span className="text-xs font-bold uppercase tracking-wider bg-ricoh-red px-2 py-1 rounded-sm mb-2 inline-block">{item.category}</span>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                            阅读案例 <ChevronRight size={16} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;