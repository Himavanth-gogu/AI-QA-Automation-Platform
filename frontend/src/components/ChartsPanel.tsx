function ChartsPanel() {
  return (
    <div
      style={{
        background: "#0F172A",
        padding: "30px",
        borderRadius: "20px",
        marginTop: "30px",
        color: "white",
      }}
    >
      <h2>📊 Analytics Charts</h2>

      <div
        style={{
          marginTop: "20px",
          height: "300px",
          background: "#1E293B",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Charts Loading...
      </div>
    </div>
  );
}

export default ChartsPanel;