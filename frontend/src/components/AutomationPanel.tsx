type Props = {
  prompt: string;
  setPrompt: any;
  runAutomation: any;
  generateTestCases: any;
  loading: boolean;
};

function AutomationPanel({
  prompt,
  setPrompt,
  runAutomation,
  generateTestCases,
  loading,
}: Props) {

  return (

    <div
      style={{
        background: "#111827",
        padding: "30px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >

      <h2>🤖 Run Automation</h2>

      <input
        value={prompt}
        onChange={(e) =>
          setPrompt(e.target.value)
        }
        placeholder="Example: Open GitHub"
        style={{
          width: "100%",
          padding: "15px",
          marginTop: "20px",
          borderRadius: "12px",
          border: "1px solid #334155",
          background: "#1E293B",
          color: "white",
        }}
      />

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "15px",
        }}
      >

        <button
          onClick={runAutomation}
          style={buttonStyle}
        >
          {loading
            ? "Running..."
            : "Run Automation"}
        </button>

        <button
          onClick={generateTestCases}
          style={{
            ...buttonStyle,
            background:
              "linear-gradient(to right, #22C55E, #16A34A)",
          }}
        >
          Generate Test Cases
        </button>

      </div>

    </div>

  );
}

const buttonStyle = {
  padding: "14px 22px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  background:
    "linear-gradient(to right, #4F8CFF, #7B61FF)",
  color: "white",
  fontWeight: "bold",
};

export default AutomationPanel;