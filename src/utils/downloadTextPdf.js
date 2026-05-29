const PAGE_MARGIN = 56;
const LINE_HEIGHT = 13;
const FONT_SIZE = 11;

/**
 * Generate and trigger download of a plain-text PDF (letter size, multi-page).
 */
export async function downloadTextAsPdf(text, fileName = "document.pdf") {
  const { jsPDF } = await import("jspdf");

  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const maxWidth = pageWidth - PAGE_MARGIN * 2;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(FONT_SIZE);

  const lines = doc.splitTextToSize(text, maxWidth);
  let y = PAGE_MARGIN;

  lines.forEach((line) => {
    if (y + LINE_HEIGHT > pageHeight - PAGE_MARGIN) {
      doc.addPage();
      y = PAGE_MARGIN;
    }
    doc.text(line, PAGE_MARGIN, y);
    y += LINE_HEIGHT;
  });

  const safeName = fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`;
  doc.save(safeName);
}
