'use client'

import { useState } from 'react'

interface ApplyFormModalProps {
  selectedJob: string | null
  onClose: () => void
}

export default function ApplyFormModal({
  selectedJob,
  onClose,
}: ApplyFormModalProps) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  // const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState<File | null>(null)
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("heyehey")
if(!fullName || !email || !phone || !resume || !coverLetterFile){

  alert("Please fill all the fields and upload required documents.");
}
    const formData = new FormData()
    formData.append('FullName', fullName)
    formData.append('Email', email)
    formData.append('Phone', phone)
    formData.append('Position', selectedJob || '')
    // formData.append("CoverLetter", coverLetter);

    const resumeInput = (
      document.querySelector('input[type="file"]') as HTMLInputElement
    )?.files?.[0]

    if (resumeInput) {
      formData.append('Resume', resumeInput)
    }

    const coverLetterInput = (
      document.querySelector('input[type="file"]') as HTMLInputElement
    )?.files?.[0]

    if (coverLetterInput) {
      formData.append('CoverLetter', coverLetterInput)
    }

    try {
      console.log([...formData.entries()])
      const response = await fetch('https://192.168.21.68:5001/api/DglWebsite/apply', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const result = await response.json()
        console.log(result,"result")
        alert('Application submitted successfully!')
        onClose()
      } else {
        alert('Failed to submit application')
      }
    } catch (error) {
      console.log(error,'eeerrreeerr')
      alert('Error submitting application')
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <h2 className="modal-title">Apply for {selectedJob}</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              required
              className="form-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              required
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              required
              className="form-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Position</label>
            <input
              type="text"
              value={selectedJob || ''}
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
              onChange={(e) => setResume(e.target.files?.[0] || null)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Cover Letter (PDF, DOC, DOCX)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              required
              className="form-input-file"
              onChange={(e) => setCoverLetterFile(e.target.files?.[0] || null)}
            />
            {/* <textarea
              placeholder="Tell us why you're interested..."
              className="form-textarea"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            /> */}
          </div>

          <div className="form-buttons">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
