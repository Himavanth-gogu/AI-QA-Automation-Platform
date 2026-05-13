import { useState } from "react";
import API from "../services/api";

function TestCasesPanel() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [testcases, setTestcases] = useState<string[]>([]);

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

      setTestcases(response.data.testcases || []);
    } catch (error) {
      console.log(error);
      alert("Failed to generate test cases");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        background: "#111827",
        padding: "30px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: "20px",
        }}
      >
        🤖 AI Test Case Generator
      </h2>

      <input
        type="text"
        placeholder="Enter testing scenario..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          border: "none",
          background: "#1E293B",
          color: "white",
        }}
      />

      <button
        onClick={generateTestCases}
        disabled={loading}
        style={{
          marginTop: "20px",
          padding: "14px 24px",
          borderRadius: "12px",
          border: "none",
          background: "#22C55E",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {loading ? "Generating..." : "Generate Test Cases"}
      </button>

      <div
        style={{
          marginTop: "25px",
        }}
      >
        {testcases.map((testcase, index) => (
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
        ))}
      </div>
    </div>
  );
}

export default TestCasesPanel;