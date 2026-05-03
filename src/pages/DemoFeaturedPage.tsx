import { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const featuredItems = [
  { image: '/hero-bunny.jpg', title: 'Blue Bunny', subtitle: 'Limited Edition' },
  { image: '/hero-shelf.jpg', title: 'Collection Shelf', subtitle: 'New Arrival' },
  { image: '/hero-yellow.jpg', title: 'Yellow Surfer', subtitle: 'Best Seller' },
  { image: '/menu-banner.png', title: 'PETS ROCK', subtitle: 'Featured' },
  { image: '/menu-banner-desktop.png', title: 'Sid x Queen', subtitle: 'Collaboration' },
];

export default function DemoFeaturedPage() {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  // Auto slide
  useEffect(() => {
    const i = setInterval(() => {
      setCurrent(p => (p + 1) % featuredItems.length);
    }, 5000);
    return () => clearInterval(i);
  }, []);

  const goNext = () => setCurrent(p => (p + 1) % featuredItems.length);
  const goPrev = () => setCurrent(p => (p - 1 + featuredItems.length) % featuredItems.length);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff < -50) goNext();
    if (diff > 50) goPrev();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black h-[60px] flex items-center justify-center">
        <span className="text-white font-bold text-lg">DEMO — Featured Items Carousel</span>
      </div>

      {/* Section Title */}
      <section className="px-6 md:px-12 lg:px-20 pt-16 pb-8">
        <div className="flex items-end justify-between" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div>
            <span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-gray-400">New Collection</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">FEATURED ITEMS</h2>
            <p className="text-sm text-gray-500 mt-3 max-w-[400px]">Curated pieces from the latest drop, handpicked for the bold.</p>
          </div>
          <a href="#/news" className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.05em] font-medium group">
            View All <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* ====== CAROUSEL: All screens use same peek layout ====== */}
      <section
        className="pb-20 overflow-hidden"
        ref={sliderRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Mobile: full-width card with side peeks */}
        <div className="lg:hidden relative flex items-center justify-center w-full" style={{ height: '65vh' }}>
          {/* Left Peek */}
          <div className="absolute left-0 top-0 bottom-0 w-[8%] overflow-hidden opacity-40 z-0 rounded-r-xl">
            <img
              src={featuredItems[(current - 1 + featuredItems.length) % featuredItems.length].image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="absolute left-[5%] top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Main Card */}
          <div className="relative w-[76%] h-full overflow-hidden rounded-2xl z-10 shadow-lg">
            <img
              src={featuredItems[current].image}
              alt={featuredItems[current].title}
              className="w-full h-full object-cover"
            />
            {/* Title Overlay */}
            <div className="absolute top-8 left-8 right-8">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight drop-shadow-lg">
                {featuredItems[current].title}
              </h3>
            </div>
            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <p className="text-sm text-white/80">{featuredItems[current].subtitle}</p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="absolute right-[5%] top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          {/* Right Peek */}
          <div className="absolute right-0 top-0 bottom-0 w-[8%] overflow-hidden opacity-40 z-0 rounded-l-xl">
            <img
              src={featuredItems[(current + 1) % featuredItems.length].image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop: larger card with side peeks — same logic as mobile */}
        <div className="hidden lg:flex relative items-center justify-center w-full" style={{ height: '75vh' }}>
          {/* Left Peek */}
          <div className="absolute left-0 top-0 bottom-0 w-[18%] xl:w-[20%] overflow-hidden opacity-40 z-0 rounded-r-2xl">
            <img
              src={featuredItems[(current - 1 + featuredItems.length) % featuredItems.length].image}
              alt=""
              className="w-full h-full object-cover object-right"
            />
          </div>

          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="absolute left-[16%] xl:left-[18%] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Main Card — 9:16 ratio */}
          <div className="relative h-full overflow-hidden rounded-2xl z-10 shadow-xl" style={{ width: 'auto', aspectRatio: '9/16', maxHeight: '75vh' }}>
            <img
              src={featuredItems[current].image}
              alt={featuredItems[current].title}
              className="w-full h-full object-cover"
            />
            {/* Title Overlay */}
            <div className="absolute top-10 left-10 right-10">
              <h3 className="text-4xl xl:text-5xl font-black text-white uppercase tracking-tight drop-shadow-lg leading-tight">
                {featuredItems[current].title}
              </h3>
            </div>
            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <p className="text-base text-white/80">{featuredItems[current].subtitle}</p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="absolute right-[16%] xl:right-[18%] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shadow-lg"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          {/* Right Peek */}
          <div className="absolute right-0 top-0 bottom-0 w-[18%] xl:w-[20%] overflow-hidden opacity-40 z-0 rounded-l-2xl">
            <img
              src={featuredItems[(current + 1) % featuredItems.length].image}
              alt=""
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {featuredItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? 'w-8 h-2 bg-black' : 'w-2 h-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-3 lg:hidden">Swipe to explore</p>
      </section>

      {/* Footer Note */}
      <div className="text-center py-12 border-t border-gray-100">
        <p className="text-xs text-gray-400 uppercase tracking-wider">Demo Layout — Compare with Current Hero</p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <a href="#/street" className="text-sm text-black underline">Back to Pets Rock World</a>
          <span className="text-gray-300">|</span>
          <a href="#/home" className="text-sm text-black underline">Partners In Crime</a>
        </div>
      </div>
    </div>
  );
}
