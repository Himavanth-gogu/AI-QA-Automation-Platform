type Props = {
  executions: any[];
};

function ExecutionTable({
  executions,
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

      <h2>📊 Execution History</h2>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
        }}
      >

        <thead>

          <tr>

            <th>Prompt</th>

            <th>Website</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {executions.map((item, index) => (

            <tr key={index}>

              <td>{item.prompt}</td>

              <td>{item.website}</td>

              <td
                style={{
                  color: "#22C55E",
                }}
              >
                {item.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default ExecutionTable;