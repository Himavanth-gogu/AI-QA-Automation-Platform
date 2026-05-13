type Props = {
  mode: string;
  setMode: any;
};

function ModeSwitcher({
  mode,
  setMode,
}: Props) {

  return (

    <div
      style={{
        background: "#111827",
        padding: "30px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >

      <h2>⚙️ Execution Mode</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >

        <button
          onClick={() =>
            setMode("Demo")
          }
          style={{
            padding: "14px 22px",
            borderRadius: "12px",
            border: "none",
            background:
              mode === "Demo"
                ? "#4F8CFF"
                : "#1E293B",
            color: "white",
            cursor: "pointer",
          }}
        >
          Demo Mode
        </button>

        <button
          onClick={() =>
            setMode("Real")
          }
          style={{
            padding: "14px 22px",
            borderRadius: "12px",
            border: "none",
            background:
              mode === "Real"
                ? "#22C55E"
                : "#1E293B",
            color: "white",
            cursor: "pointer",
          }}
        >
          Real Playwright Mode
        </button>

      </div>

    </div>

  );
}

export default ModeSwitcher;