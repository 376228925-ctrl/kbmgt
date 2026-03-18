import React from 'react';
import { HeartHandshake, Mic, Ear } from 'lucide-react';

export function Slide4() {
  return (
    <div className="flex-1 p-12 flex flex-col h-full">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4 border border-emerald-500/20">
          <HeartHandshake size={16} /> 四、软性解法：共情与表达
        </div>
        <h2 className="text-4xl font-bold text-white tracking-tight">
          破局关键：共情、目标与核心沟通技巧
        </h2>
      </div>

      <div className="flex-1 flex flex-col gap-8 max-w-5xl mx-auto w-full">
        {/* Empathy & Goals */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-emerald-500/30">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <HeartHandshake className="text-emerald-400" size={20} /> 共情与尊重 (换位思考)
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>• 理解对方立场，而非急于纠正。</li>
              <li>• 先建立信任，再解决议题。</li>
              <li className="text-emerald-400 font-medium mt-2">尊重是高效沟通的起点，先处理情绪，建同理心。</li>
            </ul>
          </div>
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-blue-500/30">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Mic className="text-blue-400" size={20} /> 聚焦共同目标 (超越本位)
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>• 从“我部门”转向“我们目标”。</li>
              <li>• 用共同利益对齐优先级。</li>
              <li className="text-blue-400 font-medium mt-2">目标一致，分歧才有解。建共同目标，量化共识。</li>
            </ul>
          </div>
        </div>

        {/* Core Skills */}
        <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700/50 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-6">高效沟通的核心技巧</h3>
          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
              <h4 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
                <Mic size={18} /> 结构化表达 (四原则)
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold">1</span>
                  <span className="text-slate-300">结论先行 (高效表达，3分钟内)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold">2</span>
                  <span className="text-slate-300">上下对应</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold">3</span>
                  <span className="text-slate-300">分类清楚</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold">4</span>
                  <span className="text-slate-300">排序逻辑</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
              <h4 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Ear size={18} /> 有效倾听 (三层与六步)
              </h4>
              <p className="text-slate-400 text-sm mb-4">三层倾听：听内容、听情绪、听需求。</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800 p-2 rounded text-center text-slate-300 text-sm">1. 点头微笑</div>
                <div className="bg-slate-800 p-2 rounded text-center text-slate-300 text-sm">2. 重复内容</div>
                <div className="bg-slate-800 p-2 rounded text-center text-slate-300 text-sm">3. 提出问题</div>
                <div className="bg-slate-800 p-2 rounded text-center text-slate-300 text-sm">4. 表达感受</div>
                <div className="bg-slate-800 p-2 rounded text-center text-slate-300 text-sm">5. 归纳总结</div>
                <div className="bg-slate-800 p-2 rounded text-center text-slate-300 text-sm">6. 适时回应</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
