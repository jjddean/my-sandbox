import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading user data on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const signIn = (email, password) => {
    // Simulate sign in
    const userData = {
      id: Date.now().toString(),
      email,
      firstName: email.split('@')[0],
      lastName: 'User',
      imageUrl: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=6366f1&color=fff`
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return Promise.resolve(userData);
  };

  const signUp = (email, password, firstName, lastName) => {
    // Simulate sign up
    const userData = {
      id: Date.now().toString(),
      email,
      firstName: firstName || email.split('@')[0],
      lastName: lastName || 'User',
      imageUrl: `https://ui-avatars.com/api/?name=${firstName || email.split('@')[0]}&background=6366f1&color=fff`
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return Promise.resolve(userData);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    return Promise.resolve();
  };

  const value = {
    user,
    isLoading,
    isSignedIn: !!user,
    signIn,
    signUp,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// SignedIn Component - Only shows content when user is signed in
export function SignedIn({ children }) {
  const { isSignedIn, isLoading } = useAuth();
  
  if (isLoading) return null;
  return isSignedIn ? children : null;
}

// SignedOut Component - Only shows content when user is signed out
export function SignedOut({ children }) {
  const { isSignedIn, isLoading } = useAuth();
  
  if (isLoading) return null;
  return !isSignedIn ? children : null;
}

// SignInButton Component
export function SignInButton({ children, mode = 'redirect', ...props }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/login');
  };

  if (children) {
    return (
      <div onClick={handleClick} style={{ cursor: 'pointer' }} {...props}>
        {children}
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="backdrop-blur-xl bg-white/50 border border-white/30 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/70 transition-all duration-200"
      {...props}
    >
      Sign In
    </button>
  );
}

// SignUpButton Component
export function SignUpButton({ children, mode = 'redirect', ...props }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/signup');
  };

  if (children) {
    return (
      <div onClick={handleClick} style={{ cursor: 'pointer' }} {...props}>
        {children}
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white rounded-lg px-3 py-2 text-sm font-medium hover:bg-blue-700 transition-all duration-200"
      {...props}
    >
      Sign Up
    </button>
  );
}

// UserButton Component - Shows user avatar and dropdown when signed in
export function UserButton({ afterSignOutUrl = '/', ...props }) {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate(afterSignOutUrl);
    setIsOpen(false);
  };

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
        {...props}
      >
        <img
          src={user.imageUrl}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <img
                  src={user.imageUrl}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{user.firstName} {user.lastName}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
            
            <div className="p-2">
              <button
                onClick={() => {
                  navigate('/profile');
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  navigate('/settings');
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                Settings
              </button>
              <hr className="my-2" />
              <button
                onClick={handleSignOut}
                className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
              >
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
