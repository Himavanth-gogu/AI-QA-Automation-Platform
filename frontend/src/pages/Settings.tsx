import {
  ArrowLeft,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

function SettingsPage() {

  const navigate =
    useNavigate();

  return (

    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >

      <button
        onClick={() =>
          navigate("/")
        }
        style={{
          background: "#111827",
          border: "none",
          color: "white",
          width: "42px",
          height: "42px",
          borderRadius: "12px",
          marginBottom: "30px",
          cursor: "pointer",
        }}
      >

        <ArrowLeft size={20} />

      </button>

      <h1
        style={{
          marginBottom: "30px",
        }}
      >

        Platform Settings

      </h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >

        {[
          "AI Engine",
          "Automation",
          "Security Monitoring",
          "Analytics",
        ].map((item) => (

          <div
            key={item}
            style={{
              background: "#111827",
              padding: "24px",
              borderRadius: "20px",
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
            }}
          >

            <span>
              {item}
            </span>

            <div
              style={{
                width: "60px",
                height: "30px",
                background: "#22c55e",
                borderRadius: "20px",
              }}
            />

          </div>

        ))}

      </div>

    </div>

  );

}

export default SettingsPage;