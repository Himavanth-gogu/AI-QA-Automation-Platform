type Props = {
  loading: boolean;
};

function LoadingOverlay({
  loading,
}: Props) {

  if (!loading) return null;

  return (

    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(2,6,23,0.90)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        flexDirection: "column",
      }}
    >

      <div
        style={{
          width: "90px",
          height: "90px",
          border: "8px solid #1E293B",
          borderTop: "8px solid #4F8CFF",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      <h2
        style={{
          marginTop: "30px",
          color: "white",
        }}
      >
        Running AI Automation...
      </h2>

      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

    </div>

  );
}

export default LoadingOverlay;