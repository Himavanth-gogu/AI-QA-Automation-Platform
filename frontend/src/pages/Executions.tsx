import {
  useEffect,
  useState,
} from "react";

import {
  ArrowLeft,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  getHistory,
} from "../services/api";

function Executions() {

  const navigate =
    useNavigate();

  const [history, setHistory] =
    useState<any[]>([]);

  useEffect(() => {

    loadHistory();

  }, []);

  const loadHistory =
    async () => {

      const data =
        await getHistory();

      setHistory(data);

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

        Execution History

      </h1>

      <div
        style={{
          background: "#111827",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >

          <thead
            style={{
              background: "#1e293b",
            }}
          >

            <tr>

              <th
                style={{
                  padding: "18px",
                }}
              >
                Website
              </th>

              <th>
                Accuracy
              </th>

              <th>
                Security
              </th>

              <th>
                Time
              </th>

            </tr>

          </thead>

          <tbody>

            {history.map((item) => (

              <tr
                key={item.id}
                style={{
                  borderBottom:
                    "1px solid rgba(255,255,255,0.06)",
                }}
              >

                <td
                  style={{
                    padding: "18px",
                  }}
                >

                  {item.website}

                </td>

                <td>
                  {item.ai_accuracy}%
                </td>

                <td>
                  {item.security_score}
                </td>

                <td>
                  {item.execution_time}s
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Executions;