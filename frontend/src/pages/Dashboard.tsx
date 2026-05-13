import TestCasesPanel from "../components/TestCasesPanel";

function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        padding: "40px",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        TestPilot AI Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            background: "#0F172A",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>Total Tests</h2>
          <h1 style={{ color: "#22C55E" }}>24</h1>
        </div>

        <div
          style={{
            background: "#0F172A",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>Success Rate</h2>
          <h1 style={{ color: "#3B82F6" }}>98%</h1>
        </div>

        <div
          style={{
            background: "#0F172A",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>AI Status</h2>
          <h1 style={{ color: "#A855F7" }}>Online</h1>
        </div>
      </div>

      <TestCasesPanel />
    </div>
  );
}

export default Dashboard;