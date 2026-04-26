import React, { useState } from "react";

const images = [
  "/gl-1.jpg",
  "/gl-2.jpg",
  "/gl-3.jpg",
  "/gl-4.jpg",
  "/gl-5.jpg",
  "/gl-6.jpg",
];

const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-ovo mb-6 text-black uppercase tracking-widest">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="rounded-xl shadow-xl cursor-pointer object-cover w-full aspect-[3/4] max-h-[380px] md:max-h-[420px] hover:scale-105 transition-transform duration-200 border-4 border-white"
            onClick={() => setSelected(src)}
          />
        ))}
      </div>
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
