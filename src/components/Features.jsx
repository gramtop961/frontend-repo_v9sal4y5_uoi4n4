import React from 'react';
import { Rocket, Eye, MousePointer, Gauge } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Frictionless start',
    desc: 'Hit the page and test right away. No accounts, no credit cards — just results.'
  },
  {
    icon: Eye,
    title: 'Predictive attention',
    desc: 'Surface hot spots and areas likely to draw the eye, powered by attention modeling.'
  },
  {
    icon: MousePointer,
    title: 'Design-ready',
    desc: 'Drop in screenshots, landing pages, ads, or UI mocks — we handle common formats.'
  },
  {
    icon: Gauge,
    title: 'Fast feedback loop',
    desc: 'Go from idea to insight in seconds so your team can iterate with confidence.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Why Aittention</h2>
          <p className="mt-4 text-gray-600">Built to make attention testing feel as simple as drag, drop, done.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-rose-500 to-orange-400 text-white flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
