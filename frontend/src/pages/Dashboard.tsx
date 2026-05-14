import {
  Search,
  Bell,
  Moon,
  Rocket,
  Brain,
  Shield,
  Activity,
  Bot,
  FileText,
  BarChart3,
  Settings,
  CheckCircle2,
} from "lucide-react";

import AutomationPanel from "../components/AutomationPanel";

function Dashboard() {

  const stats = [
    {
      title: "Total Executions",
      value: "24,892",
      growth: "+15.3%",
      icon: <Rocket size={34} />,
      color: "#3B82F6",
    },
    {
      title: "AI Accuracy",
      value: "98.7%",
      growth: "+1.8%",
      icon: <Brain size={34} />,
      color: "#A855F7",
    },
    {
      title: "Security Score",
      value: "A+",
      growth: "+5.2%",
      icon: <Shield size={34} />,
      color: "#22C55E",
    },
    {
      title: "System Health",
      value: "Online",
      growth: "Stable",
      icon: <Activity size={34} />,
      color: "#06B6D4",
    },
  ];

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        display: "flex",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >

      {/* SIDEBAR */}

      <div
        style={{
          width: "280px",
          background:
            "linear-gradient(to bottom,#050816,#081028)",
          borderRight: "1px solid #172033",
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >

        <div>

          {/* LOGO */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "50px",
            }}
          >

            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "18px",
                background:
                  "linear-gradient(135deg,#3B82F6,#8B5CF6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
              }}
            >
              🤖
            </div>

            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "30px",
                  fontWeight: "900",
                }}
              >
                TestPilot AI
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#94A3B8",
                }}
              >
                Enterprise QA Platform
              </p>
            </div>

          </div>

          {/* MENU */}

          {[
            "Dashboard",
            "Test Automation",
            "Test Cases",
            "Executions",
            "Reports",
            "Analytics",
            "AI Assistant",
            "Settings",
          ].map((item, index) => (

            <div
              key={index}
              style={{
                padding: "18px 20px",
                marginBottom: "14px",
                borderRadius: "18px",
                background:
                  index === 0
                    ? "linear-gradient(to right,#4F46E5,#7C3AED)"
                    : "transparent",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "600",
                transition: "0.3s",
              }}
            >
              {item}
            </div>

          ))}

        </div>

        {/* AI CARD */}

        <div
          style={{
            background:
              "linear-gradient(145deg,#0F172A,#111827)",
            borderRadius: "28px",
            padding: "25px",
            border: "1px solid #1E293B",
          }}
        >

          <h3
            style={{
              marginBottom: "18px",
              fontSize: "24px",
            }}
          >
            AI Engine
          </h3>

          <div
            style={{
              color: "#22C55E",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            ● Online
          </div>

          <div
            style={{
              height: "140px",
              borderRadius: "20px",
              background:
                "linear-gradient(to bottom right,#3B82F6,#8B5CF6)",
              marginBottom: "20px",
            }}
          ></div>

          <p style={{ color: "#94A3B8" }}>
            Model: GPT-4o
          </p>

          <p style={{ color: "#94A3B8" }}>
            Accuracy: 98.7%
          </p>

        </div>

      </div>

      {/* MAIN */}

      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >

        {/* TOPBAR */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >

          {/* SEARCH */}

          <div
            style={{
              width: "420px",
              background: "#0F172A",
              border: "1px solid #1E293B",
              borderRadius: "18px",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >

            <Search color="#94A3B8" />

            <input
              placeholder="Search anything..."
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "white",
                width: "100%",
                fontSize: "16px",
              }}
            />

          </div>

          {/* RIGHT */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >

            <Bell />

            <Moon />

            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background:
                  "linear-gradient(to right,#3B82F6,#8B5CF6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "20px",
              }}
            >
              A
            </div>

          </div>

        </div>

        {/* HERO */}

        <div
          style={{
            display: "flex",
            gap: "30px",
            marginBottom: "40px",
          }}
        >

          {/* LEFT */}

          <div style={{ flex: 1 }}>

            <div
              style={{
                display: "inline-block",
                padding: "10px 18px",
                borderRadius: "999px",
                background: "rgba(139,92,246,0.15)",
                color: "#C4B5FD",
                marginBottom: "25px",
                border: "1px solid rgba(139,92,246,0.3)",
              }}
            >
              ✨ Enterprise AI QA Platform
            </div>

            <h1
              style={{
                fontSize: "76px",
                lineHeight: "1.1",
                marginBottom: "24px",
                fontWeight: "900",
              }}
            >
              Autonomous AI
              <br />

              <span
                style={{
                  background:
                    "linear-gradient(to right,#3B82F6,#8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Testing Platform
              </span>

            </h1>

            <p
              style={{
                color: "#94A3B8",
                fontSize: "22px",
                maxWidth: "850px",
                lineHeight: "1.8",
              }}
            >
              Intelligent automation platform for generating,
              executing, analyzing, and scaling enterprise-grade
              QA workflows using AI.
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "35px",
              }}
            >

              <button
                style={{
                  padding: "18px 34px",
                  borderRadius: "18px",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "700",
                  background:
                    "linear-gradient(to right,#4F46E5,#7C3AED)",
                  cursor: "pointer",
                }}
              >
                Launch Automation
              </button>

              <button
                style={{
                  padding: "18px 34px",
                  borderRadius: "18px",
                  background: "#111827",
                  border: "1px solid #1E293B",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                View Analytics
              </button>

            </div>

          </div>

          {/* STATUS CARD */}

          <div
            style={{
              width: "450px",
              background:
                "linear-gradient(145deg,#0F172A,#111827)",
              borderRadius: "30px",
              padding: "35px",
              border: "1px solid #1E293B",
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "35px",
              }}
            >

              <h2 style={{ fontSize: "34px" }}>
                AI Core Status
              </h2>

              <div
                style={{
                  background: "rgba(34,197,94,0.2)",
                  color: "#22C55E",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  fontWeight: "700",
                }}
              >
                ● LIVE
              </div>

            </div>

            {[
              ["Automation Engine", "Active"],
              ["AI Model", "GPT-4o Online"],
              ["Execution Time", "1.2s Avg"],
            ].map((item, index) => (

              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#111827",
                  borderRadius: "20px",
                  padding: "24px",
                  marginBottom: "18px",
                }}
              >

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                  }}
                >

                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "18px",
                      background:
                        "linear-gradient(to right,#3B82F6,#8B5CF6)",
                    }}
                  ></div>

                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {item[0]}
                  </div>

                </div>

                <div
                  style={{
                    color: "#22D3EE",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  {item[1]}
                </div>

              </div>

            ))}

          </div>

        </div>

        {/* STATS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px",
            marginBottom: "40px",
          }}
        >

          {stats.map((card, index) => (

            <div
              key={index}
              style={{
                background:
                  "linear-gradient(145deg,#0F172A,#111827)",
                borderRadius: "28px",
                padding: "30px",
                border: "1px solid #1E293B",
              }}
            >

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >

                <div>

                  <p
                    style={{
                      color: "#94A3B8",
                      marginBottom: "15px",
                    }}
                  >
                    {card.title}
                  </p>

                  <h2
                    style={{
                      fontSize: "52px",
                      fontWeight: "900",
                    }}
                  >
                    {card.value}
                  </h2>

                </div>

                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "20px",
                    background: card.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.icon}
                </div>

              </div>

              <div
                style={{
                  color: "#22C55E",
                  fontWeight: "700",
                }}
              >
                ↑ {card.growth} from yesterday
              </div>

            </div>

          ))}

        </div>

        {/* AUTOMATION */}

        <AutomationPanel />

      </div>

    </div>
  );
}

export default Dashboard;