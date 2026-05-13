type Props = {
  analytics: any;
  executionTime: string;
  aiScore: string;
};

function AnalyticsCards({
  analytics,
  executionTime,
  aiScore,
}: Props) {

  const cards = [
    {
      title: "Total Tests",
      value: analytics.total_tests,
      color: "white",
    },
    {
      title: "Success Rate",
      value: analytics.success_rate,
      color: "#22C55E",
    },
    {
      title: "Execution Time",
      value: executionTime || "0 sec",
      color: "#F59E0B",
    },
    {
      title: "AI Score",
      value: aiScore || "0%",
      color: "#A855F7",
    },
  ];

  return (

    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >

      {cards.map((card) => (

        <div
          key={card.title}
          style={{
            background: "#111827",
            padding: "25px",
            borderRadius: "18px",
            width: "220px",
          }}
        >

          <h3>{card.title}</h3>

          <h1 style={{ color: card.color }}>
            {card.value}
          </h1>

        </div>

      ))}

    </div>

  );
}

export default AnalyticsCards;