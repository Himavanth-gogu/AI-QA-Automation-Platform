import { ArrowLeft } from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

function Automation() {

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
          cursor: "pointer",
          marginBottom: "30px",
        }}
      >

        <ArrowLeft size={20} />

      </button>

      <h1>
        Test Automation
      </h1>

      <p>
        AI-powered website testing.
      </p>

    </div>

  );

}

export default Automation;