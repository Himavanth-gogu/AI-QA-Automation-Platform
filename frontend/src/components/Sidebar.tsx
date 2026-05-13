import { Link } from "react-router-dom";

function Sidebar() {

  const menu = [
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
        width: "260px",
        background: "#020617",
        padding: "20px",
        minHeight: "100vh",
      }}
    >

      {menu.map((item, index) => (

        <Link
          key={index}
          to="/dashboard"
          style={{
            display: "block",
            padding: "18px",
            marginBottom: "15px",
            borderRadius: "14px",
            textDecoration: "none",
            background:
              index === 0
                ? "#6366F1"
                : "transparent",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {item}
        </Link>

      ))}

      <div
        style={{
          marginTop: "100px",
          color: "#22C55E",
          fontWeight: "bold",
        }}
      >
        ● Online
      </div>

    </div>

  );

}

export default Sidebar;