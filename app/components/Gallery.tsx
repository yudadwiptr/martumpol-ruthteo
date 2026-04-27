
import React, { useState } from "react";

const slides = [
  [
    "/gl-3.jpg", "/gl-6.jpg", "/gl-5.jpg", "/gl-1.jpg", "/gl-2.jpg", "/gl-4.jpg"
  ],
  [
    "/gl-7.jpg", "/gl-8.jpg", "/gl-9.jpg", "/gl-10.jpg", "/gl-11.jpg", "/gl-12.jpg"
  ],
  [
    "/gl-13.jpg", "/gl-14.jpg", "/gl-15.jpg", "/gl-16.jpg", "/gl-17.jpg", "/gl-18.jpg"
  ]
];

const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [slide, setSlide] = useState(0);

  const prevSlide = () => setSlide((s) => (s === 0 ? slides.length - 1 : s - 1));
  const nextSlide = () => setSlide((s) => (s === slides.length - 1 ? 0 : s + 1));

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-1 md:px-0">
      <h2 className="text-lg md:text-2xl font-ovo mb-3 md:mb-6 text-black uppercase tracking-widest">Photo Gallery</h2>
      <div className="flex items-center w-full max-w-2xl">
        <button
          aria-label="Previous"
          onClick={prevSlide}
          className="p-2 text-2xl text-black/60 hover:text-black/90 focus:outline-none"
        >
          &#8592;
        </button>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 flex-1">
          {slides[slide].map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Gallery ${slide * 6 + idx + 1}`}
              className="rounded-lg shadow-md cursor-pointer object-cover w-full aspect-[3/4] max-h-[220px] md:max-h-[320px] hover:scale-105 transition-transform duration-200 border-2 border-white"
              onClick={() => setSelected(src)}
            />
          ))}
        </div>
        <button
          aria-label="Next"
          onClick={nextSlide}
          className="p-2 text-2xl text-black/60 hover:text-black/90 focus:outline-none"
        >
          &#8594;
        </button>
      </div>
      <div className="mt-2 text-xs text-black/60">{slide + 1} / {slides.length}</div>
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
          <img
            src={selected}
            alt="Selected"
            className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl border-4 border-white"
          />
          <button
            className="absolute top-8 right-8 text-white text-3xl font-bold bg-black/60 rounded-full px-4 py-2 hover:bg-black/90 transition"
            onClick={e => { e.stopPropagation(); setSelected(null); }}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
