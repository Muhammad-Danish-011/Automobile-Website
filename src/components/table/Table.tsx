"use client";

import React from "react";

interface TableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table className="min-w-full border-collapse bg-white">
        <thead className="bg-[#e76c02] text-white">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`hover:bg-gray-50 transition ${
                rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"
              }`}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm text-gray-700 border-t"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
