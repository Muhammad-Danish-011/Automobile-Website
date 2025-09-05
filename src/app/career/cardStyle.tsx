
// CSS styles (converted to Tailwind where possible, with custom CSS for specific components)
 export const style = `
  .benefits-section {
    padding: 4rem 2rem;
    background-color: #f8f9fa;
    text-align: center;
  }
  
  .benefits-heading {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 3rem;
    color: #1a202c;
  }
  
  .benefits-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .benefit-item {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .benefit-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .benefit-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .benefit-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #2d3748;
  }
  
  .benefit-text {
    color: #718096;
    line-height: 1.6;
  }
  
  /* Modal styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    padding: 1rem;
  }
  
  .modal-content {
    background-color: #1a202c;
    border-radius: 12px;
    padding: 2rem;
    width: 100%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    border: 2px solid #e76c02;
  }
  
  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    color: #a0aec0;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .modal-close:hover {
    color: #e76c02;
  }
  
  .modal-title {
    color: #e76c02;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-label {
    display: block;
    color: white;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  .form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #4a5568;
    border-radius: 6px;
    background-color: #2d3748;
    color: white;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #e76c02;
    box-shadow: 0 0 0 3px rgba(231, 108, 2, 0.3);
  }
  
  .form-input-file {
    width: 100%;
    padding: 0.75rem;
    border: 1px dashed #4a5568;
    border-radius: 6px;
    background-color: #2d3748;
    color: white;
  }
  
  .form-textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #4a5568;
    border-radius: 6px;
    background-color: #2d3748;
    color: white;
    min-height: 120px;
    resize: vertical;
  }
  
  .form-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .btn-cancel {
    padding: 0.75rem 1.5rem;
    background-color: #4a5568;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  
  .btn-cancel:hover {
    background-color: #718096;
  }
  
  .btn-submit {
    padding: 0.75rem 1.5rem;
    background-color: #e76c02;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
  }
  
  .btn-submit:hover {
    background-color: #f57c00;
  }
  
  /* Job card styles */
  .job-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;
  }
  
  .job-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(231, 108, 2, 0.15);
    border-color: #e76c02;
  }
  
  .job-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 0.5rem;
  }
  
  .job-meta {
    display: flex;
    justify-content: between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .job-location {
    color: #718096;
    font-size: 0.9rem;
  }
  
  .job-type {
    background-color: #e76c02;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
  }
  
  .job-description {
    color: #4a5568;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }
  
  .job-requirements {
    margin-bottom: 1.5rem;
  }
  
  .requirements-title {
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 0.5rem;
  }
  
  .requirements-list {
    list-style-type: disc;
    padding-left: 1.5rem;
    color: #4a5568;
    font-size: 0.9rem;
  }
  
  .requirements-list li {
    margin-bottom: 0.25rem;
  }
  
  .apply-button {
    margin-top: auto;
    background-color: #e76c02;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    text-align: center;
  }
  
  .apply-button:hover {
    background-color: #f57c00;
  }
  
  /* Slider adjustments */
  .slick-slide {
    padding: 0 12px;
  }
  
  .slick-list {
    margin: 0 -12px;
  }
  
  .slick-dots li button:before {
    color: #e76c02;
    font-size: 10px;
  }
  
  .slick-dots li.slick-active button:before {
    color: #e76c02;
  }
  
  /* Section styling */
  .jobs-section {
    padding: 3rem 1rem;
    background-color: white;
    border-radius: 16px;
    margin: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .section-title {
    font-size: 2.25rem;
    font-weight: bold;
    text-align: center;
    color: #2d3748;
    margin-bottom: 2rem;
  }
`;