import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ChartsPanel() {

  const data = [
    {
      name: "Mon",
      tests: 12,
    },
    {
      name: "Tue",
      tests: 18,
    },
    {
      name: "Wed",
      tests: 25,
    },
    {
      name: "Thu",
      tests: 16,
    },
    {
      name: "Fri",
      tests: 30,
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

      <h2>📈 Automation Analytics</h2>

      <div
        style={{
          width: "100%",
          height: "350px",
          marginTop: "20px",
        }}
      >

        <ResponsiveContainer>

          <LineChart data={data}>

            <CartesianGrid stroke="#334155" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="tests"
              stroke="#4F8CFF"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}

export default ChartsPanel;