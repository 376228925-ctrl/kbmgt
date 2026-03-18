import React from 'react';
import { Flag, Users } from 'lucide-react';

export function Slide6() {
  return (
    <div className="flex-1 p-12 flex flex-col h-full">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-sm font-medium mb-4 border border-rose-500/20">
          <Flag size={16} /> 六、行动共识
        </div>
        <h2 className="text-4xl font-bold text-white tracking-tight">
          沟通无标准答案，但有方法论
        </h2>
        <p className="text-rose-300 mt-3 text-lg font-medium">以共情为基，以目标为锚，用小切口推动大协同。</p>
      </div>

      <div className="flex-1 flex flex-col gap-8 max-w-5xl mx-auto w-full">
        
        {/* Roles */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Users className="text-blue-400" /> 会议与协作角色定义
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-blue-950/30 p-6 rounded-2xl border border-blue-500/20">
              <h4 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div> 主讲人
              </h4>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• 主导汇报，把控节奏</li>
                <li>• 定位为引子，非标准答案</li>
                <li className="text-blue-400 font-medium mt-2 pt-2 border-t border-blue-500/20">控场能力决定讨论深度</li>
              </ul>
            </div>
            <div className="bg-amber-950/30 p-6 rounded-2xl border border-amber-500/20">
              <h4 className="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div> 案例提供
              </h4>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• 提供真实业务场景素材</li>
                <li>• 真实场景增强说服力</li>
                <li className="text-amber-400 font-medium mt-2 pt-2 border-t border-amber-500/20">案例是共鸣的钥匙</li>
              </ul>
            </div>
            <div className="bg-rose-950/30 p-6 rounded-2xl border border-rose-500/20">
              <h4 className="text-lg font-bold text-rose-400 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-500"></div> 框架整理
              </h4>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• 整理会议内容并发布</li>
                <li>• 确保信息同步与落地</li>
                <li className="text-rose-400 font-medium mt-2 pt-2 border-t border-rose-500/20">清晰交付，减少摩擦</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Action Suggestions */}
        <div className="bg-gradient-to-r from-indigo-900/40 to-slate-900/40 border border-indigo-500/30 rounded-3xl p-8 flex-1 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">三个行动建议 (Takeaways)</h3>
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-4 bg-slate-900/60 px-6 py-4 rounded-2xl border border-slate-700">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">1</div>
              <p className="text-white font-medium">识别沟通障碍<br/><span className="text-slate-400 text-sm font-normal">列出优先级清单</span></p>
            </div>
            <div className="flex items-center gap-4 bg-slate-900/60 px-6 py-4 rounded-2xl border border-slate-700">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">2</div>
              <p className="text-white font-medium">选1-2个技巧练习<br/><span className="text-slate-400 text-sm font-normal">如结构化表达，记录效果</span></p>
            </div>
            <div className="flex items-center gap-4 bg-slate-900/60 px-6 py-4 rounded-2xl border border-slate-700">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">3</div>
              <p className="text-white font-medium">推动建立机制<br/><span className="text-slate-400 text-sm font-normal">定期跨部门沟通与复盘</span></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
