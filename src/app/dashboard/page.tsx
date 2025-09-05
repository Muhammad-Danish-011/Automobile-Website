"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import React from "react";
import Table from "@/components/table/Table";
import { style }  from '@/app/career/cardStyle';

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("auth");
    router.push("/login");
  };

  // Dummy Data - replace later with API data
  const contactHeaders = ["Name", "Email", "Phone", "Subject", "Message"];
  const contactRows = [
    ["Ali Khan", "ali@example.com", "+92 300 1234567", "Inquiry", "Tell me more..."],
    ["Sara Ahmed", "sara@example.com", "+92 301 9876543", "Collaboration", "Interested to join!"],
  ];

  const appHeaders = [
    "Full Name", 
    "Email",
    "Phone",
    "Position",
    "Resume",
    "Cover Letter",
  ];
const appRows = [
  [
    "Bilal Hussain",
    "bilal@example.com", 
    "+92 322 1122334",
    "Frontend Developer",
    <a key="bilal-resume" href="/resume.pdf" className="text-blue-600 underline">View</a>,
    "Excited to apply!",
  ],
  [
    "Maria Khan",
    "maria@example.com",
    "+92 345 5566778", 
    "Backend Developer",
    <a key="maria-resume" href="/resume.pdf" className="text-blue-600 underline">View</a>,
    "Looking forward to this opportunity.",
  ],
];

  return (
    <>
    <style jsx>{style}</style>
    <div className="w-full min-h-screen bg-gray-100 p-2 sm:p-4 mx-auto max-w-7xl rounded-[20px]" style={{ marginTop: "6rem" }}>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 p-2 sm:p-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          Dashboard <span className="text-[#e76c02]">Overview</span>
        </h1>
        <button
          onClick={handleLogout}
          className="btn-submit w-1/8 sm:w-auto"
        >
          Logout
        </button>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-4 p-2 sm:p-4">
        {/* Contact Table */}
        <div className="bg-white rounded-xl shadow-lg p-3 sm:p-6 border border-gray-200 mb-4 overflow-x-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 p-2 sm:p-4">
            Contact <span className="text-[#e76c02]">Form Info</span>
          </h2>
          <div className="overflow-x-auto">
            <Table headers={contactHeaders} rows={contactRows} />
          </div>
        </div>

        {/* Application Table */}
        <div className="bg-white rounded-xl shadow-lg p-3 sm:p-6 border border-gray-200 mb-4 overflow-x-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            Applications for <span className="text-[#e76c02]">Position</span>
          </h2>
          <div className="overflow-x-auto">
            <Table headers={appHeaders} rows={appRows} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
