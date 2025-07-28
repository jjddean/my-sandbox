import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Translucent Header Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              <span className="text-2xl">🌍</span>
              <div className="text-xl font-bold tracking-tighter">
                <span className="mr-[-2px]">1</span>MarketLive
              </div>
            </button>
          </div>

          {/* Right Side - Back to Login */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/login')}
              className="backdrop-blur-xl bg-white/50 border border-white/30 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/70 transition-all duration-200"
            >
              Back to Login
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6 py-8">
        <div className="w-full max-w-md">
          {/* Welcome Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Create Your Account</h1>
            <p className="text-sm text-gray-600">Join 1MarketLive and start shopping today</p>
          </div>

          {/* Temporary Sign Up Form */}
          <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-8 shadow-lg border border-white/20">
            <div className="text-center">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Create Account</h2>
              <p className="text-sm text-gray-600 mb-4">Join 1MarketLive today</p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium">
                  Create Account
                </button>
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <button onClick={() => navigate('/login')} className="text-blue-600 hover:text-blue-700">
                    Sign in
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              By signing up, you agree to our{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
