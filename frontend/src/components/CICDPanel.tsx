function CICDPanel() {

  const pipelines = [

    {
      name: "GitHub Actions",
      status: "Running",
      color: "#22C55E",
    },

    {
      name: "Jenkins Pipeline",
      status: "Success",
      color: "#4F8CFF",
    },

    {
      name: "Docker Build",
      status: "Completed",
      color: "#A855F7",
    },

    {
      name: "Azure DevOps",
      status: "Healthy",
      color: "#F59E0B",
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

      <h2>⚙️ CI/CD Pipeline Status</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >

        {pipelines.map((pipeline) => (

          <div
            key={pipeline.name}
            style={{
              background: "#1E293B",
              padding: "25px",
              borderRadius: "16px",
              width: "240px",
            }}
          >

            <h3>{pipeline.name}</h3>

            <h2
              style={{
                color: pipeline.color,
              }}
            >
              {pipeline.status}
            </h2>

          </div>

        ))}

      </div>

    </div>

  );
}

export default CICDPanel;