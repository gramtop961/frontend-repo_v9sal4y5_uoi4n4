import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import InstantDemo from './components/InstantDemo';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <InstantDemo />
      </main>
      <footer id="pricing" className="border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Aittention. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#demo" className="hover:text-gray-900">Instant demo</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
