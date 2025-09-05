"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { jobListings,benefits  } from "./dataCareer";
import HeroSection from "@/components/HeroSection"; 
import { style } from "./cardStyle";



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

  // Handle body scroll lock safely
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showForm]);

  const title = "Career Opportunities";
  const content =
    "Join our team at DIGILIGHTED ENTERPRISES and be part of revolutionizing the automotive marketplace. We are looking for passionate individuals who want to make a difference in the automotive industry. Our innovative solutions and cutting-edge technology create exciting opportunities for growth and development. If you're ready to be challenged, inspired, and rewarded for your contributions, we want to hear from you.";

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
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-black min-h-screen">
      <style jsx>{style}</style>
      
      {/* Hero Section */}
      <HeroSection  title={title} content={content} isContactUs={false} />

      {/* Job Listings Slider */}
      <section className="jobs-section">
        <h1 className="section-title">Current Openings</h1>
        <div className="px-4 md:px-8 lg:px-16 m-4 p-4">
          <Slider {...sliderSettings}>
            {jobListings.map((job, index) => (
              <div key={index}>
                <div className="job-card">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-location">{job.location}</span>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <div className="job-requirements">
                    <h4 className="requirements-title">Requirements:</h4>
                    <ul className="requirements-list">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => openForm(job.title)}
                    className="apply-button"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </Slider>
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
      {showForm && (
        <div className="modal-overlay" onClick={closeForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeForm} aria-label="Close">
              ×
            </button>

            <h2 className="modal-title">Apply for {selectedJob}</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Application submitted for ${selectedJob}`);
                closeForm();
              }}
            >
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" required className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" required className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" required className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">Position</label>
                <input
                  type="text"
                  value={selectedJob || ""}
                  readOnly
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Resume (PDF, DOC, DOCX)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="form-input-file"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Cover Letter</label>
                <textarea
                  placeholder="Tell us why you're interested..."
                  className="form-textarea"
                />
              </div>

              <div className="form-buttons">
                <button type="button" onClick={closeForm} className="btn-cancel">
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Career;


