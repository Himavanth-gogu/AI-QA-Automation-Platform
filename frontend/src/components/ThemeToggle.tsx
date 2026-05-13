type Props = {
  darkMode: boolean;
  setDarkMode: any;
};

function ThemeToggle({
  darkMode,
  setDarkMode,
}: Props) {

  return (

    <button
      onClick={() =>
        setDarkMode(!darkMode)
      }
      style={{
        padding: "12px 20px",
        borderRadius: "12px",
        border: "none",
        background: "#111827",
        color: "white",
        cursor: "pointer",
      }}
    >
      {darkMode
        ? "☀️ Light Mode"
        : "🌙 Dark Mode"}
    </button>

  );
}

export default ThemeToggle;