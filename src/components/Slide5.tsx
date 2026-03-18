import React from 'react';
import { Zap, GitMerge } from 'lucide-react';

export function Slide5() {
  return (
    <div className="flex-1 p-12 flex flex-col h-full">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
          <Zap size={16} /> 五、落地执行
        </div>
        <h2 className="text-4xl font-bold text-white tracking-tight">
          专项快速拉通与协作六步骤
        </h2>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full gap-8">
        
        {/* Quick Alignment */}
        <div className="bg-gradient-to-r from-amber-900/30 to-slate-900/40 border border-amber-500/30 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="text-amber-400" /> 专项快速拉通 (小群攻坚)
          </h3>
          <div className="flex gap-6">
            <div className="flex-1 bg-slate-900/60 p-5 rounded-2xl border border-slate-700">
              <p className="text-slate-300">避免50人大会，改用<span className="text-amber-400 font-bold">小范围专项会</span>。</p>
            </div>
            <div className="flex-1 bg-slate-900/60 p-5 rounded-2xl border border-slate-700">
              <p className="text-slate-300">建立定期对齐机制，<span className="text-amber-400 font-bold">问题要小，响应要快</span>。</p>
            </div>
            <div className="flex-1 bg-slate-900/60 p-5 rounded-2xl border border-slate-700">
              <p className="text-slate-300">建共享词汇表，统一术语，<span className="text-amber-400 font-bold">用通俗语言</span>。</p>
            </div>
          </div>
        </div>

        {/* 6 Steps */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <GitMerge className="text-blue-400" /> 协作六步骤
          </h3>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {[
                { step: 1, title: '事前准备', desc: '理清目标与资源' },
                { step: 2, title: '需求确认', desc: '对齐期望与标准' },
                { step: 3, title: '阐述观点', desc: '结构化表达诉求' },
                { step: 4, title: '处理异议', desc: '求同存异，化解分歧' },
                { step: 5, title: '达成协议', desc: '明确RACI与SLA' },
                { step: 6, title: '共同实施', desc: '闭环跟进与反馈' },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-blue-500 text-blue-400 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    {item.step}
                  </div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
