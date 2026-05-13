type Props = {
  setPrompt: any;
};

function TestTemplates({
  setPrompt,
}: Props) {

  const templates = [

    "Test login flow",

    "Test signup flow",

    "Test checkout process",

    "Test GitHub homepage",

    "Test YouTube search",

    "Test Amazon product page",

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

      <h2>⚡ Quick Test Templates</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >

        {templates.map((template) => (

          <button
            key={template}
            onClick={() =>
              setPrompt(template)
            }
            style={{
              padding: "12px 18px",
              borderRadius: "12px",
              border: "none",
              background: "#1E293B",
              color: "white",
              cursor: "pointer",
            }}
          >
            {template}
          </button>

        ))}

      </div>

    </div>

  );
}

export default TestTemplates;