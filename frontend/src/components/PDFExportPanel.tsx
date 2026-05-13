import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function PDFExportPanel() {

  const downloadPDF = async () => {

    const input = document.body;

    const canvas = await html2canvas(input);

    const imgData = canvas.toDataURL(
      "image/png"
    );

    const pdf = new jsPDF(
      "p",
      "mm",
      "a4"
    );

    const pdfWidth =
      pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (canvas.height * pdfWidth) /
      canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save(
      "TestPilotAI_Report.pdf"
    );

  };

  return (

    <div
      style={{
        background: "#111827",
        padding: "30px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >

      <h2>📄 Enterprise QA Reports</h2>

      <p
        style={{
          color: "#94A3B8",
          marginTop: "10px",
        }}
      >
        Export full automation dashboard
        as enterprise PDF report.
      </p>

      <button
        onClick={downloadPDF}
        style={{
          marginTop: "20px",
          padding: "14px 24px",
          borderRadius: "12px",
          border: "none",
          background:
            "linear-gradient(to right, #4F8CFF, #7B61FF)",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Download PDF Report
      </button>

    </div>

  );
}

export default PDFExportPanel;