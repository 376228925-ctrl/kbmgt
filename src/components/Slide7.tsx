import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrainCircuit, TriangleAlert, TrendingDown, Activity, Lightbulb, Play, Loader2, RotateCcw } from 'lucide-react';

export function Slide7() {
  const [step, setStep] = useState<0 | 1 | 2>(0);

  const startDeduction = () => {
    setStep(1);
    setTimeout(() => {
      setStep(2);
    }, 2000); // 2 seconds deduction effect
  };

  return (
    <div className="flex-1 p-12 flex flex-col h-full bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mb-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4 border border-purple-500/20"
        >
          <BrainCircuit size={16} /> 七、深度思考与价值升华
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-white tracking-tight"
        >
          思想实验：如果数据部门消失一天会怎么样？
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-purple-300 mt-3 text-lg font-medium"
        >
          看似平时都在做支撑性的工作，但当数据突然停摆时，公司会发生什么？
        </motion.p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto w-full relative">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              className="flex flex-col items-center justify-center h-64"
            >
              <button
                onClick={startDeduction}
                className="group relative flex items-center gap-3 px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-2xl font-bold transition-all shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:-translate-y-1"
              >
                <Play className="fill-white" size={28} />
                点击开始推演
                <div className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-0 group-hover:animate-ping"></div>
              </button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-purple-400 h-64"
            >
              <Loader2 size={64} className="animate-spin mb-6" />
              <h3 className="text-2xl font-bold animate-pulse">正在推演公司运转状况...</h3>
              <div className="w-80 h-2 bg-slate-800 rounded-full mt-8 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full flex flex-col gap-6"
            >
              <div className="grid grid-cols-2 gap-8">
                {/* Scenario A: Low Value */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 relative overflow-hidden group hover:border-slate-500/50 transition-all"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingDown size={120} className="text-slate-400" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mb-6 border border-slate-600">
                      <TriangleAlert className="text-slate-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">版本一：低价值的“取数机器”</h3>
                    <ul className="space-y-4 text-slate-300 mb-8">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2"></div>
                        <p>业务人员抱怨：“今天没报表看了”</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2"></div>
                        <p>取数需求变少了，大家凭感觉做事</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2"></div>
                        <p>日常工作照常进行，只是少了一些参考</p>
                      </li>
                    </ul>
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-400 font-medium flex items-center gap-3">
                      <div className="w-1 h-8 bg-slate-600 rounded-full"></div>
                      仅仅是“不方便”，说明我们只做了边缘支撑
                    </div>
                  </div>
                </motion.div>

                {/* Scenario B: High Value */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, type: "spring" }}
                  className="bg-purple-900/20 border border-purple-500/30 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-400/50 transition-all shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Activity size={120} className="text-purple-400" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/30">
                      <Lightbulb className="text-purple-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">版本二：高价值的“核心引擎”</h3>
                    <ul className="space-y-4 text-purple-100 mb-8">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
                        <p className="font-medium">公司各项核心经营数据无法产出</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
                        <p className="font-medium">领导决策层会议因缺乏数据支撑全部取消</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
                        <p className="font-medium">自动化营销、风控等核心业务流程直接中断</p>
                      </li>
                    </ul>
                    <div className="p-4 rounded-xl bg-purple-950/80 border border-purple-500/50 text-purple-200 font-bold flex items-center gap-3">
                      <div className="w-1 h-8 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                      公司运转“停滞”，这才是不可替代的价值！
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Conclusion */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0 }}
                className="mt-2 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-rose-900/40 border border-purple-500/30 rounded-2xl p-6 text-center relative"
              >
                <p className="text-xl text-white font-medium leading-relaxed">
                  协同的终极目标，不是为了让别人觉得我们服务态度好，<br/>
                  而是要<span className="text-purple-400 font-bold mx-2">深度嵌入核心业务流与决策流</span>，成为驱动企业运转的引擎。
                </p>
                <button 
                  onClick={() => setStep(0)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
                  title="重新推演"
                >
                  <RotateCcw size={16} /> 重新推演
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
