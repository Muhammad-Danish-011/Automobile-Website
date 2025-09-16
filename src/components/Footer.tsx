'use client'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import Image from 'next/image'

const Footer: NextPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      setShowScrollButton(scrollTop > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' })
  // }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <footer className="bg-gradient-to-t from-[#450800] to-[#EE3A24]  ">
      <div className="bg-[#1b1a1b] rounded-2xl flex flex-wrap justify-between items-start  p-4">
        {/* Left Logo + Subscribe */}
        <div className="flex flex-col items-center gap-0.5 max-[1150px]:hidden mb-2">
          <Image
            className="w-[280px] h-auto md:w-[320px] lg:w-[360px]"
            src={'/images/DGL Logo White-01.png'}
            alt="DGL"
            width={200}
            height={200}
          />

          {/* Subscribe */}
          <div className="flex flex-col items-center w-full">
            <h2 className="text-white font-semibold text-xl mb-1">
              Stay Up to date
            </h2>
            <form className="relative w-72" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full h-11 rounded-lg px-3 bg-white bg-opacity-20 text-white placeholder-gray-200 outline-none"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <img
                  src="/images/footer/submit_icon.svg"
                  alt="Submit"
                  className="w-6 h-6"
                />
              </button>
            </form>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col w-[250px] text-white gap-0.5 max-[1150px]:hidden mb-2 mx-2">
          <h2 className="bg-gradient-to-r from-[#e25420] to-[#f69448] bg-clip-text text-transparent font-bold text-2xl">
            DGL
          </h2>
          <p className="text-sm leading-snug">
            DIGILIGHTED ENTERPRISES (DGL) is a leading platform for buying and
            selling new and pre-owned cars, offering a comprehensive automotive
            marketplace experience. We provide:
          </p>
          <ul className="text-sm leading-snug list-disc pl-5">
            <li>Expert Inspections</li>
            <li>Competitive Financing</li>
            <li>Professional Support</li>
            <li>Extensive Inventory</li>
            <li>Seamless Process</li>
            <li>Expert Consultation</li>
            <li>Post-sale Assistance</li>
          </ul>
        </div>
        {/* Socials */}
        <div className="text-white flex flex-col gap-2 mb-2">
          <h2 className="text-lg font-semibold">Socials</h2>
          <div className="flex flex-col gap-1">
            <Link href="" className="flex gap-2 items-center">
              <Image
                width={24}
                height={24}
                alt="insta logo"
                src="/images/social/instagram_hero.svg"
              />
              Instagram
            </Link>
            <Link href="https://www.facebook.com/dglbeforward/" className="flex gap-2 items-center">
              <Image
                width={24}
                height={24}
                alt="fb logo"
                src="/images/social/facebook_hero.svg"
              />
              Facebook
            </Link>
            <Link href="https://www.linkedin.com/company/dgl-beforward/" className="flex gap-2 items-center">
              <Image
                width={24}
                height={24}
                alt="linkedin logo"
                src="/images/social/linkedin_hero.svg"
              />
              LinkedIn
            </Link>
            <Link href="/contactUs" className="flex gap-2 items-center">
              <Image
                width={24}
                height={24}
                alt="mail logo"
                src="/images/social/mail_hero.svg"
              />
              Email
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-[250px] text-white gap-0.5 max-[1150px]:hidden mb-2 mx-2">
          <h2 className="bg-gradient-to-r from-[#e25420] to-[#f69448] bg-clip-text text-transparent font-bold text-2xl">
            Contact Us
          </h2>

          {/* address and contact section */}
          <div className="flex items-start gap-2 mt-2">
            <Image
              width={20}
              height={20}
              alt="location icon"
              src="/images/location.png"
              className="mt-1"
            />
            <p className="text-sm leading-snug">
              JP 7103 Kaburagi Mansion, Nishi Nakanobu, 3-2-17, Shinagawa Ku,
              142-0054 Tokyo, Japan
            </p>
          </div>
             <div className="flex items-start gap-2 mt-2">
            <Image
              width={20}
              height={20}
              alt="location icon"
              src="/images/location.png"
              className="mt-1"
            />
            <p className="text-sm leading-snug text-white ">
              Premises 8253, Dubai Digital Park Building A2, Dubai Silicon Oasis
              DUBAI, UAE
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2">
              <Image
                width={20}
                height={20}
                alt="phone icon"
                src="/images/phone.png"
              />
              <a href="tel:+494719731900" className="text-sm">
                +49 471 9731 9003
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Image
                width={20}
                height={20}
                alt="phone icon"
                src="/images/phone.png"
              />
              <a href="tel:+971527967035" className="text-sm">
                +971 52 796 7035
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Image
                width={20}
                height={20}
                alt="phone icon"
                src="/images/phone.png"
              />
              <a href="tel:+81505050855" className="text-sm">
                +81 50 5050 8550
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        {/* {showScrollButton && (
          <div
            className="absolute bottom-5 right-5 cursor-pointer z-[9999]"
            onClick={scrollToTop}
          >
            <img
              className="w-7 h-7"
              src="/images/footer/Vector.png"
              alt="Scroll to Top"
            />
          </div>
        )} */}

        {/* Mobile Footer */}
        <div className="hidden max-[800px]:flex flex-col justify-center items-center gap-4 text-center">
          <div className="flex gap-4">
            {/* <a href="">
              <Image
                width={40}
                height={40}
                alt="insta logo"
                src="/images/social/instagram_hero.svg"
              />
            </a>
            <a href="">
              <Image
                width={40}
                height={40}
                alt="fb logo"
                src="/images/social/facebook_hero.svg"
              />
            </a>
            <a href="">
              <Image
                width={40}
                height={40}
                alt="linkedin logo"
                src="/images/social/linkedin_hero.svg"
              />
            </a>
            <a href="">
              <Image
                width={40}
                height={40}
                alt="mail logo"
                src="/images/social/mail_hero.svg"
              />
            </a> */}
          </div>
          <h2 className="bg-gradient-to-r from-[#e25420] to-[#f69448] bg-clip-text text-transparent font-bold text-2xl">
            DGL
          </h2>
          <p className="text-white text-sm max-w-xs">
            DIGILIGHTED ENTERPRISES (DGL) is a leading platform for buying and
            selling new and pre-owned cars.
          </p>

          {/* address and contact section */}
          <div className="flex items-start gap-2 mt-2">
            <Image
              width={20}
              height={20}
              alt="location icon"
              src="/images/location.png"
              className="mt-1"
            />
            <p className="text-sm leading-snug text-white ">
              JP 7103 Kaburagi Mansion, Nishi Nakanobu, 3-2-17, Shinagawa Ku,
              142-0054 Tokyo, Japan
            </p>
          </div>

          <div className="flex items-start gap-2 mt-2">
            <Image
              width={20}
              height={20}
              alt="location icon"
              src="/images/location.png"
              className="mt-1"
            />
            <p className="text-sm leading-snug text-white ">
              Premises 8253, Dubai Digital Park Building A2, Dubai Silicon Oasis
              DUBAI, UAE
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2">
              <Image
                width={20}
                height={20}
                alt="phone icon"
                src="/images/phone.png"
              />
              <a href="tel:+494719731900" className="text-sm">
                +49 471 9731 9003
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Image
                width={20}
                height={20}
                alt="phone icon"
                src="/images/phone.png"
              />
              <a href="tel:+971527967035" className="text-sm">
                +971 52 796 7035
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Image
                width={20}
                height={20}
                alt="phone icon"
                src="/images/phone.png"
              />
              <a href="tel:+81505050855" className="text-sm">
                +81 50 5050 8550
              </a>
            </div>

            <Image
              className="w-40 h-auto"
              width={150}
              height={150}
              alt="DGL logo"
              src={'/images/DGL Logo White-01.png'}
            />
          </div>
        </div>
      </div>
      {/* Copyright Bar */}
      <div className="text-center text-white text-sm py-3 bg-black bg-opacity-30 rounded-b-2xl">
        © {new Date().getFullYear()} DGL. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
