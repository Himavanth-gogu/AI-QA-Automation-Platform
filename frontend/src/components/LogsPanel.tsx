function LogsPanel() {

  const logs = [
    "[INFO] Browser started",
    "[INFO] AI validation running",
    "[INFO] Capturing screenshot",
    "[SUCCESS] Automation completed",
  ];

  return (

    <div
      style={{
        background: "#111827",
        padding: "30px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >

      <h2>📜 Live Logs</h2>

      <div
        style={{
          marginTop: "20px",
          background: "#020617",
          padding: "20px",
          borderRadius: "12px",
          fontFamily: "monospace",
        }}
      >

        {logs.map((log, index) => (

          <p
            key={index}
            style={{
              color:
                log.includes("SUCCESS")
                  ? "#22C55E"
                  : "#CBD5E1",
            }}
          >
            {log}
          </p>

        ))}

      </div>

    </div>

  );
}

export default LogsPanel;