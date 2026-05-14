import {
  ArrowLeft,
  Settings,
  Wrench,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

function IntegrationsPage() {

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

      {/* BACK BUTTON */}

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
          cursor: "pointer",
          marginBottom: "30px",
        }}
      >

        <ArrowLeft size={20} />

      </button>

      {/* TITLE */}

      <h1
        style={{
          marginBottom: "35px",
          fontSize: "42px",
        }}
      >

        Integrations

      </h1>

      {/* GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "24px",
        }}
      >

        {/* CARD 1 */}

        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "24px",
          }}
        >

          <Settings
            size={54}
            color="#8b5cf6"
          />

          <h2
            style={{
              marginTop: "20px",
              marginBottom: "12px",
            }}
          >

            CI/CD Integration

          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >

            Enterprise automation
            integration platform.

          </p>

        </div>

        {/* CARD 2 */}

        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "24px",
          }}
        >

          <Wrench
            size={54}
            color="#22c55e"
          />

          <h2
            style={{
              marginTop: "20px",
              marginBottom: "12px",
            }}
          >

            QA Tools

          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >

            Testing workflows
            and enterprise QA tools.

          </p>

        </div>

      </div>

    </div>

  );

}

export default IntegrationsPage;