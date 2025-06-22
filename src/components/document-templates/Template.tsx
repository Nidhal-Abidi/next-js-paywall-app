"use client";
import { useState } from "react";

export function Template({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-16 p-6 border border-gray-200 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button
          onClick={() => copyToClipboard(content)}
          className="bg-black text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800 transition duration-200"
        >
          {copied ? "Copied!" : "Copy Template"}
        </button>
      </div>
      <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm whitespace-pre-wrap border border-gray-200">
        {content}
      </pre>
    </div>
  );
}
