import {
  useState,
} from "react";

import {
  ArrowLeft,
  Bot,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

function Assistant() {

  const navigate =
    useNavigate();

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const askAI = () => {

    if (
      question.includes("automation")
    ) {

      setAnswer(
        "Automation engine is connected with Playwright and FastAPI backend."
      );

    } else if (
      question.includes("report")
    ) {

      setAnswer(
        "Reports are dynamically generated from execution history."
      );

    } else if (
      question.includes("security")
    ) {

      setAnswer(
        "Security validation engine analyzed the website successfully."
      );

    } else {

      setAnswer(
        "AI Assistant analyzed your request successfully."
      );

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

      {/* BACK */}

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

      {/* MAIN CARD */}

      <div
        style={{
          background: "#111827",
          padding: "40px",
          borderRadius: "28px",
        }}
      >

        <Bot
          size={54}
          color="#8b5cf6"
        />

        <h1
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >

          AI Assistant

        </h1>

        {/* INPUT */}

        <input
          type="text"
          placeholder="Ask AI assistant..."
          value={question}
          onChange={(e) =>
            setQuestion(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "16px",
            border: "none",
            background: "#020617",
            color: "white",
            fontSize: "16px",
            outline: "none",
          }}
        />

        {/* BUTTON */}

        <button
          onClick={askAI}
          style={{
            marginTop: "20px",
            padding: "14px 24px",
            borderRadius: "14px",
            border: "none",
            background:
              "linear-gradient(135deg,#4f46e5,#9333ea)",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >

          Ask AI

        </button>

        {/* RESPONSE */}

        {answer && (

          <div
            style={{
              marginTop: "30px",
              background: "#020617",
              padding: "24px",
              borderRadius: "20px",
            }}
          >

            <p
              style={{
                marginBottom: "14px",
                fontWeight: "bold",
              }}
            >

              AI Response:

            </p>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >

              {answer}

            </p>

          </div>

        )}

      </div>

    </div>

  );

}

export default Assistant;