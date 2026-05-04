import { useState, useEffect, useRef, useCallback } from 'react';

// ====== Hero Slides (images) ======
const heroSlides = [
  { type: 'image' as const, src: '/hero-masterminds-1.png', alt: 'The Masterminds 1' },
  { type: 'image' as const, src: '/hero-masterminds-2.png', alt: 'The Masterminds 2' },
];

// ====== Left Text Right Image Section ======
const featureSection = {
  title: 'THE BRAINS BEHIND THE BRAND',
  description: 'The Masterminds are the creative visionaries and strategic architects who transformed PETS ROCK from a bold idea into a global cultural phenomenon. With decades of combined experience in art, fashion, and entertainment, they continue to push boundaries and redefine what it means to merge pet culture with street art.',
  image: '/handbook-hero.png',
};

// ====== Two additional Image+Text blocks ======
const contentBlocks = [
  {
    id: 'block-1',
    title: 'CREATIVE VISION',
    description: 'Every iconic PETS ROCK design begins with a spark of rebellion. Our creative leads blend urban street aesthetics with the undeniable charm of pets, crafting visuals that resonate across cultures and generations. From canvas to clothing, every piece tells a story of fearless creativity.',
    image: '/hero-doodles.jpg',
    reverse: true,
  },
  {
    id: 'block-2',
    title: 'GLOBAL STRATEGY',
    description: 'Building a worldwide movement requires more than great art—it demands vision, precision, and an unwavering commitment to community. The Masterminds orchestrate partnerships, collaborations, and experiences that bring PETS ROCK to every corner of the globe.',
    image: '/hero-shelf.jpg',
    reverse: false,
  },
];

