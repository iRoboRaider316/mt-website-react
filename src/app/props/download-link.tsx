"use client";

import React from "react";

export default function DownloadLink(url: any, fileName: any) {
  console.log(url);
  const handleDownload = () => {
    fetch(url).then((response) => {
        response.blob().then((blob) => {
        
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = url;
            alink.click();
        });
    });
  };

  return (
    <div>
      <button onClick={handleDownload}>
        Download Sample JSON
      </button>
    </div>
  );
};