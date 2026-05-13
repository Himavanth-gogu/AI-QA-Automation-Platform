type Props = {
  screenshot: string;
};

function ScreenshotPanel({
  screenshot,
}: Props) {

  if (!screenshot) return null;

  return (

    <div
      style={{
        background: "#111827",
        padding: "30px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >

      <h2>📸 Screenshot</h2>

      <img
        src={screenshot}
        alt="Screenshot"
        style={{
          width: "100%",
          marginTop: "20px",
          borderRadius: "15px",
        }}
      />

    </div>

  );
}

export default ScreenshotPanel;