export default function MastermindsPage() {
  const [current, setCurrent] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const goNext = useCallback(() => setCurrent(p => (p + 1) % heroSlides.length), []);
  const goPrev = useCallback(() => setCurrent(p => (p - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) sectionRefs.current.set(id, el);
  };

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* ====== 1. HERO CAROUSEL ====== */}
      <section className="relative w-full h-[50vh] min-h-[300px] md:h-screen md:min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={goPrev}
          className="absolute left-2 md:left-4 top-[180px] md:top-[270px] lg:top-[330px] xl:top-[360px] 2xl:top-[390px] -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Previous"
        >
          <img src="/arrow-left-custom.png" alt="Previous" className="w-full h-full object-contain" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 md:right-4 top-[180px] md:top-[270px] lg:top-[330px] xl:top-[360px] 2xl:top-[390px] -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Next"
        >
          <img src="/arrow-right-custom.png" alt="Next" className="w-full h-full object-contain" />
        </button>
      </section>

      {/* ====== 2. TITLE SECTION ====== */}
      <section className="px-4 md:px-8 lg:px-16 pt-12 md:pt-16 lg:pt-20 pb-16 flex flex-col items-center text-center">
        {/* Logo + Masterminds — same row */}
        <div className="flex items-center justify-center gap-4 md:gap-6 w-full">
          <img src="/pr1.png" alt="PETS ROCK" className="h-[60px] md:h-[80px] lg:h-[100px] w-auto flex-shrink-0" />
          <h1 className="text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none">
            MASTERMINDS
          </h1>
        </div>
        {/* Main title */}
        <h2 className="text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none mt-8 md:mt-12">
          THE VISIONARIES
        </h2>
        {/* Description */}
        <p className="text-base lg:text-2xl 2xl:text-4xl font-bold text-black leading-normal tracking-tight text-center md:max-w-[85%] lg:max-w-[75%] mt-6">
          Meet the architects behind the movement. The Masterminds are the driving force that turned PETS ROCK into a global street culture phenomenon.
        </p>
      </section>

      {/* ====== 3. THE VISION TITLE ====== */}
      <section className="px-4 md:px-8 lg:px-16 pt-12 md:pt-16 lg:pt-20 pb-5 md:pb-6 text-center">
        <h3 className="text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none">
          THE VISION
        </h3>
      </section>

      {/* ====== 4. LEFT TEXT RIGHT IMAGE (50/50 Grid) ====== */}
      <section
        id="feature-section"
        ref={setRef('feature-section')}
        className="py-10 md:py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className={`relative w-full h-[372px] lg:h-[694px] transition-all duration-[1200ms] ease-out ${isVisible('feature-section') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <img
              src={featureSection.image}
              alt={featureSection.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`relative w-full flex flex-col justify-center p-8 lg:p-16 xl:p-20 gap-2 md:gap-4 xl:gap-7 transition-all duration-[1200ms] ease-out delay-200 ${isVisible('feature-section') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-2xl md:text-3xl xl:text-5xl font-black text-black uppercase tracking-tighter leading-none">
              {featureSection.title}
            </h3>
            <p className="text-sm md:text-lg xl:text-2xl font-normal text-muted-foreground leading-tight tracking-tight">
              {featureSection.description}
            </p>
          </div>
        </div>
      </section>

      {/* ====== 5. TWO IMAGE+TEXT BLOCKS ====== */}
      {contentBlocks.map((block) => (
        <section
          key={block.id}
          id={block.id}
          ref={setRef(block.id)}
          className="py-10 md:py-16"
        >
          <div className={`grid grid-cols-1 lg:grid-cols-2 ${block.reverse ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image */}
            <div className={`relative w-full h-[372px] lg:h-[694px] transition-all duration-[1200ms] ease-out ${isVisible(block.id) ? 'opacity-100 translate-x-0' : `opacity-0 ${block.reverse ? 'translate-x-12' : '-translate-x-12'}`} ${block.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
              <img
                src={block.image}
                alt={block.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className={`relative w-full flex flex-col justify-center p-8 lg:p-16 xl:p-20 gap-2 md:gap-4 xl:gap-7 transition-all duration-[1200ms] ease-out delay-200 ${isVisible(block.id) ? 'opacity-100 translate-x-0' : `opacity-0 ${block.reverse ? '-translate-x-12' : 'translate-x-12'}`} ${block.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
              <h3 className="text-2xl md:text-3xl xl:text-5xl font-black text-black uppercase tracking-tighter leading-none">
                {block.title}
              </h3>
              <p className="text-sm md:text-lg xl:text-2xl font-normal text-muted-foreground leading-tight tracking-tight">
                {block.description}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* ====== 6. MARQUEE BANNER ====== */}
      <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/hero-yellow.jpg)' }} />
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
          <div className="animate-marquee-slow whitespace-nowrap flex">
            {[...Array(4)].map((_, i) => (<span key={i} className="text-[60px] md:text-[80px] font-extrabold text-white/30 uppercase tracking-tight mx-8">THE MASTERMINDS</span>))}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white/85 backdrop-blur-sm w-[90%] max-w-[500px] p-8 md:p-12 text-center">
            <p className="text-sm md:text-base text-[#333] leading-relaxed">Visionaries, creators, and strategists united by a singular mission: to make PETS ROCK a permanent fixture in global street culture.</p>
            <a href="#/news" className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[0.05em] font-medium text-black group relative">Explore World <img src="/arrow-right-custom.png" alt="" className="w-4 h-4 object-contain" /></a>
          </div>
        </div>
      </section>

      {/* ====== 7. CTA SECTION ====== */}
      <section className="relative w-full h-[400px] md:h-[500px] bg-white overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h2 className="font-extrabold text-black uppercase mb-4" style={{ fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: '-0.02em' }}>JOIN THE MOVEMENT</h2>
          <p className="text-sm md:text-base text-brand-text-secondary max-w-[480px] mb-8">Be part of the culture. Collect, create, and connect with PETS ROCK WORLD.</p>
          <a href="#/news" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.05em] font-medium text-black group relative">Explore World <img src="/arrow-right-custom.png" alt="" className="w-4 h-4 object-contain" /></a>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-8 md:h-16" />
    </div>
  );
}
