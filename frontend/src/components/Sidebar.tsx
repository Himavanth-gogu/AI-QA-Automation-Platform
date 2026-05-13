function Sidebar() {

  const menuItems = [

    "Dashboard",

    "Automations",

    "Analytics",

    "AI Insights",

    "Reports",

    "CI/CD",

    "Security",

    "Settings",

  ];

  return (

    <div
      style={{
        width: "270px",
        background: "#0F172A",
        padding: "30px",
        minHeight: "100vh",
        borderRight: "1px solid #1E293B",
      }}
    >

      {/* Logo */}

      <div
        style={{
          marginBottom: "40px",
        }}
      >

        <h1
          style={{
            color: "#4F8CFF",
            fontSize: "34px",
            marginBottom: "10px",
          }}
        >
          TestPilot AI
        </h1>

        <p
          style={{
            color: "#94A3B8",
            fontSize: "14px",
          }}
        >
          Enterprise QA Platform
        </p>

      </div>

      {/* Menu */}

      {menuItems.map((item, index) => (

        <div
          key={item}
          style={{
            padding: "16px",
            marginBottom: "15px",
            borderRadius: "14px",
            background:
              index === 0
                ? "linear-gradient(to right, #4F8CFF, #7B61FF)"
                : "#111827",
            cursor: "pointer",
            color: "white",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          {item}
        </div>

      ))}

      {/* Bottom Status */}

      <div
        style={{
          marginTop: "60px",
          background: "#111827",
          padding: "20px",
          borderRadius: "16px",
        }}
      >

        <h3
          style={{
            marginBottom: "10px",
          }}
        >
          AI Status
        </h3>

        <p
          style={{
            color: "#22C55E",
            fontWeight: "bold",
          }}
        >
          ● Online
        </p>

      </div>

    </div>

  );
}

export default Sidebar;