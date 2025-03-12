import React from 'react';
import { CircleDot } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';

export function WaitlistSection() {
  return (
    <div className="relative bg-brand-50 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-100 to-brand-200"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-brand-500/10 rounded-full px-4 py-2">
              <CircleDot className="h-5 w-5 text-brand-500" />
              <span className="text-brand-600 font-semibold">Early Access</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Ready to transform your speech{' '}
              <span className="text-brand-500">
                with AI technology
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600">
              Join our waitlist to be among the first to experience AI-powered speech therapy that adapts to your needs.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-brand-200">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  );
}