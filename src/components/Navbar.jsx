import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-rose-500 to-orange-400 shadow-sm" />
          <span className="font-semibold tracking-tight text-gray-900">Aittention</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#demo" className="hover:text-gray-900 transition-colors">Instant demo</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#demo" className="px-3 py-2 text-sm font-medium rounded-md bg-gray-900 text-white hover:bg-black transition-colors">Try it now</a>
        </div>
      </div>
    </header>
  );
}
