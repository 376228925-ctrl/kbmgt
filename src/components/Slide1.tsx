import React from 'react';
import { Mountain, Target, MessageSquareOff } from 'lucide-react';

export function Slide1() {
  return (
    <div className="flex-1 p-12 flex flex-col h-full">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 border border-blue-500/20">
          <Mountain size={16} /> 一、重新定义问题
        </div>
        <h2 className="text-4xl font-bold text-white tracking-tight">
          跨部门协作的“冰山模型”与五大障碍
        </h2>
      </div>

      <div className="flex-1 flex items-center justify-center max-w-5xl mx-auto w-full gap-12">
        <div className="flex-1 relative">
          {/* Iceberg Graphic */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-blue-500/50 border-t border-dashed border-blue-400/50 z-10"></div>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-blue-300 font-medium tracking-widest text-sm z-10 bg-slate-900 px-2">水面之上 (表象)</div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-blue-500/80 font-medium tracking-widest text-sm z-10">水面之下 (根源)</div>
            
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
              <path d="M50 10 L70 33 L30 33 Z" fill="url(#surfaceGrad)" />
              <path d="M30 33 L70 33 L85 90 L50 95 L15 90 Z" fill="url(#deepGrad)" opacity="0.8" />
              <defs>
                <linearGradient id="surfaceGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#1E3A8A" />
                </linearGradient>
                <linearGradient id="deepGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1E3A8A" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex-[1.2] flex flex-col gap-5">
          <div className="bg-slate-800/40 p-5 rounded-2xl border border-blue-500/30">
            <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
              <MessageSquareOff size={20} /> 水面之上：沟通的隐形杀手
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-rose-500/20 text-rose-400 text-xs px-2 py-1 rounded font-bold shrink-0 mt-0.5">情绪冲突</span>
                <p className="text-slate-300 text-sm">长期摩擦积累负面情绪，沟通变对抗，导致<span className="text-rose-400 font-medium">信任损耗</span>。</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-1 rounded font-bold shrink-0 mt-0.5">术语差异</span>
                <p className="text-slate-300 text-sm">业务与技术中含义迥异，同一词汇不同解读，产生<span className="text-amber-400 font-medium">语义鸿沟</span>。</p>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/40 p-5 rounded-2xl border border-indigo-500/30">
            <h3 className="text-lg font-bold text-indigo-400 mb-3 flex items-center gap-2">
              <Target size={20} /> 水面之下：效率低下的根源
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded font-bold shrink-0 mt-0.5">目标差异</span>
                <p className="text-slate-300 text-sm">各部门KPI不同，优先级天然冲突，资源争夺导致<span className="text-emerald-400 font-medium">协作阻力</span>。</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded font-bold shrink-0 mt-0.5">责任模糊</span>
                <p className="text-slate-300 text-sm">任务归属不清，边界模糊，无人负责，存在<span className="text-purple-400 font-medium">推诿风险</span>。</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded font-bold shrink-0 mt-0.5">信息不对称</span>
                <p className="text-slate-300 text-sm">信息碎片化，缺乏统一视图，看不见全貌导致<span className="text-cyan-400 font-medium">视图割裂</span>。</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
