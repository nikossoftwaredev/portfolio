"use client";

import SectionTitle from "@/app/_components/SectionTitle";
import { Document, Page, pdfjs } from "react-pdf";
import { useState, useEffect, useRef } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { FaDownload } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export const ResumeSection = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [width, setWidth] = useState<number>(800);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const newWidth = containerWidth - 32;
        setWidth(newWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error("PDF loading error:", error);
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <section
      id="resume"
      className="w-full flex flex-col items-start"
      ref={containerRef}
    >
      <SectionTitle title="RESUME" />
      <div className="w-full flex flex-col items-center mt-4">
        {hasError ? (
          <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-md">
            <p>Unable to load the PDF. Please try the download link below.</p>
          </div>
        ) : (
          <div className="w-full">
            {isLoading && (
              <div className="text-center py-4 skeleton h-[800px] w-full" />
            )}
            <Document
              file="/resume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              className="flex flex-col items-center"
              loading={null}
              noData={
                <p className="text-center py-4">No PDF file specified.</p>
              }
            >
              {numPages &&
                Array.from(new Array(numPages), (_, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={width}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                    className="mb-4"
                  />
                ))}
            </Document>
          </div>
        )}
        <a href="/resume.pdf" download className="btn btn-secondary gap-2">
          <FaDownload /> Resume
        </a>
      </div>
    </section>
  );
};
