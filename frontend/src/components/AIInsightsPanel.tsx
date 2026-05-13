function AIInsightsPanel() {

  const insights = [

    {
      title: "AI Stability Score",
      value: "97%",
      color: "#22C55E",
    },

    {
      title: "Risk Detection",
      value: "Low",
      color: "#F59E0B",
    },

    {
      title: "Performance Status",
      value: "Optimized",
      color: "#4F8CFF",
    },

    {
      title: "Security Validation",
      value: "Passed",
      color: "#A855F7",
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

      <h2>🧠 AI Insights</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >

        {insights.map((item) => (

          <div
            key={item.title}
            style={{
              background: "#1E293B",
              padding: "25px",
              borderRadius: "16px",
              width: "220px",
            }}
          >

            <h3>{item.title}</h3>

            <h2
              style={{
                color: item.color,
              }}
            >
              {item.value}
            </h2>

          </div>

        ))}

      </div>

    </div>

  );
}

export default AIInsightsPanel;