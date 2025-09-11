'use client'

import styles from '@/styles/Trident.module.css'
import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import { benefits } from './dataContactUs'
import { style } from '../career/cardStyle'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const title = 'Contact Us'
const content =
  'Get in touch with us to learn more about DIGILIGHTED ENTERPRISES and how you can contribute to our mission of advancing technology and innovation. Whether you have questions, ideas for collaboration, or want to be part of our community, we are here to help.'

export default function ContactUs() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if(formData.name.trim() === '' || formData.email.trim() === '' || formData.phone.trim() === '' || formData.subject.trim() === '' || formData.message.trim() === ''){
      alert("Please fill all the fields.");
      return ;
    }
    try {
      // console.log([...formData.entries()])
      const contactInfo = {
        FullName: formData.name,
        Email: formData.email,
        Phone: formData.phone,
        Subject: formData.subject,
        Message: formData.message,
      }

      const response = await fetch(
        'https://api20230805195433.azurewebsites.net/api/DglWebsite/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // 👈 tell backend it's JSON
          },
          body: JSON.stringify(contactInfo),
        }
      )

      if (response.ok) {
        const result = await response.json()
        console.log(result, 'result')
        alert('Application submitted successfully!')

        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
        router.push('/')
        // onClose()
      } else {
        alert('Failed to submit application')
      }
    } catch (error) {
      console.log(error, 'eeerrreeerr')
      alert('Error submitting application')
    }
  }
  return (
    <div>
      <style jsx>{style}</style>
      <HeroSection title={title} content={content} isContactUs={true} />
      <div className="max-w-2xl m-4 p-4 bg-white rounded-lg shadow-lg border border-gray-200 jobs-section">
        <h2 className="text-3xl font-bold text-center text-black mb-10">
          Contact <span className="text-[#e76c02]">Form</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-black">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              // required
              className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:ring-2 focus:ring-[#e76c02] focus:border-[#e76c02] transition"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-black">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              // required
              className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:ring-2 focus:ring-[#e76c02] focus:border-[#e76c02] transition"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-black">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +92 300 1234567"
              // required
              className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:ring-2 focus:ring-[#e76c02] focus:border-[#e76c02] transition"
            />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-black">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              // required
              className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:ring-2 focus:ring-[#e76c02] focus:border-[#e76c02] transition"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-black">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              // required
              className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:ring-2 focus:ring-[#e76c02] focus:border-[#e76c02] transition h-36 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className={styles.outer}>
        {/* Employee Benefits & Perks */}
        <section className="benefits-section">
          <h1 className="benefits-heading"> Employee Benefits & Perks</h1>
          <div className="benefits-container">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-text">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Contribution Benefits Section */}{' '}
        <div className={styles.benefits}>
          {' '}
          <h1 className={styles.benefits_title} style={{ color: 'black' }}>
            Benefits of Contribution
          </h1>{' '}
          <div className={styles.itemcontainer}>
            {' '}
            <div className={styles.items}>
              {' '}
              <div className={styles.itemimg}>
                {' '}
                <Image
                  className={styles.benefits_image}
                  src="/images/Trident/benefits/image 1084.png"
                  alt="Exposure"
                  width={100}
                  height={100}
                />{' '}
              </div>{' '}
              <div className={styles.itempara}>
                {' '}
                <h3 className={styles.item_heading}>Exposure</h3>{' '}
                <p className={styles.itempara_para}>
                  Gain visibility for your work through our platform and network
                  of industry partners.
                </p>{' '}
              </div>{' '}
            </div>{' '}
            <div className={styles.items}>
              {' '}
              <div className={styles.itemimg}>
                {' '}
                <Image
                  className={styles.benefits_image}
                  src="/images/Trident/benefits/image 1081.png"
                  alt="R&D and Innovation"
                  width={100}
                  height={100}
                />{' '}
              </div>{' '}
              <div className={styles.itempara}>
                {' '}
                <h3 className={styles.item_heading}>R&D and Innovation</h3>{' '}
                <p className={styles.itempara_para}>
                  Access to cutting-edge research resources and opportunities to
                  work on innovative projects.
                </p>{' '}
              </div>{' '}
            </div>{' '}
            <div className={styles.items}>
              {' '}
              <div className={styles.itemimg}>
                {' '}
                <Image
                  className={styles.benefits_image}
                  src="/images/Trident/benefits/image 1083.png"
                  alt="Networking"
                  width={100}
                  height={100}
                />{' '}
              </div>{' '}
              <div className={styles.itempara}>
                {' '}
                <h3 className={styles.item_heading}>Networking</h3>{' '}
                <p className={styles.itempara_para}>
                  Connect with industry experts, potential collaborators, and
                  like-minded professionals.
                </p>{' '}
              </div>{' '}
            </div>{' '}
            <div className={styles.items}>
              {' '}
              <div className={styles.itemimg}>
                {' '}
                <Image
                  className={styles.benefits_image}
                  src="/images/Trident/benefits/image 1085.png"
                  alt="Enhancing Projects and education"
                  width={100}
                  height={100}
                />{' '}
              </div>{' '}
              <div className={styles.itempara}>
                {' '}
                <h3 className={styles.item_heading}>
                  Enhancing Projects and Education
                </h3>{' '}
                <p className={styles.itempara_para}>
                  Opportunities to apply theoretical knowledge to real-world
                  projects and continue learning.
                </p>{' '}
              </div>{' '}
            </div>{' '}
            <div className={styles.items}>
              {' '}
              <div className={styles.itemimg}>
                {' '}
                <Image
                  className={styles.benefits_image}
                  src="/images/Trident/benefits/image 1080.png"
                  alt="Opportunities"
                  width={100}
                  height={100}
                />{' '}
              </div>{' '}
              <div className={styles.itempara}>
                {' '}
                <h3 className={styles.item_heading}>Opportunities</h3>{' '}
                <p className={styles.itempara_para}>
                  Access to career advancement opportunities, mentorship, and
                  professional development.
                </p>{' '}
              </div>{' '}
            </div>{' '}
            <div className={styles.items}>
              {' '}
              <div className={styles.itemimg}>
                {' '}
                <Image
                  className={styles.benefits_image}
                  src="/images/Trident/benefits/image 1082.png"
                  alt="Practical Applications"
                  width={100}
                  height={100}
                />{' '}
              </div>{' '}
              <div className={styles.itempara}>
                {' '}
                <h3 className={styles.item_heading}>
                  Practical Applications
                </h3>{' '}
                <p className={styles.itempara_para}>
                  Chance to work on real-world problems and see your solutions
                  implemented.
                </p>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>
      </div>
    </div>
  )
}
