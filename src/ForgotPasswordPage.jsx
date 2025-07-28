import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Password reset request for:', email);
    setIsSubmitted(true);
  };

  return (
    <section className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-16 md:py-32">
      <div className="m-auto h-fit w-full max-w-sm">
        {/* Main Forgot Password Card */}
        <div className="backdrop-blur-xl bg-white/50 rounded-2xl p-8 border border-white/30 shadow-2xl">
          <div>
            {/* Logo/Brand */}
            <Link
              to="/"
              aria-label="go home"
              className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              <span className="text-2xl">🌍</span>
              <div className="text-xl font-bold tracking-tighter">
                <span className="mr-[-2px]">1</span>MarketLive
              </div>
            </Link>

            {!isSubmitted ? (
              <>
                <h1 className="mb-1 mt-4 text-xl font-semibold text-gray-900">Recover Password</h1>
                <p className="text-sm text-gray-600">Enter your email to receive a reset link</p>
              </>
            ) : (
              <>
                <h1 className="mb-1 mt-4 text-xl font-semibold text-gray-900">Check Your Email</h1>
                <p className="text-sm text-gray-600">We've sent a password reset link to your email</p>
              </>
            )}
          </div>

          {!isSubmitted ? (
            <>
              {/* Social Login Buttons - Same as login */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="backdrop-blur-xl bg-white/50 border border-white/30 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white/70 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 256 262"
                  >
                    <path
                      fill="#4285f4"
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    />
                    <path
                      fill="#34a853"
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    />
                    <path
                      fill="#fbbc05"
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                    />
                    <path
                      fill="#eb4335"
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    />
                  </svg>
                  <span>Google</span>
                </button>
                
                <button
                  type="button"
                  className="backdrop-blur-xl bg-white/50 border border-white/30 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white/70 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 256 256"
                  >
                    <path fill="#f1511b" d="M121.666 121.666H0V0h121.666z" />
                    <path fill="#80cc28" d="M256 121.666H134.335V0H256z" />
                    <path fill="#00adef" d="M121.663 256.002H0V134.336h121.663z" />
                    <path fill="#fbbc09" d="M256 256.002H134.335V134.336H256z" />
                  </svg>
                  <span>Microsoft</span>
                </button>
              </div>

              <hr className="my-4 border-dashed border-gray-300" />

              {/* Forgot Password Form */}
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-xl bg-white/70"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      Send Reset Link
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate('/login')}
                      className="w-full backdrop-blur-xl bg-white/50 border border-white/30 py-2.5 px-4 rounded-xl text-sm font-medium text-gray-700 hover:bg-white/70 transition-colors duration-200"
                    >
                      Back to Login
                    </button>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <div className="mt-6 space-y-6">
              <div className="text-center">
                <div className="text-green-600 text-4xl mb-4">✓</div>
                <p className="text-sm text-gray-600 mb-4">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
                <p className="text-xs text-gray-500">
                  Didn't receive the email? Check your spam folder or try again.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full backdrop-blur-xl bg-white/50 border border-white/30 py-2.5 px-4 rounded-xl text-sm font-medium text-gray-700 hover:bg-white/70 transition-colors duration-200"
                >
                  Try Again
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/login')}
                  className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Back to Login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
