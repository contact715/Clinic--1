
import React, { useRef, useState, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt: string;
  afterAlt: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeSrc,
  afterSrc,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  beforeAlt,
  afterAlt,
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleTouchStart = () => {
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl aspect-[4/3] select-none cursor-col-resize"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Before image — full width behind */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        loading="lazy"
        width={800}
        height={600}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* After image — clipped to sliderPos% */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={afterSrc}
          alt={afterAlt}
          loading="lazy"
          width={800}
          height={600}
          className="absolute inset-0 h-full object-cover"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none">
          <ChevronsLeftRight size={18} className="text-[#1D1D1B]" />
        </div>
      </div>

      {/* BEFORE label */}
      <div className="absolute bottom-4 left-4 bg-[#1D1D1B]/80 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg pointer-events-none">
        {beforeLabel}
      </div>

      {/* AFTER label */}
      <div className="absolute bottom-4 right-4 bg-[#E30613] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg pointer-events-none">
        {afterLabel}
      </div>
    </div>
  );
};
