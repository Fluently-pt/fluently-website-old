import React from 'react';
import { Brain, Target, Globe2, Clock } from 'lucide-react';

const features = [
  {
    name: 'AI Speech Analysis',
    description: 'Real-time detection of speech patterns and instant feedback',
    icon: Brain
  },
  {
    name: 'Personalized Coaching',
    description: 'Custom techniques adapted to your unique speech patterns',
    icon: Target
  },
  {
    name: 'Global Access',
    description: 'Professional-grade therapy accessible from anywhere',
    icon: Globe2
  },
  {
    name: '24/7 Practice',
    description: 'Practice at your own pace with continuous AI support',
    icon: Clock
  }
];

export function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            AI-Powered Speech Therapy
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Advanced features for effective speech improvement
          </p>
        </div>
        <div className="mt-20 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <div className="absolute -inset-1 rounded-lg bg-brand-200/50 blur"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-lg border border-brand-100">
                <div className="inline-flex items-center justify-center p-2 bg-brand-500 rounded-lg">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}