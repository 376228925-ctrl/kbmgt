import React from 'react';
import { TableProperties, CheckCircle, Network } from 'lucide-react';

export function Slide3() {
  return (
    <div className="flex-1 p-12 flex flex-col h-full">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-4 border border-indigo-500/20">
          <TableProperties size={16} /> 三、硬性解法：契约与机制
        </div>
        <h2 className="text-4xl font-bold text-white tracking-tight">
          破除“责任模糊”与“信息不对称”
        </h2>
        <p className="text-indigo-300 mt-3 text-lg font-medium">康威定律：系统架构是组织架构的倒影。必须用机制替代“人情”。</p>
      </div>

      <div className="flex-1 flex gap-8 max-w-6xl mx-auto w-full">
        {/* RACI Matrix */}
        <div className="flex-1 bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <CheckCircle className="text-indigo-400" /> 明确边界：建 RACI 矩阵
          </h3>
          <p className="text-slate-400 mb-6">解决“谁来做？”的协作第一问，消除推诿风险。</p>
          <div className="space-y-4 flex-1">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xl shrink-0">R</div>
              <div>
                <p className="text-white font-bold">Responsible (执行者)</p>
                <p className="text-slate-400 text-sm mt-1">谁负责干活？</p>
              </div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl shrink-0">A</div>
              <div>
                <p className="text-white font-bold">Accountable (担责者)</p>
                <p className="text-slate-400 text-sm mt-1">谁对结果负责？<span className="text-emerald-400 font-bold">（A只能有一个！）</span></p>
              </div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xl shrink-0">C</div>
              <div>
                <p className="text-white font-bold">Consulted (咨询者)</p>
                <p className="text-slate-400 text-sm mt-1">做决定前需要问谁？</p>
              </div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-500/20 text-slate-400 flex items-center justify-center font-bold text-xl shrink-0">I</div>
              <div>
                <p className="text-white font-bold">Informed (知情者)</p>
                <p className="text-slate-400 text-sm mt-1">做完后通知谁？</p>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Mechanism */}
        <div className="flex-1 bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Network className="text-indigo-400" /> 高效协作机制建设
          </h3>
          <p className="text-slate-400 mb-6">解决“信息不对称”，统一视图，打破部门壁垒。</p>
          <div className="bg-indigo-950/30 p-6 rounded-2xl border border-indigo-500/20 flex-1 flex flex-col justify-center">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <p className="text-white font-bold text-lg">统一信息平台与工具</p>
                  <p className="text-slate-400 mt-1">使用统一协作工具（丰声/丰邮/智能文档/DTI），明确信息Owner，避免信息碎片化。</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <p className="text-white font-bold text-lg">制定标准化闭环流程</p>
                  <p className="text-slate-400 mt-1">明确责任人与标准，建立有效的协作流程，如：工作线上化管理，把内部部门当“客户”。</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <p className="text-white font-bold text-lg">建立定期沟通机制</p>
                  <p className="text-slate-400 mt-1">周例会/月度复盘/季度对齐 OKR，量化共识，从“我部门”转向“我们目标”。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
