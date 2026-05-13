type Props = {
  logs: string[];
};

function LiveExecutionLogs({
  logs,
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

      <h2>🖥️ Live Execution Logs</h2>

      <div
        style={{
          marginTop: "20px",
          background: "#020617",
          borderRadius: "15px",
          padding: "20px",
          minHeight: "250px",
          fontFamily: "monospace",
          overflowY: "auto",
        }}
      >

        {logs.length === 0 && (

          <p
            style={{
              color: "#64748B",
            }}
          >
            No execution logs available
          </p>

        )}

        {logs.map((log, index) => (

          <p
            key={index}
            style={{
              color:
                log.includes("SUCCESS")
                  ? "#22C55E"
                  : log.includes("ERROR")
                  ? "#EF4444"
                  : "#CBD5E1",
              marginBottom: "12px",
            }}
          >
            {log}
          </p>

        ))}

      </div>

    </div>

  );
}

export default LiveExecutionLogs;