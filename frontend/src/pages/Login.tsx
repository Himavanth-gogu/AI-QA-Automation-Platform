import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const login = () => {

    if (
      email === "admin@testpilot.ai" &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "auth",
        "true"
      );

      window.location.href = "/";

    } else {

      alert("Invalid credentials");

    }

  };

  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#020617",
      }}
    >

      <div
        style={{
          width: "400px",
          background: "#111827",
          padding: "40px",
          borderRadius: "20px",
          color: "white",
        }}
      >

        <h1>🔐 TestPilot Login</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={login}
          style={buttonStyle}
        >
          Login
        </button>

      </div>

    </div>

  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "20px",
  borderRadius: "12px",
  border: "none",
  background: "#1E293B",
  color: "white",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "25px",
  borderRadius: "12px",
  border: "none",
  background:
    "linear-gradient(to right, #4F8CFF, #7B61FF)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Login;