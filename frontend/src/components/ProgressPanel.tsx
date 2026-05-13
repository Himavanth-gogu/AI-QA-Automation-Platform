function ProgressPanel() {

  return (

    <div
      style={{
        background: "#111827",
        padding: "30px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >

      <h2>⚡ Automation Progress</h2>

      <div
        style={{
          marginTop: "20px",
          background: "#1E293B",
          borderRadius: "20px",
          overflow: "hidden",
          height: "30px",
        }}
      >

        <div
          style={{
            width: "92%",
            height: "100%",
            background:
              "linear-gradient(to right, #4F8CFF, #7B61FF)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          92%
        </div>

      </div>

    </div>

  );
}

export default ProgressPanel;