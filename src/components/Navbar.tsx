'use client'

import React, { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
import Image from 'next/image'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

function NavBar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 992)
      if (window.innerWidth > 992) {
        setShowDropdown(false)
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleDropdownClick = () => {
    setMenuOpen(!isMenuOpen)
    setShowDropdown(!showDropdown)
  }

  const handleLinkClick = () => {
    if (isSmallScreen) {
      setShowDropdown(false)
      setMenuOpen(false)
    }
  }

  return (
    <nav className={`${styles.navbarBlack} w-full flex items-center justify-between px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 fixed top-0 left-0 right-0`}>
      {/* Logo */}
      <Link href="/" className="flex-shrink-0 z-50 relative">
        <Image
          className="w-[100px] h-auto sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] transition-all duration-300"
          src={'/images/DGL Logo White-01.png'}
          alt="DGL"
          width={180}
          height={60}
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      {!isSmallScreen ? (
        <div className={`${styles.linkContainer} flex-grow flex justify-center gap-4 md:gap-6 lg:gap-8`}>
          <Nav.Link href="/" className={`${styles.links} ${styles.navlinkltr} text-sm md:text-base`}>
            Home
          </Nav.Link>
          <Nav.Link href="/service" className={`${styles.links} ${styles.navlinkltr} text-sm md:text-base`}>
            Service
          </Nav.Link>
          <Nav.Link href="/career" className={`${styles.links} ${styles.navlinkltr} text-sm md:text-base`}>
            Career
          </Nav.Link>
          <Nav.Link href="/about" className={`${styles.links} ${styles.navlinkltr} text-sm md:text-base`}>
            About
          </Nav.Link>
        </div>
      ) : null}

      {/* Desktop Buttons */}
      {!isSmallScreen ? (
        <div className="flex gap-2 md:gap-3">
          <motion.button
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-submit text-sm px-3 py-1.5"
          >
            <Nav.Link href="/contactUs">Contact</Nav.Link>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-submit text-sm px-3 py-1.5"
          >
            <Nav.Link href="/login">Login</Nav.Link>
          </motion.button>
        </div>
      ) : (
        <div className={`${styles.hamburger} p-2 z-50 relative`} onClick={handleDropdownClick}>
          <img
            className="w-6 h-6"
            src={isMenuOpen ? '/images/navbar/close.svg' : '/images/navbar/menu.svg'}
            alt="menu"
          />
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isSmallScreen && showDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-full h-[100dvh] bg-black bg-opacity-95 z-40 flex items-center justify-center overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center gap-6 w-full px-4">
              <Nav.Link 
                href="/" 
                className={`${styles.links} ${styles.navlinkltr} text-lg`}
                onClick={handleLinkClick}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="/service" 
                className={`${styles.links} ${styles.navlinkltr} text-lg`}
                onClick={handleLinkClick}
              >
                Service
              </Nav.Link>
              <Nav.Link 
                href="/career" 
                className={`${styles.links} ${styles.navlinkltr} text-lg`}
                onClick={handleLinkClick}
              >
                Career
              </Nav.Link>
              <Nav.Link 
                href="/about" 
                className={`${styles.links} ${styles.navlinkltr} text-lg`}
                onClick={handleLinkClick}
              >
                About
              </Nav.Link>

              <div className="flex flex-col gap-4 mt-6 w-full max-w-[280px]">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-submit text-base py-2"
                  onClick={handleLinkClick}
                >
                  <Nav.Link href="/login">Login</Nav.Link>
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-submit text-base py-2"
                  onClick={handleLinkClick}
                >
                  <Nav.Link href="/contactUs">Contact</Nav.Link>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default NavBar
