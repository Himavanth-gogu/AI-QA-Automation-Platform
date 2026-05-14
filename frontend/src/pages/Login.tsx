import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

function Login() {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin =
    () => {

      if (
        email === "admin@testpilot.ai"
        &&
        password === "admin123"
      ) {

        localStorage.setItem(
          "isAuth",
          "true"
        );

        navigate("/");

      } else {

        alert(
          "Invalid Credentials"
        );

      }

    };

  return (

    <div
      style={{

        minHeight:"100vh",

        background:"#020617",

        display:"flex",

        justifyContent:"center",

        alignItems:"center",

        padding:"20px",

      }}
    >

      <div
        style={{

          width:"420px",

          background:"#111827",

          padding:"40px",

          borderRadius:"28px",

          border:
            "1px solid rgba(255,255,255,0.06)",

        }}
      >

        <h1
          style={{

            color:"white",

            marginBottom:"12px",

            fontSize:"42px",

          }}
        >

          TestPilot AI

        </h1>

        <p
          style={{

            color:"#94a3b8",

            marginBottom:"30px",

          }}
        >

          Enterprise QA Platform Login

        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          style={{

            width:"100%",

            padding:"16px",

            marginBottom:"20px",

            borderRadius:"16px",

            border:"none",

            background:"#020617",

            color:"white",

            outline:"none",

          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          style={{

            width:"100%",

            padding:"16px",

            marginBottom:"28px",

            borderRadius:"16px",

            border:"none",

            background:"#020617",

            color:"white",

            outline:"none",

          }}
        />

        <button
          onClick={handleLogin}
          style={{

            width:"100%",

            padding:"16px",

            border:"none",

            borderRadius:"16px",

            background:
              "linear-gradient(135deg,#4f46e5,#9333ea)",

            color:"white",

            fontSize:"16px",

            cursor:"pointer",

            fontWeight:"bold",

          }}
        >

          Login

        </button>

        <div
          style={{

            marginTop:"24px",

            color:"#94a3b8",

            fontSize:"14px",

          }}
        >

          Demo Credentials:

          <br />

          admin@testpilot.ai

          <br />

          admin123

        </div>

      </div>

    </div>

  );

}

export default Login;