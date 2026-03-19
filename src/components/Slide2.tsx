import React from 'react';
import { BrainCircuit, Scale } from 'lucide-react';

export function Slide2() {
  return (
    <div className="flex-1 p-12 flex flex-col h-full">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4 border border-purple-500/20">
          <BrainCircuit size={16} /> 二、底层逻辑剖析
        </div>
        <h2 className="text-4xl font-bold text-white tracking-tight">
          为什么“好好说话”没用？
        </h2>
      </div>

      <div className="flex-1 flex gap-8 max-w-5xl mx-auto w-full">
        <div className="flex-1 bg-slate-800/40 p-8 rounded-3xl border border-slate-700/50 relative overflow-hidden group hover:border-purple-500/50 transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <BrainCircuit size={100} className="text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">基本归因错误</h3>
          <p className="text-purple-400 font-medium mb-6 text-sm">Fundamental Attribution Error</p>
          
          <div className="space-y-6 relative z-10">
            <p className="text-slate-300 text-lg leading-relaxed">
              这是<span className="text-rose-400 font-bold">“情绪冲突”</span>与<span className="text-rose-400 font-bold">“信任损耗”</span>的心理学根源。
            </p>
            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-700">
              <p className="text-slate-400 italic">
                "我们评价自己时，看的是<span className="text-white font-bold">动机</span>；<br/>
                我们评价别人时，看的是<span className="text-white font-bold">行为</span>。"
              </p>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                业务看技术：“死板、官僚、不配合。”
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                技术看业务：“朝令夕改、逻辑混乱。”
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 bg-slate-800/40 p-8 rounded-3xl border border-slate-700/50 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Scale size={100} className="text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">困境与本位主义</h3>
          <p className="text-emerald-400 font-medium mb-6 text-sm">Prisoner's Dilemma & Departmentalism</p>
          
          <div className="space-y-6 relative z-10">
            <p className="text-slate-300 text-lg leading-relaxed">
              这是<span className="text-emerald-400 font-bold">“目标差异”</span>与<span className="text-emerald-400 font-bold">“KPI冲突”</span>的博弈论解释。
            </p>
            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-700">
              <p className="text-slate-400 italic">
                "局部的最优解，往往导致<span className="text-white font-bold">全局的最差解</span>。"
              </p>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                销售的 KPI 是“快”：先答应客户再说。
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                研发的 KPI 是“稳”：必须走完评审流程。
              </li>
            </ul>
            <p className="text-emerald-300 font-medium mt-4">
              结论：不要指望用“大局观”去对抗实打实的绩效考核。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
