import {
  useEffect,
  useState,
} from "react";

import {
  Rocket,
  Brain,
  Shield,
  Activity,
  Bell,
  Search,
  FileText,
  BarChart3,
  Bot,
  Settings,
  PlayCircle,
  Globe,
  Moon,
} from "lucide-react";

import "./Dashboard.css";

import {
  runAutomation,
  getHistory,
  generateTestCases,
} from "../services/api";

import {
  Link,
} from "react-router-dom";

function Dashboard() {

  const [website, setWebsite] =
    useState("");

  const [result, setResult] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  const [history, setHistory] =
    useState<any[]>([]);

  const [testCases, setTestCases] =
    useState<any[]>([]);

  const currentTime =
    new Date().toLocaleTimeString();

  useEffect(() => {

    loadHistory();

  }, []);

  const loadHistory =
    async () => {

      try {

        const data =
          await getHistory();

        setHistory(data);

      } catch (error) {

        console.log(error);

      }

    };

  // RUN AUTOMATION

  const runTest =
    async () => {

      if (!website) {

        alert(
          "Enter Website URL"
        );

        return;
      }

      try {

        setLoading(true);

        const data =
          await runAutomation(
            website
          );

        setResult(data);

        setLoading(false);

        loadHistory();

      } catch (error) {

        console.log(error);

        setLoading(false);

      }

    };

  // GENERATE AI TEST CASES

  const generateCases =
    async () => {

      if (!website) {

        alert(
          "Enter Website URL"
        );

        return;
      }

      try {

        const data =
          await generateTestCases(
            website
          );

        setTestCases(
          data.testcases
        );

      } catch (error) {

        console.log(error);

      }

    };

  // REAL METRICS

  const totalExecutions =
    history.length;

  const latestAccuracy =
    history.length > 0
      ? history[
          history.length - 1
        ].ai_accuracy
      : 0;

  const latestSecurity =
    history.length > 0
      ? history[
          history.length - 1
        ].security_score
      : "N/A";

  const systemHealth =
    history.length > 0
      ? "ONLINE"
      : "IDLE";

  return (

    <div className="dashboard">

      {/* SIDEBAR */}

      <div className="sidebar">

        <div className="logo">

          <div className="logo-icon">
            🤖
          </div>

          <div>

            <h2>
              TestPilot AI
            </h2>

            <p>
              Enterprise QA Platform
            </p>

          </div>

        </div>

        <div className="menu">

          <Link
            to="/"
            className="menu-item active"
          >

            <BarChart3 size={20} />

            Dashboard

          </Link>

          <Link
            to="/reports"
            className="menu-item"
          >

            <FileText size={20} />

            Reports

          </Link>

          <Link
            to="/executions"
            className="menu-item"
          >

            <Activity size={20} />

            Executions

          </Link>

          <Link
            to="/analytics"
            className="menu-item"
          >

            <BarChart3 size={20} />

            Analytics

          </Link>

          <Link
            to="/assistant"
            className="menu-item"
          >

            <Bot size={20} />

            AI Assistant

          </Link>

          <Link
            to="/settings"
            className="menu-item"
          >

            <Settings size={20} />

            Settings

          </Link>

          <Link
            to="/integrations"
            className="menu-item"
          >

            <Globe size={20} />

            Integrations

          </Link>

        </div>

      </div>

      {/* MAIN */}

      <div className="main-content">

        {/* TOPBAR */}

        <div className="topbar">

          <div className="search-box">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search anything..."
            />

          </div>

          <div className="top-icons">

            {/* LOGOUT */}

            <button
              onClick={() => {

                localStorage.removeItem(
                  "isAuth"
                );

                window.location.href =
                  "/login";

              }}

              style={{

                background:"#ef4444",

                border:"none",

                color:"white",

                padding:"10px 14px",

                borderRadius:"12px",

                cursor:"pointer",

              }}
            >

              Logout

            </button>

            <Bell />

            <Moon />

            <div className="avatar">
              A
            </div>

          </div>

        </div>

        {/* HERO */}

        <div className="hero-section">

          <div>

            <div className="tag">

              ✨ Enterprise AI QA Platform

            </div>

            <h1>

              Autonomous AI
              <br />

              <span>

                Testing Platform

              </span>

            </h1>

            <p>

              Intelligent automation
              platform for generating,
              executing, analyzing,
              and scaling enterprise QA
              workflows using AI.

            </p>

            {/* LIVE TIME */}

            <p
              style={{

                color:"#22c55e",

                marginTop:"18px",

                fontWeight:"bold",

              }}
            >

              Live Time:
              {" "}
              {currentTime}

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

              <h2>

                AI Core Status

              </h2>

              <span>

                LIVE

              </span>

            </div>

            <div className="status-item">

              <p>

                Automation Engine

              </p>

              <strong>

                Active

              </strong>

            </div>

            <div className="status-item">

              <p>

                AI Model

              </p>

              <strong>

                GPT-4o

              </strong>

            </div>

            <div className="status-item">

              <p>

                Execution Time

              </p>

              <strong>

                1.2s Avg

              </strong>

            </div>

          </div>

        </div>

        {/* STATS */}

        <div className="stats-grid">

          <div className="stat-card">

            <div>

              <p>

                Total Executions

              </p>

              <h2>

                {totalExecutions}

              </h2>

            </div>

            <div className="icon-box purple">

              <Rocket />

            </div>

          </div>

          <div className="stat-card">

            <div>

              <p>

                AI Accuracy

              </p>

              <h2>

                {latestAccuracy}%

              </h2>

            </div>

            <div className="icon-box pink">

              <Brain />

            </div>

          </div>

          <div className="stat-card">

            <div>

              <p>

                Security Score

              </p>

              <h2>

                {latestSecurity}

              </h2>

            </div>

            <div className="icon-box green">

              <Shield />

            </div>

          </div>

          <div className="stat-card">

            <div>

              <p>

                System Health

              </p>

              <h2>

                {systemHealth}

              </h2>

            </div>

            <div className="icon-box blue">

              <Activity />

            </div>

          </div>

        </div>

        {/* AUTOMATION */}

        <div className="automation-box">

          <h2>

            🚀 AI Automation Runner

          </h2>

          <div className="automation-input">

            <input
              type="text"
              placeholder="https://example.com"
              value={website}
              onChange={(e) =>
                setWebsite(
                  e.target.value
                )
              }
            />

            <button
              onClick={runTest}
            >

              <PlayCircle size={20} />

            </button>

          </div>

          <div className="automation-buttons">

            <button
              className="run-btn"
              onClick={runTest}
            >

              Run Automation

            </button>

            <button
              className="generate-btn"
              onClick={generateCases}
            >

              Generate Test Cases

            </button>

          </div>

          {/* LOADING */}

          {loading && (

            <div className="results-box">

              <p>

                AI Engine Running...

              </p>

            </div>

          )}

          {/* RESULT */}

          {result && (

            <div className="results-box">

              <h3
                style={{
                  marginBottom:"20px",
                }}
              >

                Live AI Execution Results

              </h3>

              <div
                style={{

                  display:"grid",

                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(240px,1fr))",

                  gap:"20px",

                }}
              >

                <div
                  style={{

                    background:"#111827",

                    padding:"20px",

                    borderRadius:"18px",

                  }}
                >

                  <p>

                    Website

                  </p>

                  <h3>

                    {result.website}

                  </h3>

                </div>

                <div
                  style={{

                    background:"#111827",

                    padding:"20px",

                    borderRadius:"18px",

                  }}
                >

                  <p>

                    AI Accuracy

                  </p>

                  <h3>

                    {result.ai_accuracy}%

                  </h3>

                </div>

                <div
                  style={{

                    background:"#111827",

                    padding:"20px",

                    borderRadius:"18px",

                  }}
                >

                  <p>

                    Security Score

                  </p>

                  <h3>

                    {result.security_score}

                  </h3>

                </div>

                <div
                  style={{

                    background:"#111827",

                    padding:"20px",

                    borderRadius:"18px",

                  }}
                >

                  <p>

                    Execution Time

                  </p>

                  <h3>

                    {result.execution_time}s

                  </h3>

                </div>

              </div>

              {/* LIVE LOGS */}

              <div
                style={{

                  marginTop:"30px",

                  background:"#020617",

                  padding:"24px",

                  borderRadius:"20px",

                }}
              >

                <h3
                  style={{
                    marginBottom:"18px",
                  }}
                >

                  Live AI Activity

                </h3>

                <p>
                  ✓ Initializing AI engine...
                </p>

                <p>
                  ✓ Scanning website structure...
                </p>

                <p>
                  ✓ Detecting buttons and forms...
                </p>

                <p>
                  ✓ Running automation scenarios...
                </p>

                <p>
                  ✓ Capturing screenshots...
                </p>

                <p>
                  ✓ Generating analytics...
                </p>

                <p>
                  ✓ Exporting HTML report...
                </p>

              </div>

              {/* SCREENSHOT */}

              {result.screenshot && (

                <div
                  style={{
                    marginTop:"30px",
                  }}
                >

                  <h3
                    style={{
                      marginBottom:"18px",
                    }}
                  >

                    Captured Screenshot

                  </h3>

                  <img
                    src={result.screenshot}
                    alt="screenshot"
                    style={{

                      width:"100%",

                      borderRadius:"22px",

                    }}
                  />

                </div>

              )}

              {/* REPORT BUTTON */}

              {result.report && (

                <a
                  href={result.report}
                  target="_blank"
                  rel="noreferrer"
                  style={{

                    display:"inline-block",

                    marginTop:"28px",

                    background:
                      "linear-gradient(135deg,#4f46e5,#9333ea)",

                    padding:"16px 24px",

                    borderRadius:"16px",

                    color:"white",

                    textDecoration:"none",

                    fontWeight:"bold",

                  }}
                >

                  Open Full Report

                </a>

              )}

            </div>

          )}

          {/* AI TEST CASES */}

          {testCases.length > 0 && (

            <div className="results-box">

              <h2
                style={{
                  marginBottom:"24px",
                }}
              >

                AI Generated Test Cases

              </h2>

              {testCases.map(
                (test, index) => (

                  <div

                    key={index}

                    style={{

                      background:"#111827",

                      padding:"24px",

                      borderRadius:"20px",

                      marginBottom:"20px",

                    }}
                  >

                    <h3
                      style={{
                        marginBottom:"18px",
                      }}
                    >

                      {test.title}

                    </h3>

                    <ul
                      style={{
                        marginLeft:"20px",
                      }}
                    >

                      {test.steps.map(
                        (
                          step:any,
                          i:number
                        ) => (

                          <li
                            key={i}
                            style={{

                              marginBottom:"10px",

                              color:"#cbd5e1",

                            }}
                          >

                            {step}

                          </li>

                        )
                      )}

                    </ul>

                    <p
                      style={{

                        marginTop:"18px",

                        color:"#22c55e",

                      }}
                    >

                      Expected:
                      {" "}
                      {test.expected}

                    </p>

                  </div>

                )
              )}

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default Dashboard;