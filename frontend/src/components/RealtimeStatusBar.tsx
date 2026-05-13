function RealtimeStatusBar() {

  return (

    <div
      style={{
        background:
          "linear-gradient(to right, #4F8CFF, #7B61FF)",
        padding: "18px 25px",
        borderRadius: "16px",
        marginTop: "30px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
        color: "white",
        fontWeight: "bold",
      }}
    >

      <span>
        ✅ AI Engine Connected
      </span>

      <span>
        🌐 Multi Browser Ready
      </span>

      <span>
        ⚡ Real-Time Monitoring Active
      </span>

      <span>
        🔒 Security Protected
      </span>

    </div>

  );
}

export default RealtimeStatusBar;