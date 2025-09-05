"use client";

import React from "react";

interface TableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg shadow-md bg-white">
        <thead className="bg-[#e76c02] text-white">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border-b"
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
              className={`hover:bg-gray-50 ${
                rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"
              }`}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 text-sm text-gray-700 border-b"
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
