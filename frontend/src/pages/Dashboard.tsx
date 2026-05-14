import {
  Activity,
  Bot,
  Shield,
  BarChart3,
  FileText,
  Rocket,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Sparkles,
} from "lucide-react";

import AutomationPanel from "../components/AutomationPanel";

function Dashboard() {

  const stats = [
    {
      title: "Total Executions",
      value: "24,892",
      icon: <Rocket size={30} />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "AI Accuracy",
      value: "98.7%",
      icon: <BrainCircuit size={30} />,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Security Score",
      value: "A+",
      icon: <Shield size={30} />,
      color: "from-emerald-500 to-green-600",
    },
    {
      title: "System Health",
      value: "Online",
      icon: <Activity size={30} />,
      color: "from-cyan-500 to-sky-600",
    },
  ];

  const features = [
    {
      icon: <Bot size={26} />,
      title: "AI Test Generation",
      desc: "Generate intelligent automation scenarios instantly using AI prompts.",
    },
    {
      icon: <BarChart3 size={26} />,
      title: "Analytics Dashboard",
      desc: "Monitor executions, failures, and AI performance in real time.",
    },
    {
      icon: <Shield size={26} />,
      title: "Security Validation",
      desc: "Run automated validation against critical workflows securely.",
    },
    {
      icon: <FileText size={26} />,
      title: "Smart Reports",
      desc: "Export professional QA reports and execution summaries instantly.",
    },
  ];

  const activity = [
    "AI generated 12 test scenarios",
    "Regression suite completed successfully",
    "Security validation passed",
    "Chrome automation executed",
    "Execution logs exported",
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* HERO */}

      <div className="relative px-10 pt-10 pb-16 border-b border-slate-800">

        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          <div>

            <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 px-4 py-2 rounded-full text-sm text-indigo-300 mb-5">
              <Sparkles size={16} />
              Enterprise AI QA Platform
            </div>

            <h1 className="text-6xl font-black leading-tight max-w-4xl">
              Autonomous AI
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {" "}Testing Platform
              </span>
            </h1>

            <p className="text-slate-400 text-lg mt-6 max-w-2xl leading-8">
              Intelligent automation platform for generating, executing,
              analyzing, and scaling enterprise-grade QA workflows with AI.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/20">
                Launch Automation
              </button>

              <button className="px-7 py-4 rounded-2xl border border-slate-700 bg-slate-900/60 font-semibold hover:bg-slate-800 transition-all duration-300">
                View Analytics
              </button>

            </div>

          </div>

          {/* STATUS CARD */}

          <div className="w-full lg:w-[420px] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl">

            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-2xl font-bold">AI Core Status</h2>
                <p className="text-slate-400 mt-1">
                  Live infrastructure monitoring
                </p>
              </div>

              <div className="h-4 w-4 rounded-full bg-green-400 animate-pulse"></div>

            </div>

            <div className="space-y-5">

              <div className="flex items-center justify-between bg-slate-800/60 rounded-2xl px-5 py-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400" />
                  <span>Automation Engine</span>
                </div>

                <span className="text-green-400 font-semibold">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between bg-slate-800/60 rounded-2xl px-5 py-4">
                <div className="flex items-center gap-3">
                  <Bot className="text-cyan-400" />
                  <span>AI Model</span>
                </div>

                <span className="text-cyan-400 font-semibold">
                  GPT Online
                </span>
              </div>

              <div className="flex items-center justify-between bg-slate-800/60 rounded-2xl px-5 py-4">
                <div className="flex items-center gap-3">
                  <Clock3 className="text-yellow-400" />
                  <span>Execution Time</span>
                </div>

                <span className="text-yellow-400 font-semibold">
                  1.2s Avg
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div className="px-10 mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">

        {stats.map((item, index) => (

          <div
            key={index}
            className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-7 hover:scale-[1.02] transition-all duration-300 shadow-2xl"
          >

            <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${item.color}`}></div>

            <div className="relative z-10 flex items-center justify-between">

              <div>
                <p className="text-slate-400 text-sm mb-3">
                  {item.title}
                </p>

                <h2 className="text-4xl font-black">
                  {item.value}
                </h2>
              </div>

              <div className={`bg-gradient-to-br ${item.color} p-4 rounded-2xl`}>
                {item.icon}
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* AUTOMATION PANEL */}

      <div className="px-10 mt-12">
        <AutomationPanel />
      </div>

      {/* FEATURES */}

      <div className="px-10 mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">

        {features.map((feature, index) => (

          <div
            key={index}
            className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
          >

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
              {feature.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {feature.title}
            </h3>

            <p className="text-slate-400 leading-7">
              {feature.desc}
            </p>

          </div>

        ))}

      </div>

      {/* ACTIVITY */}

      <div className="px-10 mt-16 pb-20">

        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8">

          <div className="flex items-center justify-between mb-8">

            <div>
              <h2 className="text-3xl font-bold">
                Recent AI Activity
              </h2>

              <p className="text-slate-400 mt-2">
                Real-time autonomous execution updates
              </p>
            </div>

            <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold border border-green-500/30">
              LIVE
            </div>

          </div>

          <div className="space-y-5">

            {activity.map((item, index) => (

              <div
                key={index}
                className="flex items-center justify-between bg-slate-800/60 rounded-2xl px-6 py-5"
              >

                <div className="flex items-center gap-4">

                  <div className="h-3 w-3 rounded-full bg-cyan-400"></div>

                  <span className="text-lg">
                    {item}
                  </span>

                </div>

                <span className="text-slate-500 text-sm">
                  just now
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;