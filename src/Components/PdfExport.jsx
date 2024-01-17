import React from 'react';
import { PdfExport } from '@syncfusion/ej2-react-pdf-export';

const InvoicePdfExport = () => {
  const exportToPDF = () => {
    const pdfExport = new PdfExport();
    pdfExport.exportPdf({ fileName: 'invoice.pdf' });
  };

  return (
    <div>
      {/* Your invoice content goes here */}
      <button onClick={exportToPDF}>Export to PDF</button>
    </div>
  );
}

export default InvoicePdfExport;
