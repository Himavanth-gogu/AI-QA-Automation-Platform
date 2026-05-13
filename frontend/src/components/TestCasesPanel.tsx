type Props = {
  testcases: string[];
};

function TestCasesPanel({
  testcases,
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

      <h2>🧠 AI Test Cases</h2>

      <ul
        style={{
          marginTop: "20px",
          lineHeight: "2",
        }}
      >

        {testcases.map((testcase, index) => (

          <li key={index}>
            {testcase}
          </li>

        ))}

      </ul>

    </div>

  );
}

export default TestCasesPanel;