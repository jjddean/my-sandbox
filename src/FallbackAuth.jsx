import React from 'react';
import { useNavigate } from 'react-router-dom';

// Fallback components when Clerk is not available
export const SignedIn = ({ children }) => {
  // For demo purposes, always show as signed out when no Clerk
  return null;
};

export const SignedOut = ({ children }) => {
  // Always show signed out content when no Clerk
  return children;
};

export const UserButton = () => {
  // Fallback user button
  return (
    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
      U
    </div>
  );
};

export const useUser = () => {
  return {
    isSignedIn: false,
    user: null,
    isLoaded: true
  };
};
