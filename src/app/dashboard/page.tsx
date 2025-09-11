"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Table from "@/components/table/Table";
import { style }  from '@/app/career/cardStyle';

export interface Application {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  position: string;
  resumeUrl: string;
  coverLetterUrl: string | null;
  createdDate: string; // ISO string
}


export interface Contact {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdDate: string; // keep as string, can parse to Date if needed
}



export default function Dashboard() {
  const router = useRouter();
 const [applications, setApplications] = useState<Application[]>([]);
const [contacts, setContacts] = useState<Contact[]>([]);
  const handleLogout = () => {
    Cookies.remove("auth");
    router.push("/login");
  };

  // Dummy Data - replace later with API data
  const contactHeaders = ["Name", "Email", "Phone", "Subject", "Message","createdAt"];
  // const contactRows = [
  //   ["Ali Khan", "ali@example.com", "+92 300 1234567", "Inquiry", "Tell me more..."],
  //   ["Sara Ahmed", "sara@example.com", "+92 301 9876543", "Collaboration", "Interested to join!"],
  // ];

   // convert contacts into Table rows
  const contactRows = contacts.map((c) => [
    c.fullName,
    c.email,
    c.phone,
    c.subject,
    c.message,
    c.createdDate.split('T')[0],
  ]);

  const appHeaders = [
    "Full Name", 
    "Email",
    "Phone",
    "Position",
    "Resume",
    "Cover Letter",
    "createdAt"
  ];
// const appRows = [
//   [
//     "Bilal Hussain",
//     "bilal@example.com", 
//     "+92 322 1122334",
//     "Frontend Developer",
//     <a key="bilal-resume" href="/resume.pdf" className="text-blue-600 underline">View</a>,
//     "Excited to apply!",
//     "2023-10-01"
//   ],
//   [
//     "Maria Khan",
//     "maria@example.com",
//     "+92 345 5566778", 
//     "Backend Developer",
//     <a key="maria-resume" href="/resume.pdf" className="text-blue-600 underline">View</a>,
//     "Looking forward to this opportunity.",
//     "2023-10-02"
//   ],
// ];

 const appRows = applications.map((item, index) => [
    item.fullName,
    item.email,
    item.phone,
    item.position,
 
    <a
      key={`resume-${index}`}
      href={item.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      View
    </a>,
    item.coverLetterUrl ? (
      <a
        key={`cover-${index}`}
        href={item.coverLetterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View
      </a>
    ) : (
      "N/A"
    ),
       item.createdDate.split('T')[0],
  ]);
  // fetch data from API
 // fetch data from API
   // fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://192.168.21.68:5001/api/DglWebsite/applications");
        if (!res.ok) throw new Error("Failed to fetch applications");

        const data = await res.json();
          setApplications(data)
        console.log(data, "fetched applications");

      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);


    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://192.168.21.68:5001/api/DglWebsite/contact");
        if (!res.ok) throw new Error("Failed to fetch contact data");

        const data = await res.json();
          setContacts(data)
        console.log(data, "fetched contact");

      } catch (err) {
        console.error("contact",err);
      }
    };

    fetchData();
  }, []);


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
