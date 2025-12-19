import Typewriter from '@/components/Typewriter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080613] scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#120a23]/90 to-transparent backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">句</span>
              </div>
              <div className="text-white text-xs leading-tight">
                <div className="font-medium">句子互动</div>
                <div className="text-[10px] tracking-wider">JUZI.BOT</div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex items-center gap-6 text-white/90 text-sm">
              <div className="cursor-pointer hover:text-white">产品与服务 ▼</div>
              <div className="cursor-pointer hover:text-white">解决方案 ▼</div>
              <a href="#" className="hover:text-white">Chatbot实践指南</a>
              <a href="#" className="hover:text-white">增长情报局</a>
              <div className="cursor-pointer hover:text-white">⋯</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white text-sm">
            <span className="cursor-pointer">EN ▼</span>
            <a href="#" className="hover:underline">预约咨询</a>
            <button className="px-5 py-2 rounded-full border border-white/50 hover:bg-white/10 transition-colors">
              登录/注册
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="min-h-[750px] pt-32 pb-20 flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(180deg, #120a23 0%, #1a0f2e 50%, #080613 100%)',
        }}
      >
        {/* Decorative gradient blobs */}
        <div className="absolute top-32 left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-20 right-32 w-48 h-48 bg-blue-600/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-32 right-48 w-56 h-56 bg-purple-700/20 rounded-full blur-[120px]"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white mb-4">
              重磅！企业级 Agentic AI 员工平台
            </h1>
            <div className="text-6xl font-bold flex items-center justify-center gap-2 flex-wrap">
              <span className="text-white">强势接入</span>
              <span className="text-[#DA37E7]">抖音，</span>
              <span className="text-white">它可以是</span>
              <span className="ml-2"><Typewriter /></span>
            </div>

            <button
              className="mt-12 px-10 py-4 rounded-full text-white text-lg font-medium hover:scale-105 transition-transform shadow-2xl"
              style={{
                background: 'linear-gradient(96deg, #EF3BFB 0.67%, #6721FF 98.48%)',
              }}
            >
              立即体验
            </button>
          </div>

          {/* Phone mockups section */}
          <div className="mt-16 relative flex items-center justify-center gap-8">
            {/* Left phone */}
            <div className="relative">
              <div className="w-48 h-96 bg-black/50 rounded-3xl border-4 border-white/20 overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 p-4">
                  <div className="text-white/70 text-xs">TikTok Chat</div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-black rounded-2xl flex items-center justify-center shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <div className="text-white text-2xl font-bold">♪</div>
                </div>
              </div>
            </div>

            {/* Center - TikTok Icon */}
            <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-black rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <div className="text-white text-4xl font-bold">♪</div>
              </div>
            </div>

            {/* Chat bubble with avatar */}
            <div className="absolute top-0 right-20 flex items-start gap-3">
              <div className="bg-white rounded-2xl p-4 shadow-2xl max-w-xs">
                <p className="text-sm text-gray-800 font-medium mb-1">遇到问题了么？</p>
                <p className="text-xs text-gray-600">点击头像跟我聊聊，让PE专家来解决你的问题</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0"></div>
            </div>

            {/* Right phones */}
            <div className="flex gap-4 items-end">
              <div className="w-48 h-96 bg-black/50 rounded-3xl border-4 border-white/20 overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 p-4">
                  <div className="text-white/70 text-xs">Messages</div>
                </div>
              </div>
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <div className="text-white text-xl font-bold">♪</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pain Points Section */}
      <section className="bg-[#080613] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">核心痛点</h2>
            <p className="text-xl text-white/70">这些是三类用户的真实困境</p>
          </div>

          {/* Pain Point 1 */}
          <div className="mb-16 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-3xl p-12 border border-red-500/20">
            <div className="grid grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  痛点 1：客户很多，但真正会转化的都被"浪费"了
                </h3>
                <div className="space-y-6 text-white/80">
                  <div>
                    <p className="font-semibold text-[#EF3BFB] mb-2">网红/达人：</p>
                    <p className="leading-relaxed">👉 每天几十上百条私信，<br/>80% 没回复 —— 或者回复太慢了</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#EF3BFB] mb-2">咨询专家：</p>
                    <p className="leading-relaxed">👉 咨询一次，没有系统化跟进，<br/>客户就凉了</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#EF3BFB] mb-2">门店老板：</p>
                    <p className="leading-relaxed">👉 客户问地址、问价格，<br/>然后就消失了</p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <p className="text-xl font-bold text-white">说人话就是：<br/>不是没客户 —— 是客户没"接住"。</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">😰</div>
                    <p className="text-white/70 text-lg">客户流失示意图</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Point 2 */}
          <div className="mb-16 bg-gradient-to-br from-yellow-900/20 to-amber-900/20 rounded-3xl p-12 border border-yellow-500/20">
            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤔</div>
                    <p className="text-white/70 text-lg">优先级困惑</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  痛点 2：不知道谁值得优先处理 —— 只能凭感觉
                </h3>
                <div className="space-y-6 text-white/80">
                  <div>
                    <p className="font-semibold text-[#EF3BFB] mb-2">网红/达人：</p>
                    <p className="leading-relaxed">👉 分不清谁是想合作，<br/>谁只是随便问问</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#EF3BFB] mb-2">咨询专家：</p>
                    <p className="leading-relaxed">👉 不知道谁是真客户，<br/>谁只是来比价的</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#EF3BFB] mb-2">门店：</p>
                    <p className="leading-relaxed">👉 谁只是问问，谁会真来店里 ——<br/>全靠蒙</p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <p className="text-xl font-bold text-white">说人话就是：<br/>客户看起来都一样，<br/>但结果完全不同。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Point 3 */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-3xl p-12 border border-purple-500/20">
            <div className="grid grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  痛点 3：跟进太依赖人 —— 一忙就断，一断就丢单
                </h3>
                <div className="space-y-6 text-white/80">
                  <div>
                    <p className="font-semibold text-[#EF3BFB] mb-2">网红/达人：</p>
                    <p className="leading-relaxed">👉 消息太多 + 情绪化回复，<br/>跟进就断了</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#EF3BFB] mb-2">咨询专家：</p>
                    <p className="leading-relaxed">👉 靠助理或靠记忆，<br/>从来不系统</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#EF3BFB] mb-2">门店：</p>
                    <p className="leading-relaxed">👉 忘了提醒、忘了确认、忘了跟进</p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <p className="text-xl font-bold text-white">说人话就是：<br/>单不是客户拒绝的 ——<br/>是被"忘了"。</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📅</div>
                    <p className="text-white/70 text-lg">跟进中断示意图</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Solution Headline */}
      <section className="py-20 bg-gradient-to-b from-[#080613] to-[#1a0f2e]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
            我们不帮你多发消息。<br/>
            <span className="text-[#EF3BFB]">我们帮你把"陌生人"变成"真正付钱的人"。</span>
          </h2>
          <div className="text-2xl text-white/80 mt-12 space-y-4">
            <p>从初次接触 → 建立信任 → 判断价值 → 自动跟进 → 成交</p>
            <p className="text-3xl font-bold text-[#EF3BFB] mt-6">AI 帮你搞定 90% 的全流程。</p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-[#080613] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">三大解决方案</h2>
            <p className="text-xl text-white/70">针对三个核心痛点的完整解决方案</p>
          </div>

          {/* Solution 1 */}
          <div className="mb-20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-3xl p-12 border border-blue-500/20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                解决方案 1：让客户主动来找你 —— 而不是你天天追客户
              </h3>
              <p className="text-xl text-[#EF3BFB] font-semibold">针对痛点 1：客户被"浪费"</p>
            </div>

            <div className="grid grid-cols-2 gap-12 items-start">
              <div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">客户的真实困境：</h4>
                  <ul className="space-y-3 text-white/80">
                    <li>✗ 客户一加你，你不知道说啥</li>
                    <li>✗ 怕聊太多，显得像推销</li>
                    <li>✗ 不发促销，客户就沉默</li>
                    <li>✗ 发促销，客户就拉黑</li>
                  </ul>
                  <p className="text-xl font-bold text-[#EF3BFB] mt-6">
                    👉 不是你不会卖 —— 是缺了"建立信任"这一步。
                  </p>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4">我们怎么解决（说人话版）：</h4>
                  <p className="text-white/80 mb-4">AI 不再只是发广告了。<br/>它会像正常人一样，每天跟客户聊：</p>
                  <ul className="space-y-3 text-white/80">
                    <li>• 自动聊行业相关话题</li>
                    <li>• 分享有价值、有用的内容</li>
                    <li>• 像真人一样自然互动</li>
                    <li>• 不卖货、不推销、不硬来</li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-green-500/30">
                    <p className="text-lg font-semibold text-white mb-2">📌 结果：</p>
                    <ul className="space-y-2 text-white/80">
                      <li>• 客户慢慢就熟了</li>
                      <li>• 信任感自然建立起来</li>
                      <li>• 最后客户主动问价格、问合作</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-6">🤝</div>
                    <p className="text-2xl font-bold text-white mb-4">建立信任流程</p>
                    <div className="text-left text-white/70 space-y-3">
                      <p>1. 初次接触 - 自然对话</p>
                      <p>2. 价值分享 - 建立认知</p>
                      <p>3. 持续互动 - 培养信任</p>
                      <p>4. 客户主动 - 询问合作</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-[#EF3BFB]/10 border-2 border-[#EF3BFB] rounded-xl p-6 text-center">
                  <p className="text-2xl font-bold text-white">一句话总结（重点）：</p>
                  <p className="text-xl text-[#EF3BFB] font-bold mt-3">成交不是"卖"出来的 —— 是"信任"出来的。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="mb-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-3xl p-12 border border-purple-500/20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                解决方案 2：不靠感觉了。AI 直接告诉你谁值得你花时间
              </h3>
              <p className="text-xl text-[#EF3BFB] font-semibold">针对痛点 2：不知道谁重要</p>
            </div>

            <div className="grid grid-cols-2 gap-12 items-start">
              <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-6">🏷️</div>
                    <p className="text-2xl font-bold text-white mb-4">AI 智能标签系统</p>
                    <div className="text-left text-white/70 space-y-3">
                      <p className="flex items-center gap-2"><span className="text-green-400">●</span> 潜在客户</p>
                      <p className="flex items-center gap-2"><span className="text-yellow-400">●</span> 高价值客户</p>
                      <p className="flex items-center gap-2"><span className="text-red-400">●</span> 准备付费客户</p>
                      <p className="flex items-center gap-2"><span className="text-gray-400">●</span> 无效询价</p>
                      <p className="flex items-center gap-2"><span className="text-blue-400">●</span> 忠实复购客户</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-[#EF3BFB]/10 border-2 border-[#EF3BFB] rounded-xl p-6 text-center">
                  <p className="text-2xl font-bold text-white">一句话总结：</p>
                  <p className="text-xl text-[#EF3BFB] font-bold mt-3">不是你缺客户 —— 是你在错的人身上花太多时间。</p>
                </div>
              </div>

              <div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">客户的真实困境：</h4>
                  <ul className="space-y-3 text-white/80">
                    <li>✗ 每个客户都在问问题</li>
                    <li>✗ 大家看起来都一样</li>
                    <li>✗ 在不买的人身上浪费大量时间</li>
                    <li>✗ 真正会付费的人反而没好好跟</li>
                  </ul>
                  <p className="text-xl font-bold text-[#EF3BFB] mt-6">
                    👉 不是输在能力上 —— 是输在精力分配上。
                  </p>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4">我们怎么解决（人话版）：</h4>
                  <p className="text-white/80 mb-4">AI 自动给客户打标签，比如：</p>
                  <ul className="space-y-3 text-white/80">
                    <li>• 潜在客户</li>
                    <li>• 高价值客户</li>
                    <li>• 准备付费客户</li>
                    <li>• 无效询价</li>
                    <li>• 忠实复购客户</li>
                  </ul>
                  <p className="mt-4 text-white/80">这些标签不是手动打的。<br/>AI 根据对话内容和行为自动判断。</p>
                  <div className="mt-6 pt-6 border-t border-green-500/30">
                    <p className="text-lg font-semibold text-white mb-2">📌 结果：</p>
                    <ul className="space-y-2 text-white/80">
                      <li>• 谁优先跟</li>
                      <li>• 谁慢慢养</li>
                      <li>• 谁不用再花时间</li>
                      <li>• 你一眼就知道</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution 3 */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-3xl p-12 border border-green-500/20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                解决方案 3：跟进不再靠记忆。成交不再因为"忙"就耽误
              </h3>
              <p className="text-xl text-[#EF3BFB] font-semibold">针对痛点 3：跟进断裂、忘记任务</p>
            </div>

            <div className="grid grid-cols-2 gap-12 items-start">
              <div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">客户的真实困境：</h4>
                  <ul className="space-y-3 text-white/80">
                    <li>✗ 今天太忙，忘了回</li>
                    <li>✗ 明天想起来 —— 客户已经凉了</li>
                    <li>✗ 说好之后跟，结果彻底忘了</li>
                    <li>✗ 同时管 10 个客户就已经乱了</li>
                  </ul>
                  <p className="text-xl font-bold text-[#EF3BFB] mt-6">
                    👉 大部分单不是被拒绝的 —— 是被"忘了"。
                  </p>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4">我们怎么解决（超简单版）：</h4>
                  <p className="text-white/80 mb-4">AI 替你做三件事：</p>
                  <ul className="space-y-3 text-white/80">
                    <li>1️⃣ 根据客户标签，自动安排优先跟进顺序</li>
                    <li>2️⃣ 自动生成任务和提醒时间表</li>
                    <li>3️⃣ 一次设置，AI 可以同时跟进 30 个客户</li>
                  </ul>
                  <p className="mt-6 text-white/80">你不再需要想：</p>
                  <ul className="space-y-2 text-white/80 ml-4">
                    <li>• 今天该联系谁？</li>
                    <li>• 该说什么？</li>
                    <li>• 什么时候跟进？</li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-green-500/30">
                    <p className="text-lg font-semibold text-white mb-2">📌 结果：</p>
                    <ul className="space-y-2 text-white/80">
                      <li>• 每个客户都被照顾到</li>
                      <li>• 跟进永不断链</li>
                      <li>• 成交自然发生</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-6">⚡</div>
                    <p className="text-2xl font-bold text-white mb-4">自动跟进系统</p>
                    <div className="text-left text-white/70 space-y-3">
                      <p>✓ 智能排序 - 谁最重要先跟谁</p>
                      <p>✓ 自动提醒 - 不会漏掉任何人</p>
                      <p>✓ 批量管理 - 同时跟进30+客户</p>
                      <p>✓ 数据记录 - 所有对话可追溯</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-[#EF3BFB]/10 border-2 border-[#EF3BFB] rounded-xl p-6 text-center">
                  <p className="text-2xl font-bold text-white">一句话总结：</p>
                  <p className="text-xl text-[#EF3BFB] font-bold mt-3">你负责做决策。AI 负责记住一切。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-20 bg-gradient-to-b from-[#080613] to-[#1a0f2e]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">平台接入</h2>

          <div className="bg-gradient-to-br from-amber-50/5 to-orange-50/5 rounded-3xl p-12 border border-white/5">
            <div className="grid grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📦</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">一个平台</h3>
                <h4 className="text-xl text-white/80 mb-6">接入所有大语言模型并进行后训练</h4>
                <p className="text-white/70 leading-relaxed">
                  从业务出发，自由切换大模型和专属模型，为持续应用场景适配性优化模型，满足业务需求。
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
                  <img src="https://ext.same-assets.com/130432291/3270263737.png" alt="OpenAI" className="h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-500 shadow-lg shadow-blue-500/20">
                  <img src="https://ext.same-assets.com/130432291/309636884.png" alt="Gemini" className="h-14 object-contain" />
                </div>
                <div className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
                  <img src="https://ext.same-assets.com/130432291/1978560513.png" alt="DeepSeek" className="h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases - Customer Logos */}
      <section className="py-20 bg-[#080613]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-8">行业应用案例</h2>
          <p className="text-center text-white/60 mb-16">以下为部分客户，排名不分前后</p>

          {/* Education */}
          <div className="mb-8 grid grid-cols-12 gap-4">
            <div className="col-span-2 bg-blue-600 rounded-2xl flex items-center justify-center p-6">
              <h3 className="text-white text-2xl font-bold text-center">在线教育</h3>
            </div>
            <div className="col-span-10 bg-white/95 rounded-2xl p-6 grid grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div key={i} className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200">
                  <div className="w-20 h-8 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Consumer Brands */}
          <div className="mb-8 grid grid-cols-12 gap-4">
            <div className="col-span-2 bg-purple-600 rounded-2xl flex items-center justify-center p-6">
              <h3 className="text-white text-2xl font-bold text-center">消费品牌</h3>
            </div>
            <div className="col-span-10 bg-white/95 rounded-2xl p-6 grid grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div key={i} className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200">
                  <div className="w-20 h-8 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Government & Finance */}
          <div className="mb-8 grid grid-cols-12 gap-4">
            <div className="col-span-2 bg-red-500 rounded-2xl flex items-center justify-center p-6">
              <h3 className="text-white text-2xl font-bold text-center">政务金融</h3>
            </div>
            <div className="col-span-10 bg-white/95 rounded-2xl p-6 grid grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div key={i} className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200">
                  <div className="w-20 h-8 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Internet */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2 bg-blue-500 rounded-2xl flex items-center justify-center p-6">
              <h3 className="text-white text-2xl font-bold text-center">泛互联网</h3>
            </div>
            <div className="col-span-10 bg-white/95 rounded-2xl p-6 grid grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200">
                  <div className="w-20 h-8 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-[#1a0f2e] to-[#080613]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">信息安全保障</h2>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-12 border border-white/10">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-blue-400 text-xl font-bold mb-6 border-l-4 border-blue-400 pl-4">
                  荣获多项资质认证
                </h3>
                <ul className="space-y-3 text-white/70 text-sm leading-relaxed">
                  <li>提供多项安全技术防护</li>
                  <li>荣获国内权威机构认可</li>
                  <li>灵活部署方案保障企业级安全</li>
                </ul>
              </div>

              <div className="bg-white/90 rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 border-4 border-blue-200">
                  <span className="text-4xl font-bold text-blue-600">ISO</span>
                </div>
                <p className="text-center text-gray-700 font-medium">ISO 9001 信息安全认证</p>
              </div>

              <div className="bg-white/90 rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4 border-4 border-gray-200">
                  <span className="text-3xl font-bold text-gray-700">DJCP</span>
                </div>
                <p className="text-center text-gray-700 font-medium">信息安全等级保护三级认证</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #6721FF 0%, #1a0f2e 50%, #EF3BFB 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8">
            企业级 <span className="text-[#EF3BFB]">Agentic AI 员工平台</span>，打造 AI 员工矩阵，交付专家级业务表现
          </h2>
          <button
            className="px-12 py-4 rounded-full text-white text-lg font-medium hover:scale-105 transition-transform shadow-2xl"
            style={{
              background: 'linear-gradient(96deg, #EF3BFB 0.67%, #6721FF 98.48%)',
            }}
          >
            立即体验
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080613] border-t border-white/10 py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">句</span>
                </div>
                <div className="text-white text-xs leading-tight">
                  <div className="font-medium">句子互动</div>
                  <div className="text-[10px] tracking-wider">JUZI.BOT</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">产品服务</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">句子秒懂 - 企业级Agentic AI员工平台</a></li>
                <li><a href="#" className="hover:text-white transition-colors">句子秒回 - AI人机协作运营一体化工作台</a></li>
              </ul>
              <h4 className="text-white font-semibold mb-4 mt-6">客户故事</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">客户案例</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">帮助支持</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">开源项目</a></li>
                <li><a href="#" className="hover:text-white transition-colors">增长情报局</a></li>
                <li><a href="#" className="hover:text-white transition-colors">培训 & 公开课</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">公司</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">加入我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">用户协议</a></li>
                <li><a href="#" className="hover:text-white transition-colors">公司地址</a></li>
                <li><a href="mailto:sales@juzi.bot" className="hover:text-white transition-colors">sales@juzi.bot</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex justify-between items-center text-white/50 text-sm">
            <div className="flex gap-4">
              <span>友情链接：</span>
              <a href="#" className="hover:text-white transition-colors">36kr</a>
              <a href="#" className="hover:text-white transition-colors">云蝠智能</a>
              <a href="#" className="hover:text-white transition-colors">Authing</a>
              <a href="#" className="hover:text-white transition-colors">硬核桃社区</a>
            </div>
            <div className="flex gap-4">
              <span>Copyright © 2019 北京句子互动科技有限公司</span>
              <a href="#" className="hover:text-white transition-colors">京ICP备19049435号-1</a>
              <a href="#" className="hover:text-white transition-colors">京公网安备 11010802033527号</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
