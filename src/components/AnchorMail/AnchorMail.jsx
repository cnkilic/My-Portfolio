import React from "react";

function AnchorMail() {
  return (
    <div className="fixed bottom-0 right-6 flex flex-col justify-center items-center">
      <a
        className="text-slate-200 rotate-90 mb-24 hover:text-slate-50"
        href="mailto:canklc9598@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        canklc9598@gmail.com
      </a>
      <div className="h-24 w-0.5 bg-slate-200 "></div>
    </div>
  );
}

export default AnchorMail;
