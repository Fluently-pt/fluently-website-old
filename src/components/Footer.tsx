import React from 'react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo color="text-brand-500" className="h-12 w-auto" />
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-brand-500">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-brand-500">Terms</a>
            <a href="#" className="text-gray-600 hover:text-brand-500">Contact</a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-8">
          <p className="text-base text-gray-500 text-center">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}