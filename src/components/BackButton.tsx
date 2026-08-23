import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  label?: string;
  fallbackPath?: string;
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  label = 'Back',
  fallbackPath = '/',
  className = ''
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`inline-flex items-center gap-2 py-2 px-4 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm rounded-xl border border-slate-200 shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer ${className}`}
      aria-label="Go Back"
    >
      <ArrowLeft className="w-4 h-4 text-nearfix-orange" />
      <span>{label}</span>
    </button>
  );
};
