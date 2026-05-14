import {
  LayoutDashboard,
  Rocket,
  Shield,
  Brain,
  Activity,
  Bell,
  Search,
  FileText,
  BarChart3,
  Bot,
  Settings,
  PlayCircle,
} from "lucide-react";

import "./Dashboard.css";

function Dashboard() {

  const stats = [
    {
      title: "Total Executions",
      value: "24,892",
      icon: <Rocket size={30} />,
    },
    {
      title: "AI Accuracy",
      value: "98.7%",
      icon: <Brain size={30} />,
    },
    {
      title: "Security Score",
      value: "A+",
      icon: <Shield size={30} />,
    },
    {
      title: "System Health",
      value: "ONLINE",
      icon: <Activity size={30} />,
    },
  ];

  return (

    <div className="dashboard-container">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div>

          <div className="logo-box">

            <div className="logo-icon">
              🤖
            </div>

            <div>
              <h2>TestPilot AI</h2>
              <p>Enterprise QA Platform</p>
            </div>

          </div>

          <div className="menu active">
            <LayoutDashboard size={20} />
            Dashboard
          </div>

          <div className="menu">
            <PlayCircle size={20} />
            Automations
          </div>

          <div className="menu">
            <BarChart3 size={20} />
            Analytics
          </div>

          <div className="menu">
            <FileText size={20} />
            Reports
          </div>

          <div className="menu">
            <Bot size={20} />
            AI Assistant
          </div>

          <div className="menu">
            <Settings size={20} />
            Settings
          </div>

        </div>

        {/* AI CARD */}

        <div className="ai-card">

          <h3>AI Engine</h3>

          <p className="online">
            ● Online
          </p>

          <div className="ai-visual"></div>

          <p>Model: GPT-4o</p>

          <p>Accuracy: 98.7%</p>

        </div>

      </aside>

      {/* MAIN CONTENT */}

      <main className="main-content">

        {/* TOPBAR */}

        <div className="topbar">

          <div className="search-box">

            <Search size={18} />

            <input
              placeholder="Search anything..."
            />

          </div>

          <div className="top-icons">

            <Bell />

            <div className="profile">
              A
            </div>

          </div>

        </div>

        {/* HERO */}

        <div className="hero-section">

          <div>

            <span className="badge">
              ✨ Enterprise AI QA Platform
            </span>

            <h1>
              Autonomous AI
              <br />

              <span>
                Testing Platform
              </span>

            </h1>

            <p>
              Intelligent automation platform for generating,
              executing, analyzing, and scaling enterprise-grade
              QA workflows using AI.
            </p>

            <div className="hero-buttons">

              <button className="primary-btn">
                Launch Automation
              </button>

              <button className="secondary-btn">
                View Analytics
              </button>

            </div>

          </div>

          {/* STATUS */}

          <div className="status-card">

            <div className="status-header">

              <h2>AI Core Status</h2>

              <span>LIVE</span>

            </div>

            <div className="status-item">

              <div>Automation Engine</div>

              <strong>Active</strong>

            </div>

            <div className="status-item">

              <div>AI Model</div>

              <strong>GPT-4o</strong>

            </div>

            <div className="status-item">

              <div>Execution Time</div>

              <strong>1.2s Avg</strong>

            </div>

          </div>

        </div>

        {/* STATS */}

        <div className="stats-grid">

          {stats.map((card, index) => (

            <div className="stat-card" key={index}>

              <div className="stat-top">

                <div>

                  <p>{card.title}</p>

                  <h2>{card.value}</h2>

                </div>

                <div className="stat-icon">

                  {card.icon}

                </div>

              </div>

              <span className="growth">
                ↑ Real-time AI analytics
              </span>

            </div>

          ))}

        </div>

        {/* AUTOMATION */}

        <div className="automation-panel">

          <h2>
            🚀 AI Automation Runner
          </h2>

          <input
            placeholder="Enter automation prompt..."
            className="automation-input"
          />

          <div className="hero-buttons">

            <button className="primary-btn">
              Run Automation
            </button>

            <button className="green-btn">
              Generate Test Cases
            </button>

          </div>

          <div className="logs-box">

            <p>✓ AI generated login test scenarios</p>

            <p>✓ Chrome automation executed</p>

            <p>✓ Security validation passed</p>

            <p>✓ PDF report exported</p>

          </div>

        </div>

      </main>

    </div>

  );

}

export default Dashboard;