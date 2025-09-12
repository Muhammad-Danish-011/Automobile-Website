'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { style } from '../career/cardStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  // Hardcoded credentials
  const hardcodedEmail = 'b18158031.muhammaddanish@gmail.com'
  const hardcodedPassword = '123456'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (email === hardcodedEmail && password === hardcodedPassword) {
      Cookies.set('auth', 'true')
      router.push('/dashboard')
    } else {
      setError('Invalid email or password!')
    }
  }

  return (
    <>
      <style jsx>{style}</style>
      <div
        className="w-auto flex min-h-screen justify-center items-center px-2 sm:px-4 md:px-6 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-12 relative"
        style={{
          backgroundImage: "url('/images/bg-login.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Increased width for desktop screens */}
        <div className="relative z-10 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[75%] lg:max-w-[50%] xl:max-w-[40%] 2xl:max-w-[35%] p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40">
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 p-4 sm:p-6 md:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] border-2 border-gradient-to-r from-orange-400 to-black-500 hover:shadow-[0_20px_60px_rgba(255,165,0,0.9)] transition-all duration-300 backdrop-blur-sm"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
              Login to <span className="text-[#e76c02]">DGL</span>
            </h2>

            {error && (
              <p className="text-red-500 text-center mb-4 font-medium text-sm md:text-base">
                {error}
              </p>
            )}

            <div className="mb-4 sm:mb-5 md:mb-6 ">
              <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-[#e76c02] transition text-sm md:text-base"
                required
              />
            </div>

            <div className="mb-4 sm:mb-5 md:mb-6">
              <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                Password
              </label>

              <div className="flex items-center border border-gray-300 focus-within:border-[#e76c02] focus-within:ring-2 focus-within:ring-[#e76c02] rounded-lg p-2 sm:p-3">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-0 outline-none focus:outline-none focus:ring-0 text-sm md:text-base"
                  required
                />
                <span
                  className="ml-3 text-gray-500 hover:text-gray-700 cursor-pointer flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  )}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="btn-submit w-1/2 md:w-3/4 lg:w-2/3 xl:w-1/2 block mx-auto mt-4 sm:mt-6 text-sm md:text-base py-2 sm:py-3 md:py-3 font-medium rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
