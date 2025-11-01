import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-label="Aittention hero">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for contrast (non-interactive so it doesn't block Spline) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-3xl">
          <h1 className="pointer-events-none text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            See what captures attention — instantly.
          </h1>
          <p className="pointer-events-none mt-6 text-lg text-gray-600">
            Aittention predicts heat maps and highlights points of interest on your designs so you can iterate faster. Built for neuromarketing and UI/UX teams.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#demo"
              className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-md text-white bg-gray-900 hover:bg-black transition-colors font-medium shadow"
            >
              Try it in your browser
            </a>
            <a
              href="#features"
              className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/70 backdrop-blur text-gray-900 border border-black/10 hover:bg-white transition-colors font-medium"
            >
              Learn more
            </a>
          </div>
          <p className="pointer-events-none mt-4 text-sm text-gray-500">No signup required. Drag-and-drop your image below.</p>
        </div>
      </div>
    </section>
  );
}
