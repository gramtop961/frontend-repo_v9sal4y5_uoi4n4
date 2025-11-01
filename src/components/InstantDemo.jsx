import React, { useEffect, useRef, useState } from 'react';

function drawHeatmap(ctx, width, height, intensity = 0.8, points = 60) {
  // Clear
  ctx.clearRect(0, 0, width, height);
  // Create offscreen canvas to accumulate alpha
  const buffer = document.createElement('canvas');
  buffer.width = width;
  buffer.height = height;
  const bctx = buffer.getContext('2d');

  for (let i = 0; i < points; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = Math.max(width, height) * (0.06 + Math.random() * 0.12);
    const grad = bctx.createRadialGradient(x, y, 0, x, y, radius);
    grad.addColorStop(0, `rgba(255,0,0,${0.45 * intensity})`);
    grad.addColorStop(1, 'rgba(255,0,0,0)');
    bctx.fillStyle = grad;
    bctx.beginPath();
    bctx.arc(x, y, radius, 0, Math.PI * 2);
    bctx.fill();
  }

  // Colorize using multiply and a warm gradient
  const img = bctx.getImageData(0, 0, width, height);
  const data = img.data;
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3] / 255; // alpha from heat accumulation
    const r = Math.min(255, Math.floor(255 * a));
    const g = Math.floor(80 * a);
    const b = Math.floor(40 * a);
    data[i] = r; // r
    data[i + 1] = g; // g
    data[i + 2] = b; // b
    data[i + 3] = Math.floor(180 * a); // semi-transparent
  }
  ctx.putImageData(img, 0, 0);
}

export default function InstantDemo() {
  const [imageSrc, setImageSrc] = useState(null);
  const [showHeatmap, setShowHeatmap] = useState(true);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!imageSrc || !showHeatmap) return;
    const canvas = canvasRef.current;
    const imgEl = imageRef.current;
    if (!canvas || !imgEl) return;

    const handle = () => {
      const rect = imgEl.getBoundingClientRect();
      canvas.width = Math.floor(rect.width);
      canvas.height = Math.floor(rect.height);
      const ctx = canvas.getContext('2d');
      drawHeatmap(ctx, canvas.width, canvas.height, 0.9, 70);
    };

    if (imgEl.complete) handle();
    imgEl.addEventListener('load', handle);
    window.addEventListener('resize', handle);
    return () => {
      imgEl.removeEventListener('load', handle);
      window.removeEventListener('resize', handle);
    };
  }, [imageSrc, showHeatmap]);

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  const onPick = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  const reset = () => {
    setImageSrc(null);
    setShowHeatmap(true);
  };

  return (
    <section id="demo" className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Instant demo</h2>
          <p className="mt-4 text-gray-600">Drag an image or upload a file to generate a sample heat map right in your browser.</p>
        </div>

        {!imageSrc ? (
          <div
            onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; }}
            onDrop={onDrop}
            className="mt-8 rounded-2xl border-2 border-dashed border-gray-300 bg-white p-8 sm:p-12 text-center hover:border-gray-400 transition-colors"
          >
            <div className="mx-auto max-w-xl">
              <div className="text-gray-900 font-medium">Drag & drop your image here</div>
              <div className="mt-2 text-sm text-gray-600">PNG, JPG up to 10MB</div>
              <div className="mt-6">
                <label className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-black cursor-pointer">
                  <input type="file" accept="image/*" className="hidden" onChange={onPick} />
                  Upload an image
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-gray-600">Preview — toggle heat map to compare.</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowHeatmap((s) => !s)}
                  className="px-3 py-1.5 text-sm rounded-md border border-black/10 bg-white hover:bg-gray-50"
                >
                  {showHeatmap ? 'Hide heat map' : 'Show heat map'}
                </button>
                <button onClick={reset} className="px-3 py-1.5 text-sm rounded-md bg-gray-900 text-white hover:bg-black">Start over</button>
              </div>
            </div>

            <div ref={containerRef} className="relative w-full rounded-xl overflow-hidden border border-black/10 bg-white">
              {/* Image */}
              <img ref={imageRef} src={imageSrc} alt="Uploaded" className="block w-full h-auto" />

              {/* Heat overlay */}
              {showHeatmap && (
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full mix-blend-multiply opacity-80" />
              )}
            </div>

            <p className="mt-3 text-xs text-gray-500">This is a client-side preview that simulates attention heat using a heuristic. The full model runs on the server for higher fidelity.</p>
          </div>
        )}
      </div>
    </section>
  );
}
