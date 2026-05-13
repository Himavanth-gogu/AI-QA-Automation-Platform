function TeamActivityPanel() {

  const activities = [

    "Rahul executed Login Flow",

    "AI generated Checkout Test Suite",

    "Chrome automation completed",

    "Firefox regression suite passed",

    "Security validation completed",

    "GitHub Actions deployment successful",

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

      <h2>👥 Team Activity Feed</h2>

      <div
        style={{
          marginTop: "20px",
        }}
      >

        {activities.map((activity, index) => (

          <div
            key={index}
            style={{
              background: "#1E293B",
              padding: "18px",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          >

            {activity}

          </div>

        ))}

      </div>

    </div>

  );
}

export default TeamActivityPanel;