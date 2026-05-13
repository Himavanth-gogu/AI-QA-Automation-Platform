import { useEffect, useState } from "react";

import API from "../services/api";

import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

import AnalyticsCards from "../components/AnalyticsCards";
import AutomationPanel from "../components/AutomationPanel";
import ScreenshotPanel from "../components/ScreenshotPanel";
import TestCasesPanel from "../components/TestCasesPanel";
import ExecutionTable from "../components/ExecutionTable";
import ChartsPanel from "../components/ChartsPanel";
import BrowserMatrix from "../components/BrowserMatrix";
import ModeSwitcher from "../components/ModeSwitcher";
import LiveExecutionLogs from "../components/LiveExecutionLogs";
import TestTemplates from "../components/TestTemplates";

import SystemHealthPanel from "../components/SystemHealthPanel";
import RealtimeStatusBar from "../components/RealtimeStatusBar";

import PDFExportPanel from "../components/PDFExportPanel";

import LoadingOverlay from "../components/LoadingOverlay";
import NotificationPanel from "../components/NotificationPanel";
import ProgressPanel from "../components/ProgressPanel";
import AIAssistantPanel from "../components/AIAssistantPanel";
import FooterPanel from "../components/FooterPanel";

function Dashboard() {

  const [prompt, setPrompt] = useState("");

  const [loading, setLoading] = useState(false);

  const [mode, setMode] = useState("Demo");

  const [logs, setLogs] = useState<string[]>([]);

  const [testcases, setTestcases] = useState<string[]>([]);

  const [executions, setExecutions] = useState<any[]>([]);

  const [screenshot, setScreenshot] = useState("");

  const [executionTime, setExecutionTime] = useState("");

  const [aiScore, setAiScore] = useState("");

  const [analytics, setAnalytics] = useState({
    total_tests: 0,
    success_rate: "98%",
  });

  // Load Initial Data
  useEffect(() => {

    loadExecutions();

    loadAnalytics();

  }, []);

  // Load Execution History
  const loadExecutions = async () => {

    try {

      const res = await API.get(
        "/executions"
      );

      setExecutions(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  // Load Analytics
  const loadAnalytics = async () => {

    try {

      const res = await API.get(
        "/analytics"
      );

      setAnalytics(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  // Run Automation
  const runAutomation = async () => {

    if (!prompt) return;

    setLoading(true);

    setLogs([]);

    try {

      const res = await API.post(
        "/generate-test",
        null,
        {
          params: {
            prompt,
            mode,
          },
        }
      );

      setExecutionTime(
        String(res.data.execution_time) + " sec"
      );

      setAiScore(
        String(res.data.ai_score || 98) + "%"
      );

      setLogs(
        res.data.logs || []
      );

      if (mode === "Real") {

        setScreenshot(
          "http://127.0.0.1:8000/screenshots/real_result.png"
        );

      } else {

        setScreenshot(
          "http://127.0.0.1:8000/screenshots/result.png"
        );

      }

      await loadExecutions();

      await loadAnalytics();

    } catch (error) {

      console.log(error);

    }

    setLoading(false);

  };

  // Generate Test Cases
  const generateTestCases = async () => {

    if (!prompt) return;

    try {

      const res = await API.post(
        "/generate-testcases",
        null,
        {
          params: {
            prompt,
          },
        }
      );

      setTestcases(
        res.data.testcases || []
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div
      style={{
        display: "flex",
        background: "#020617",
        color: "white",
        minHeight: "100vh",
      }}
    >

      {/* Sidebar */}

      <Sidebar />

      {/* Main Dashboard */}

      <div
        style={{
          flex: 1,
          padding: "40px",
          overflowY: "auto",
        }}
      >

        {/* Loading Overlay */}

        <LoadingOverlay
          loading={loading}
        />

        {/* Navbar */}

        <TopNavbar />

        {/* Status Bar */}

        <RealtimeStatusBar />

        {/* System Health */}

        <SystemHealthPanel />

        {/* Progress */}

        <ProgressPanel />

        {/* Analytics */}

        <AnalyticsCards
          analytics={analytics}
          executionTime={executionTime}
          aiScore={aiScore}
        />

        {/* Mode Switch */}

        <ModeSwitcher
          mode={mode}
          setMode={setMode}
        />

        {/* Browser Matrix */}

        <BrowserMatrix />

        {/* Charts */}

        <ChartsPanel />

        {/* Quick Templates */}

        <TestTemplates
          setPrompt={setPrompt}
        />

        {/* Automation */}

        <AutomationPanel
          prompt={prompt}
          setPrompt={setPrompt}
          runAutomation={runAutomation}
          generateTestCases={generateTestCases}
          loading={loading}
        />

        {/* Live Logs */}

        <LiveExecutionLogs
          logs={logs}
        />

        {/* Notifications */}

        <NotificationPanel />

        {/* AI Assistant */}

        <AIAssistantPanel />

        {/* Screenshot */}

        <ScreenshotPanel
          screenshot={screenshot}
        />

        {/* Test Cases */}

        <TestCasesPanel
          testcases={testcases}
        />

        {/* Execution History */}

        <ExecutionTable
          executions={executions}
        />

        {/* PDF Export */}

        <PDFExportPanel />

        {/* Footer */}

        <FooterPanel />

      </div>

    </div>

  );

}

export default Dashboard;