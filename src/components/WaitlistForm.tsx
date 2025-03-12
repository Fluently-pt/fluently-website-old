import React, { useState } from 'react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-md w-full mx-auto">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-brand-500 text-white font-medium hover:bg-brand-600 transition-colors"
          >
            Join Beta
          </button>
        </form>
      ) : (
        <div className="text-center p-4 rounded-lg bg-brand-500/10">
          <p className="text-brand-600 font-medium">Thanks for joining! We'll be in touch soon.</p>
        </div>
      )}
    </div>
  );
}