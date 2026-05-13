function VoiceCommandPanel() {

  return (

    <div
      style={{
        background: "#111827",
        padding: "30px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >

      <h2>🎤 Voice AI Assistant</h2>

      <p
        style={{
          marginTop: "15px",
          color: "#CBD5E1",
        }}
      >
        Example:
      </p>

      <div
        style={{
          background: "#1E293B",
          padding: "18px",
          borderRadius: "12px",
          marginTop: "15px",
        }}
      >
        “Run checkout automation on Chrome”
      </div>

      <button
        style={{
          marginTop: "20px",
          padding: "14px 22px",
          borderRadius: "12px",
          border: "none",
          background:
            "linear-gradient(to right, #EF4444, #DC2626)",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Start Voice Assistant
      </button>

    </div>

  );
}

export default VoiceCommandPanel;