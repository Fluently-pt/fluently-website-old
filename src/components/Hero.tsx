import React from 'react';
import { WaitlistForm } from './WaitlistForm';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-brand-50 to-white pt-44 pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-200 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-300/30 blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight">
            <span className="block text-gray-900 mb-2">Transform your speech with</span>
            <span className="block text-brand-500">AI-powered therapy</span>
            <span className="block text-brand-600">anytime, anywhere</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Experience professional-grade speech therapy powered by artificial intelligence.
            Practice at your own pace with real-time feedback and personalized exercises.
          </p>
          <div className="mt-10">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  );
}