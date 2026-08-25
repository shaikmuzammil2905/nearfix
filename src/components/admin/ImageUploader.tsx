import React, { useState } from 'react';
import { Upload, X, Image as ImageIcon, Loader2, Link2, CheckCircle2 } from 'lucide-react';
import { uploadImageToCloudinary } from '../../lib/cloudinary';

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  helperText?: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  value,
  onChange,
  label = "Upload Image / Icon",
  helperText = "PNG, JPG, WEBP up to 5MB (Cloudinary Powered)"
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urlInputValue, setUrlInputValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErrorMsg('');
    setIsUploading(true);

    const result = await uploadImageToCloudinary(file);
    setIsUploading(false);

    if (result.url) {
      onChange(result.url);
    } else {
      setErrorMsg(result.error || 'Failed to upload image');
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInputValue.trim()) {
      onChange(urlInputValue.trim());
      setShowUrlInput(false);
      setUrlInputValue('');
    }
  };

  return (
    <div className="space-y-2">
      {label && <label className="block text-xs font-bold text-slate-700 uppercase">{label}</label>}

      {value ? (
        <div className="relative group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-2 flex items-center gap-4">
          <img
            src={value}
            alt="Preview"
            className="w-20 h-20 object-cover rounded-xl border border-slate-200 flex-shrink-0 bg-white"
          />
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-slate-700 truncate">{value}</div>
            <div className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Image active
            </div>
            <div className="flex items-center gap-2 mt-2">
              <label className="text-xs font-bold text-nearfix-blue hover:underline cursor-pointer">
                Replace
                <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              </label>
              <span className="text-slate-300">|</span>
              <button
                type="button"
                onClick={() => onChange('')}
                className="text-xs font-bold text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="border-2 border-dashed border-slate-300 hover:border-nearfix-orange rounded-2xl p-6 text-center transition-colors bg-white">
            {isUploading ? (
              <div className="flex flex-col items-center justify-center py-2 space-y-2">
                <Loader2 className="w-8 h-8 text-nearfix-orange animate-spin" />
                <span className="text-xs font-bold text-slate-600">Uploading image to Cloudinary...</span>
              </div>
            ) : (
              <label className="cursor-pointer flex flex-col items-center justify-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                  <Upload className="w-6 h-6 text-nearfix-orange" />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-800">Click to upload file</span>
                  <p className="text-xs text-slate-400 mt-0.5">{helperText}</p>
                </div>
                <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              </label>
            )}
          </div>

          <div className="flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={() => setShowUrlInput(!showUrlInput)}
              className="text-slate-500 hover:text-nearfix-blue font-semibold flex items-center gap-1"
            >
              <Link2 className="w-3.5 h-3.5" /> {showUrlInput ? 'Hide URL input' : 'Paste external image URL'}
            </button>
          </div>

          {showUrlInput && (
            <form onSubmit={handleUrlSubmit} className="flex gap-2">
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                value={urlInputValue}
                onChange={(e) => setUrlInputValue(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-nearfix-orange"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-nearfix-blue text-white text-xs font-bold rounded-xl"
              >
                Set Image
              </button>
            </form>
          )}

          {errorMsg && (
            <p className="text-xs font-bold text-red-600">{errorMsg}</p>
          )}
        </div>
      )}
    </div>
  );
};
