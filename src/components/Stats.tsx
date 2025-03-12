import React from 'react';

export function Stats() {
  const stats = [
    { label: 'People who stutter worldwide', value: '80M+' },
    { label: 'Average therapy cost saved', value: '$2000' },
    { label: 'Success rate', value: '92%' }
  ];

  return (
    <div className="bg-brand-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-brand-600">{stat.value}</div>
              <div className="mt-2 text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}