"use client";

import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { jobListings, benefits } from "./dataCareer";
import HeroSection from "@/components/HeroSection";
import { style } from "./cardStyle";
import ApplyFormModal from "./ApplyFormModal";

function Career() {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const openForm = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedJob(null);
  };

  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "auto";
  }, [showForm]);

  const title = "Career Opportunities";
  const content =
    "Join our team at DIGILIGHTED ENTERPRISES and be part of revolutionizing the automotive marketplace. We are looking for passionate individuals who want to make a difference in the automotive industry.";


    const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } }, // force 1 card
  ],
};


  return (
    <div className="bg-black min-h-screen">
      <style jsx>{style}</style>

      {/* Hero Section */}
      <HeroSection 
        title={title} 
        content={content} 
        isContactUs={false}
      />

      <br />
      <br />
      <br />
     
      {/* Job Listings Section */}
<section className="jobs-section">
  <h1 className="section-title">
    Current Openings
  </h1>

  <div className="benefits-container">
    {jobListings.map((job, index) => (
      <div
        key={index}
        className="job-card"
      >
        {/* Title & Type */}
        <div>
          <div className="job-meta">
            <h3 className="job-title">{job.title}</h3>
            <span className="job-type">
              {job.type}
            </span>
          </div>
          <p className="job-location">{job.location}</p>

          {/* Description */}
          <p className="job-description">{job.description}</p>

          {/* Requirements */}
          <div className="job-requirements">
            <h4 className="requirements-title">Requirements:</h4>
            <ul className="requirements-list">
              {job.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={() => openForm(job.title)}
          className="apply-button"
        >
          Apply Now
        </button>
      </div>
    ))}
  </div>
</section>


    
      {/* Benefits Section */}
      <section className="benefits-section">
        <h1 className="benefits-heading">Why Work With Us?</h1>
        <div className="benefits-container">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-text">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Apply Form Modal */}
      {showForm && <ApplyFormModal selectedJob={selectedJob} onClose={closeForm} />}
    </div>
  );
}

export default Career;
