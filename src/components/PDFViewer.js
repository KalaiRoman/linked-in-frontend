import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';

// Configure worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchPdf = async () => {
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      setTotalPages(pdf.numPages);
      renderPage(currentPage, pdf);
    };

    fetchPdf();
  }, [pdfUrl, currentPage]);

  const renderPage = async (pageNumber, pdf) => {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const renderContext = {
      canvasContext: context,
      viewport,
    };

    await page.render(renderContext).promise;
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div>
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
      </div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default PdfViewer;
