function NotificationPanel() {

  const notifications = [

    "AI Engine connected successfully",

    "Chrome automation completed",

    "PDF report generated",

    "Security validation passed",

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

      <h2>🔔 Notifications</h2>

      <div
        style={{
          marginTop: "20px",
        }}
      >

        {notifications.map((item, index) => (

          <div
            key={index}
            style={{
              background: "#1E293B",
              padding: "18px",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          >
            {item}
          </div>

        ))}

      </div>

    </div>

  );
}

export default NotificationPanel;