import { useState } from "react";
import API from "../services/api";

function AutomationPanel() {

  const [prompt, setPrompt] = useState("");

  const [loading, setLoading] = useState(false);

  const [logs, setLogs] = useState<string[]>([]);

  const [testcases, setTestcases] = useState<string[]>([]);

  // RUN AUTOMATION
  const runAutomation = async () => {

    if (!prompt.trim()) {
      alert("Please enter prompt");
      return;
    }

    setLoading(true);

    try {

      const response = await API.post(
        `/generate-test?prompt=${encodeURIComponent(prompt)}&mode=Demo`
      );

      setLogs(response.data.logs || []);

    } catch (error) {

      console.log(error);

      alert("Automation failed");

    }

    setLoading(false);

  };

  // GENERATE TEST CASES
  const generateTestCases = async () => {

    if (!prompt.trim()) {
      alert("Please enter testing scenario");
      return;
    }

    setLoading(true);

    try {

      const response = await API.post(
        `/generate-testcases?prompt=${encodeURIComponent(prompt)}`
      );

      setTestcases(
        response.data.testcases || []
      );

    } catch (error) {

      console.log(error);

      alert("Failed to generate test cases");

    }

    setLoading(false);

  };

  return (

    <div
      style={{
        background: "#0F172A",
        padding: "30px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >

      <h1
        style={{
          color: "white",
          marginBottom: "20px",
        }}
      >
        🤖 Run Automation
      </h1>

      <input
        type="text"
        placeholder="Enter automation prompt..."
        value={prompt}
        onChange={(e) =>
          setPrompt(e.target.value)
        }
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          border: "none",
          background: "#1E293B",
          color: "white",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >

        <button
          onClick={runAutomation}
          disabled={loading}
          style={{
            padding: "14px 24px",
            borderRadius: "12px",
            border: "none",
            background: "#6366F1",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {loading
            ? "Running..."
            : "Run Automation"}
        </button>

        <button
          onClick={generateTestCases}
          disabled={loading}
          style={{
            padding: "14px 24px",
            borderRadius: "12px",
            border: "none",
            background: "#22C55E",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Generate Test Cases
        </button>

      </div>

      {/* TEST CASES */}

      <div
        style={{
          marginTop: "30px",
        }}
      >

        {testcases.map(
          (testcase, index) => (

            <div
              key={index}
              style={{
                background: "#1E293B",
                padding: "15px",
                borderRadius: "12px",
                color: "white",
                marginBottom: "10px",
              }}
            >
              ✅ {testcase}
            </div>

          )
        )}

      </div>

      {/* LOGS */}

      <div
        style={{
          marginTop: "30px",
          background: "#020617",
          padding: "20px",
          borderRadius: "16px",
          color: "#38BDF8",
          minHeight: "200px",
          fontFamily: "monospace",
        }}
      >

        {logs.length === 0
          ? "No execution logs available"
          : logs.map(
              (log, index) => (
                <div key={index}>
                  {log}
                </div>
              )
            )}

      </div>

    </div>

  );

}

export default AutomationPanel;