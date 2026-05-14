import {
  useEffect,
  useState,
} from "react";

import {
  ArrowLeft,
  FileText,
  Globe,
  Shield,
  Clock,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  getHistory,
} from "../services/api";

function Reports() {

  const navigate =
    useNavigate();

  const [reports, setReports] =
    useState<any[]>([]);

  useEffect(() => {

    loadReports();

  }, []);

  const loadReports =
    async () => {

      try {

        const data =
          await getHistory();

        setReports(data);

      } catch (error) {

        console.log(error);

      }

    };

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
          fontSize: "42px",
          marginBottom: "35px",
        }}
      >

        Reports Center

      </h1>

      {/* REPORT GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "24px",
        }}
      >

        {reports.map((item) => (

          <div
            key={item.id}
            style={{
              background: "#111827",
              padding: "24px",
              borderRadius: "24px",
              border:
                "1px solid rgba(255,255,255,0.06)",
            }}
          >

            {/* HEADER */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "20px",
              }}
            >

              <FileText
                size={38}
                color="#8b5cf6"
              />

              <div>

                <h2
                  style={{
                    marginBottom: "6px",
                  }}
                >

                  {item.title}

                </h2>

                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "14px",
                  }}
                >

                  QA Automation Report

                </p>

              </div>

            </div>

            {/* SCREENSHOT */}

            {item.screenshot && (

              <img
                src={item.screenshot}
                alt="report"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  marginBottom: "20px",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              />

            )}

            {/* WEBSITE */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >

              <Globe
                size={18}
                color="#22c55e"
              />

              <span>
                {item.website}
              </span>

            </div>

            {/* SECURITY */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >

              <Shield
                size={18}
                color="#3b82f6"
              />

              <span>
                Security Score:
                {" "}
                {item.security_score}
              </span>

            </div>

            {/* EXECUTION */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >

              <Clock
                size={18}
                color="#f59e0b"
              />

              <span>
                Execution Time:
                {" "}
                {item.execution_time}s
              </span>

            </div>

            {/* ACCURACY */}

            <div
              style={{
                marginBottom: "24px",
                padding: "14px",
                borderRadius: "14px",
                background: "#020617",
              }}
            >

              <p
                style={{
                  color: "#22c55e",
                  fontWeight: "bold",
                }}
              >

                AI Accuracy:
                {" "}
                {item.ai_accuracy}%

              </p>

            </div>

            {/* BUTTON */}

            <a
              href={item.report}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(135deg,#4f46e5,#9333ea)",
                padding: "14px 20px",
                borderRadius: "14px",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >

              Open Full Report

            </a>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Reports;