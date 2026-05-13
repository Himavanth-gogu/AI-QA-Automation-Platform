function TopNavbar() {

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >

      {/* Left */}

      <div>

        <h1
          style={{
            fontSize: "38px",
            marginBottom: "10px",
          }}
        >
          🚀 Enterprise Dashboard
        </h1>

        <p
          style={{
            color: "#94A3B8",
          }}
        >
          AI Powered QA Automation Platform
        </p>

      </div>

      {/* Right */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >

        {/* Search */}

        <input
          placeholder="Search automation..."
          style={{
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            background: "#111827",
            color: "white",
            width: "240px",
          }}
        />

        {/* Notification */}

        <button
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "14px",
            border: "none",
            background: "#111827",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          🔔
        </button>

        {/* Profile */}

        <div
          style={{
            background: "#111827",
            padding: "10px 18px",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >

          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background:
                "linear-gradient(to right, #4F8CFF, #7B61FF)",
            }}
          />

          <div>

            <p
              style={{
                margin: 0,
                fontWeight: "bold",
              }}
            >
              QA Engineer
            </p>

            <p
              style={{
                margin: 0,
                color: "#94A3B8",
                fontSize: "13px",
              }}
            >
              Enterprise User
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default TopNavbar;