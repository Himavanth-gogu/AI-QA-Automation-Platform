function SystemHealthPanel() {

  const stats = [

    {
      title: "CPU Usage",
      value: "42%",
      color: "#4F8CFF",
    },

    {
      title: "Memory Usage",
      value: "3.2 GB",
      color: "#22C55E",
    },

    {
      title: "Server Health",
      value: "Healthy",
      color: "#A855F7",
    },

    {
      title: "Active Sessions",
      value: "128",
      color: "#F59E0B",
    },

    {
      title: "Running Automations",
      value: "14",
      color: "#EF4444",
    },

    {
      title: "AI Engine",
      value: "Online",
      color: "#06B6D4",
    },

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

      <h2>🖥️ System Health Monitor</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >

        {stats.map((item) => (

          <div
            key={item.title}
            style={{
              background: "#1E293B",
              padding: "25px",
              borderRadius: "16px",
              width: "220px",
            }}
          >

            <h3
              style={{
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

            <h1
              style={{
                color: item.color,
              }}
            >
              {item.value}
            </h1>

          </div>

        ))}

      </div>

    </div>

  );
}

export default SystemHealthPanel;