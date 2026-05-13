function AIAssistantPanel() {

  return (

    <div
      style={{
        background:
          "linear-gradient(to right, #4F8CFF, #7B61FF)",
        padding: "30px",
        borderRadius: "20px",
        marginTop: "30px",
        color: "white",
      }}
    >

      <h2>🤖 AI Assistant</h2>

      <p
        style={{
          marginTop: "15px",
          lineHeight: "1.8",
        }}
      >
        AI Assistant recommends running
        cross-browser regression testing
        for better automation coverage.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "14px 24px",
          borderRadius: "12px",
          border: "none",
          background: "white",
          color: "#4F8CFF",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Apply Recommendation
      </button>

    </div>

  );
}

export default AIAssistantPanel;