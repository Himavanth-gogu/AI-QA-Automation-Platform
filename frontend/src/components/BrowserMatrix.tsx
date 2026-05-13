function BrowserMatrix() {

  const browsers = [
    {
      name: "Chrome",
      status: "Online",
    },
    {
      name: "Firefox",
      status: "Online",
    },
    {
      name: "Edge",
      status: "Online",
    },
  ];

  return (

    <div
      style={{
        background: "#111827",
        padding: "30px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >

      <h2>🌐 Browser Matrix</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >

        {browsers.map((browser) => (

          <div
            key={browser.name}
            style={{
              background: "#1E293B",
              padding: "25px",
              borderRadius: "16px",
              width: "200px",
            }}
          >

            <h2>{browser.name}</h2>

            <p
              style={{
                color: "#22C55E",
              }}
            >
              {browser.status}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default BrowserMatrix;