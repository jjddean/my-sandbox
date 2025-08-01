import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
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

          {/* Right Side - Sign Up Link */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/signup')}
              className="backdrop-blur-xl bg-white/50 border border-white/30 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/70 transition-all duration-200"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6 py-8">
        <div className="w-full max-w-md">
          {/* Welcome Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back</h1>
            <p className="text-sm text-gray-600">Sign in to your 1MarketLive account</p>
          </div>

          {/* Temporary Login Form */}
          <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-8 shadow-lg border border-white/20">
            <div className="text-center">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Sign In</h2>
              <p className="text-sm text-gray-600 mb-4">Welcome back to 1MarketLive</p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium">
                  Sign In
                </button>
                <p className="text-xs text-gray-600">
                  Don't have an account?{' '}
                  <button onClick={() => navigate('/signup')} className="text-blue-600 hover:text-blue-700 text-xs">
                    Sign up
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
