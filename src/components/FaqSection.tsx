'use client'

import React, { useState } from 'react'

const styles = {
  faqSection: 'bg-black text-white py-20 md:py-28 px-4 md:px-8 my-20',
  container: 'max-w-6xl mx-auto',
  heading: 'text-4xl md:text-5xl font-bold mb-6 text-white',
  subheading: 'text-base md:text-lg text-gray-300 mb-12 leading-relaxed',
  faqList: 'space-y-6',
  faqItem: 'border-b border-[#e76c02]/20 hover:border-[#e76c02]/40 transition-colors duration-300 rounded-lg',
  questionButton:
    'flex justify-between items-center w-full py-5 text-lg md:text-xl font-semibold focus:outline-none hover:text-[#e76c02] transition-colors duration-300',
  questionText: 'text-left pr-4',
  icon: 'text-2xl font-bold transition-transform duration-300 text-[#e76c02]',
  answerContainer: 'overflow-hidden transition-all duration-500 ease-in-out',
  answer: 'py-4 md:py-6 text-gray-300 leading-relaxed text-base md:text-lg'
}

const faqData = [
  {
    id: 'what-is-dgl-beforward',
    question: 'What is DGL Beforward?',
    answer:
      'DGL Beforward is a trusted automotive platform that specializes in importing, exporting, and selling high-quality vehicles. We connect customers with reliable cars sourced globally while maintaining affordability and transparency.'
  },
  {
    id: 'what-services-does-dgl-offer',
    question: 'What services does DGL Beforward offer?',
    answer:
      'We provide services including car import/export, dealer stock management, financing options, after-sales support, and vehicle sourcing from Japan and other regions. Our goal is to make buying and selling cars seamless and secure.'
  },
  {
    id: 'how-can-i-purchase',
    question: 'How can I purchase a vehicle from DGL Beforward?',
    answer:
      'Simply browse our listings online, choose the car you like, and contact our sales team. We guide you through payment, shipment, and registration processes, ensuring a stress-free buying experience.'
  },
  {
    id: 'why-choose-dgl',
    question: 'Why should I choose DGL Beforward?',
    answer:
      'We are committed to reliability, affordability, and transparency. With global sourcing channels, strict quality checks, and a customer-first approach, DGL Beforward ensures you get the best value for your money.'
  },
  {
    id: 'does-dgl-offer-warranty',
    question: 'Does DGL Beforward offer warranty or after-sales support?',
    answer:
      'Yes! Depending on the vehicle and package you choose, we provide limited warranties, servicing assistance, and dedicated customer support even after your purchase.'
  },
  {
    id: 'how-secure-is-my-transaction',
    question: 'How secure is my transaction with DGL Beforward?',
    answer:
      'Your security is our top priority. We use verified bank channels, digital invoicing, and transparent contracts to ensure your payments and vehicle deliveries are fully safe and traceable.'
  }
]

export default function FaqSection() {
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null)

  const toggleQuestion = (id: string) => {
    setOpenQuestionId(openQuestionId === id ? null : id)
  }

  return (
         <section className="benefits-section">
    <section className={`${styles.faqSection} rounded-xl shadow-lg m-4 border rounded-[20px] border-[#e76c02]/30`}>
      <div className={`${styles.container} p-8`}>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 m-4 ">

          {/* Left Side */}
          <div className="md:w-1/3  ">


            <h1 className={`${styles.heading} hover:text-[#e76c02] transition-all duration-300 m-4 `}>Common Questions</h1>
            <p className={styles.subheading}>
              Haven&apos;t found what you&apos;re looking for?{" "}
              <a
                href="/contactUs"
                className="text-[#e76c02] hover:text-[#e76c02]/80 underline transition-all duration-300"
              >
                Contact Us
              </a>{' '}
              and our team will be happy to assist you.
            </p>
          </div>

          {/* Right Side */}
          <div className="md:w-2/3 ">

            <div className={styles.faqList}>
              {faqData.map((item) => (
                <div key={item.id} className={`${styles.faqItem} rounded-lg shadow-sm hover:shadow-md transition-all duration-300 `}>
                  <button
                    className={`${styles.questionButton} rounded-t-lg border rounded-[20px] border-[#e76c02]/30 p-4 hover:bg-[#e76c02]/10 m-4`}
                    onClick={() => toggleQuestion(item.id)}
                    aria-expanded={openQuestionId === item.id}
                    aria-controls={`answer-${item.id}`}
                  >
                    <span className={`${styles.questionText} hover:scale-105 transition-transform duration-300 `}>{item.question}</span>
                    <span
                      className={`${styles.icon} ${
                        openQuestionId === item.id
                          ? 'transform rotate-45'
                          : 'transform rotate-0'
                      } hover:scale-110 transition-all duration-300`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`answer-${item.id}`}
                    className={`${styles.answerContainer} rounded-b-lg`}
                    style={{
                      maxHeight: openQuestionId === item.id ? '500px' : '0'
                    }}
                  >
                    <div className={`${styles.answer} px-6`}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  )
}
