import {
  useEffect,
  useState,
} from "react";

import {
  ArrowLeft,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  getHistory,
} from "../services/api";

import {

  LineChart,

  Line,

  XAxis,

  YAxis,

  Tooltip,

  CartesianGrid,

  ResponsiveContainer,

  PieChart,

  Pie,

  Cell,

  BarChart,

  Bar,

} from "recharts";

function AnalyticsPage() {

  const navigate =
    useNavigate();

  const [history, setHistory] =
    useState<any[]>([]);

  useEffect(() => {

    loadData();

  }, []);

  const loadData =
    async () => {

      const data =
        await getHistory();

      setHistory(data);

    };

  const chartData =
    history.map((item, index) => ({

      name:
        `Test ${index + 1}`,

      accuracy:
        item.ai_accuracy,

      execution:
        item.execution_time,

      buttons:
        item.buttons_found,

    }));

  const securityData = [

    {
      name: "A+",
      value:
        history.filter(
          (x) =>
            x.security_score === "A+"
        ).length,
    },

    {
      name: "B",
      value:
        history.filter(
          (x) =>
            x.security_score === "B"
        ).length,
    },

    {
      name: "C",
      value:
        history.filter(
          (x) =>
            x.security_score === "C"
        ).length,
    },

  ];

  const COLORS = [

    "#22c55e",

    "#3b82f6",

    "#ef4444",

  ];

  return (

    <div
      style={{

        background:"#020617",

        minHeight:"100vh",

        color:"white",

        padding:"40px",

      }}
    >

      {/* BACK */}

      <button

        onClick={() => navigate("/")}

        style={{

          background:"#111827",

          border:"none",

          color:"white",

          padding:"12px 18px",

          borderRadius:"12px",

          cursor:"pointer",

          marginBottom:"30px",

          display:"flex",

          alignItems:"center",

          gap:"10px",

        }}
      >

        <ArrowLeft size={18} />

        Back

      </button>

      <h1
        style={{

          fontSize:"54px",

          marginBottom:"14px",

        }}
      >

        Analytics Dashboard

      </h1>

      <p
        style={{

          color:"#94a3b8",

          marginBottom:"40px",

        }}
      >

        Real-time AI testing analytics
        and monitoring.

      </p>

      {/* CHART 1 */}

      <div
        style={{

          background:"#111827",

          padding:"30px",

          borderRadius:"24px",

          marginBottom:"40px",

        }}
      >

        <h2
          style={{
            marginBottom:"24px",
          }}
        >

          AI Accuracy Trend

        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <LineChart data={chartData}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="accuracy"
              stroke="#8b5cf6"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      {/* CHART 2 */}

      <div
        style={{

          background:"#111827",

          padding:"30px",

          borderRadius:"24px",

          marginBottom:"40px",

        }}
      >

        <h2
          style={{
            marginBottom:"24px",
          }}
        >

          Execution Time Analytics

        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <BarChart data={chartData}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="execution"
              fill="#3b82f6"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* CHART 3 */}

      <div
        style={{

          background:"#111827",

          padding:"30px",

          borderRadius:"24px",

        }}
      >

        <h2
          style={{
            marginBottom:"24px",
          }}
        >

          Security Distribution

        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <PieChart>

            <Pie

              data={securityData}

              dataKey="value"

              outerRadius={120}

              label

            >

              {securityData.map(
                (entry, index) => (

                  <Cell

                    key={index}

                    fill={
                      COLORS[index]
                    }

                  />

                )
              )}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default AnalyticsPage;