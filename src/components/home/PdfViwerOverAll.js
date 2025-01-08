import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';
import { useSearchParams } from 'react-router-dom';

// Configure worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
const PdfViewer = () => {
    const [pdf,setPdf]=useSearchParams();
    const pdfURL=pdf.get("pdf");
  const pdfContainerRef = useRef(null);
  useEffect(() => {
    const fetchPdf = async () => {
      const pdf = await pdfjsLib.getDocument(
        pdfURL
      ).promise;

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        renderPage(pageNumber, pdf);
      }
    };
    fetchPdf();
  }, [pdfURL]);

  const renderPage = async (pageNumber, pdf) => {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const renderContext = {
      canvasContext: context,
      viewport,
    };
    await page.render(renderContext).promise;
    pdfContainerRef.current.appendChild(canvas);
  };

  return (
    <div style={{
        padding:"30px"
    }}>
      <h1>PDF Viewer</h1>
      <div ref={pdfContainerRef} style={{ display: 'flex', flexDirection: 'column', gap: '20px',backgroundColor:"white",padding:"20px" }}>
      </div>
    </div>
  );
};

export default PdfViewer;
