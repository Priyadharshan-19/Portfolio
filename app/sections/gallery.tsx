"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; 
import SectionWrapper from "../components/section-wrapper";

// --- Photo Data Structure ---

const galleryData = [
  {
    title: "City lights",
    subtitle: "Night streets · Long exposure",
    featuredImage: "/images/IMG_20241214_175134675 (1).jpg",
    images: [
      { src: "/images/IMG_20241214_175134675 (1).jpg", alt: "Dramatic ocean sunset with dark clouds and boats" },
      { src: "/images/IMG_20241215_081434511 (1).jpg", alt: "Sunrise at the river dock with reflections" },
    ],
  },
  {
    title: "Hidden trails",
    subtitle: "Travel · Natural light",
    featuredImage: "/images/IMG_20250215_135307294.jpg",
    images: [
      { src: "/images/IMG_20250215_135307294.jpg", alt: "Forest path with tall trees and dappled sunlight" },
      { src: "/images/IMG_20241215_145637713.jpg", alt: "Wide view of bright green rice fields under a blue sky" },
      { src: "/images/IMG_20241215_125545332.jpg", alt: "Small waterfall in a shaded, rocky setting" },
      { src: "/images/IMG_20250315_064920195 (1).jpg", alt: "Sunset over mountains viewed through plants" },
    ],
  },
  {
    title: "Soft portraits",
    subtitle: "People · Ambient mood",
    featuredImage: "/images/IMG_20250215_081128974.jpg",
    images: [
      { src: "/images/IMG_20250215_081128974.jpg", alt: "Temple gopuram at sunrise/sunset with people and ambient lighting" },
      { src: "/images/IMG_20250215_112008022.jpg", alt: "Statue of Shiva among palm trees" },
      { src: "/images/IMG_20250121_112410669.jpg", alt: "Close-up of white flowers with bokeh background" },
      { src: "/images/IMG_20250627_134244543.jpg", alt: "Close-up of yellow daisy-like flowers in grass" },
    ],
  },
];


// --- Modal Component (Lightbox) ---

function ImageModal({ images, currentIndex, onClose, onNext, onPrev }) {
  const currentImage = images[currentIndex];

  if (!currentImage) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-3xl font-light text-white opacity-80 hover:opacity-100 transition-opacity z-30"
      >
        &times;
      </button>

      {/* Image container for central display */}
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
        
        {/* Next/Prev Buttons */}
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className={`absolute left-0 z-20 p-4 text-3xl text-white transition-opacity ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-100'}`}
        >
          &lt;
        </button>
        <button
          onClick={onNext}
          disabled={currentIndex === images.length - 1}
          className={`absolute right-0 z-20 p-4 text-3xl text-white transition-opacity ${currentIndex === images.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-100'}`}
        >
          &gt;
        </button>

        {/* The Image */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

      </div>
      
      {/* Image Counter */}
      <p className="absolute bottom-4 text-sm text-white/70">
        {currentIndex + 1} of {images.length}
      </p>

    </motion.div>
  );
}


// --- Main Gallery Component ---

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const imagesToShow = selectedCategory ? selectedCategory.images : [];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };
  
  const handleClose = () => {
    setModalOpen(false);
    setSelectedCategory(null);
  };

  const handleNext = () => {
    if (currentImageIndex < imagesToShow.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };


  return (
    <>
      <SectionWrapper id="gallery" title="Photography">
        <p className="mb-4 text-sm text-slate-300">
          A small selection of frames that mix travel, urban energy, and quiet
          moments.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {galleryData.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              onClick={() => handleCategoryClick(p)} 
              className="group relative h-40 overflow-hidden rounded-2xl cursor-pointer" 
            >
              {/* The Image Component */}
              <Image
                src={p.featuredImage}
                alt={p.title + " preview"}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition duration-500 ease-in-out group-hover:scale-105" 
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-slate-950/40 transition-colors group-hover:bg-slate-950/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),transparent_55%)] opacity-60 transition-opacity group-hover:opacity-90" />

              {/* Text Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-3 text-xs text-slate-100">
                <p className="font-semibold">{p.title}</p>
                <p className="text-[11px] text-slate-300">{p.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer Links (Removed the entire div here) */}

      </SectionWrapper>
      
      {/* The Modal */}
      <AnimatePresence>
        {modalOpen && selectedCategory && (
          <ImageModal 
            images={imagesToShow} 
            currentIndex={currentImageIndex} 
            onClose={handleClose} 
            onNext={handleNext} 
            onPrev={handlePrev} 
          />
        )}
      </AnimatePresence>
    </>
  );
}