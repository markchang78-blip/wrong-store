import { useState, useEffect, useRef } from 'react';
import { Sparkles, Shirt, KeyRound, ImageIcon, RectangleHorizontal, Gift, Music, Gamepad2, Home, Heart, Wrench, Star } from 'lucide-react';

// ====== Category Icons ======
const universeCategories = [
  { label: 'TOYS', icon: Sparkles },
  { label: 'APPAREL', icon: Shirt },
  { label: 'KEYCHAINS', icon: KeyRound },
  { label: 'POSTERS', icon: ImageIcon },
  { label: 'RUGS', icon: RectangleHorizontal },
  { label: 'ACCESSORIES', icon: Gift },
  { label: 'COLLECTIBLES', icon: Star },
  { label: 'ART', icon: ImageIcon },
  { label: 'MUSIC', icon: Music },
  { label: 'GAMING', icon: Gamepad2 },
  { label: 'HOME', icon: Home },
  { label: 'GIFTS', icon: Heart },
  { label: 'SERVICES', icon: Wrench },
  { label: 'OTHER', icon: Star },
];

// ====== Explore Cards ======
const exploreCards = [
  { label: 'TOYS', image: '/cat-toys.png' },
  { label: 'APPAREL', image: '/handbook-apparel.png' },
  { label: 'KEYCHAINS', image: '/cat-keychains.png' },
  { label: 'POSTERS', image: '/cat-posters.png' },
  { label: 'RUGS', image: '/cat-rugs.png' },
  { label: 'ACCESSORIES', image: '/handbook-pins.png' },
  { label: 'GAMES', image: '/handbook-products.png' },
  { label: 'COLLECTIBLES', image: '/handbook-hero.png' },
  { label: 'STORYTELLING', image: '/street-card.png' },
];

export default function TheUnlikelyEntertainmentPage() {
  const [heroCurrent, setHeroCurrent] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const heroSlides = [
    { src: '/hero-unlikely-entertainment.png', alt: 'The Unlikely Entertainment 1' },
    { src: '/hero-unlikely-entertainment-2.png', alt: 'The Unlikely Entertainment 2' },
  ];

  const goHeroNext = () => setHeroCurrent(p => (p + 1) % heroSlides.length);
  const goHeroPrev = () => setHeroCurrent(p => (p - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const timer = setInterval(() => setHeroCurrent(p => (p + 1) % heroSlides.length), 5000);
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
      {/* ====== HERO CAROUSEL ====== */}
      <section className="relative w-full h-[50vh] min-h-[300px] md:h-screen md:min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === heroCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}
        {/* Arrows */}
        <button
          onClick={goHeroPrev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Previous"
        >
          <img src="/arrow-left-custom.png" alt="Previous" className="w-full h-full object-contain" />
        </button>
        <button
          onClick={goHeroNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Next"
        >
          <img src="/arrow-right-custom.png" alt="Next" className="w-full h-full object-contain" />
        </button>
      </section>

      {/* ====== 1. HERO TITLE SECTION ====== */}
      <section className="px-4 md:px-8 lg:px-16 pt-8 pb-12 flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-4 md:gap-6 w-full">
          <img src="/pr1.png" alt="PETS ROCK" className="h-[60px] md:h-[80px] lg:h-[100px] w-auto flex-shrink-0" />
          <h1 className="text-[10vw] md:text-[8vw] lg:text-[10vw] 2xl:text-[11vw] font-black text-black uppercase tracking-tighter leading-none">
            HANDBOOK
          </h1>
        </div>
        <h2 className="text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none mt-8 md:mt-12">
          IP IS THE ALPHA
        </h2>
        <p className="text-base lg:text-2xl 2xl:text-4xl font-bold text-black leading-normal tracking-tight text-center md:max-w-[85%] lg:max-w-[75%] mt-6">
          Owning a PETS ROCK piece means you hold a broad license to use the art associated with it for personal and commercial uses.
        </p>
      </section>

      {/* ====== 2. MBA 2.0 ====== */}
      <section id="mba-20" ref={setRef('mba-20')} className="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className={`relative w-full h-[372px] lg:h-[694px] transition-all duration-[1200ms] ease-out ${isVisible('mba-20') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative w-full h-full">
              <div className="absolute -inset-3 border-[6px] border-black pointer-events-none z-10" />
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-black z-20" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-black z-20" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-black z-20" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-black z-20" />
              <img src="/handbook-hero.png" alt="MBA 2.0" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className={`relative w-full flex flex-col justify-center p-8 lg:p-16 xl:p-20 gap-2 md:gap-4 xl:gap-7 transition-all duration-[1200ms] ease-out delay-200 ${isVisible('mba-20') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-2xl md:text-3xl xl:text-5xl font-black text-black uppercase tracking-tighter leading-none">MBA 2.0</h3>
            <p className="text-sm md:text-lg xl:text-2xl font-normal text-muted-foreground leading-tight tracking-tight">
              MBA 2.0 has been rebuilt from the ground up on ApeChain to streamline the process of requesting a Made By Pets license and enable more robust identity management with Yuga ID. We&apos;ve also updated the terms of the program to give MBAs more flexibility in how they represent both their MBA license and the PETS ROCK NFTs associated with their products and services.
            </p>
          </div>
        </div>
      </section>

      {/* ====== 3. YOUR RIGHTS ====== */}
      <section id="your-rights" ref={setRef('your-rights')} className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto text-center">
          <h3 className="text-2xl md:text-3xl xl:text-5xl font-black text-black uppercase tracking-tighter mb-3 leading-none">YOUR RIGHTS IN A NUTSHELL</h3>
          <p className="text-sm md:text-xl xl:text-3xl text-muted-foreground leading-tight max-w-[700px] mx-auto mb-8">
            You can use the entire image of your NFT in commercial and personal projects, whether those projects create physical or digital goods or services like:
          </p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {universeCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div key={i} className={`flex flex-col items-center justify-center gap-2 bg-white p-4 border border-black/10 transition-all duration-[800ms] ease-out hover:border-black hover:shadow-md ${isVisible('your-rights') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 50}ms` }}>
                <Icon size={24} className="text-black" strokeWidth={2} />
                <span className="text-xs font-bold uppercase tracking-wider text-center leading-none">{cat.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ====== 4. PUT YOUR APES TO WORK ====== */}
      <section id="put-your-apes" ref={setRef('put-your-apes')} className="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className={`relative w-full h-[372px] lg:h-[694px] transition-all duration-[1200ms] ease-out ${isVisible('put-your-apes') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <img src="/handbook-products.png" alt="PUT YOUR APES TO WORK" className="w-full h-full object-cover" />
          </div>
          <div className={`relative w-full flex flex-col justify-center p-8 lg:p-16 xl:p-20 gap-2 md:gap-4 xl:gap-7 transition-all duration-[1200ms] ease-out delay-200 ${isVisible('put-your-apes') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-2xl md:text-3xl xl:text-5xl font-black text-black uppercase tracking-tighter leading-none">PUT YOUR APES TO WORK</h3>
            <p className="text-sm md:text-lg xl:text-2xl font-normal text-muted-foreground leading-tight tracking-tight">
              Made By Pets empowers holder-creators by verifying, supporting, and amplifying their projects that use PETS ROCK NFTs. The Made By Pets license allows a licensee/holder to leverage the PETS ROCK WORLD brand and sub-brands for their own commercial products and services.
            </p>
          </div>
        </div>
      </section>

      {/* ====== 5. ONE PROJECT, MULTIPLE APES ====== */}
      <section id="one-project" ref={setRef('one-project')} className="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className={`relative w-full flex flex-col justify-center p-8 lg:p-16 xl:p-20 gap-2 md:gap-4 xl:gap-7 transition-all duration-[1200ms] ease-out ${isVisible('one-project') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h3 className="text-2xl md:text-3xl xl:text-5xl font-black text-black uppercase tracking-tighter leading-none">ONE PROJECT,<br />MULTIPLE APES</h3>
            <p className="text-sm md:text-lg xl:text-2xl font-normal text-muted-foreground leading-tight tracking-tight">
              You need one primary license per project, but you can represent multiple pets by utilizing the license numbering system. The sublicensing of other pets and inclusion of PETS ROCK IP is the sole responsibility of the primary license holder.
            </p>
            <p className="text-sm md:text-lg xl:text-2xl font-normal text-muted-foreground leading-tight tracking-tight">
              There is no limit on the number of licenses a PETS ROCK token can request.
            </p>
          </div>
          <div className={`relative w-full h-[372px] lg:h-[694px] transition-all duration-[1200ms] ease-out delay-200 ${isVisible('one-project') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <img src="/handbook-apparel.png" alt="ONE PROJECT, MULTIPLE APES" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ====== 6. DISPLAYING LICENSE ====== */}
      <section id="displaying-license" ref={setRef('displaying-license')} className="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className={`relative w-full h-[372px] lg:h-[694px] transition-all duration-[1200ms] ease-out ${isVisible('displaying-license') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <img src="/handbook-pins.png" alt="DISPLAYING YOUR MADE BY APES LICENSE" className="w-full h-full object-cover" />
          </div>
          <div className={`relative w-full flex flex-col justify-center p-8 lg:p-16 xl:p-20 gap-2 md:gap-4 xl:gap-7 transition-all duration-[1200ms] ease-out delay-200 ${isVisible('displaying-license') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-2xl md:text-3xl xl:text-5xl font-black text-black uppercase tracking-tighter leading-none">DISPLAYING YOUR<br />MADE BY APES LICENSE</h3>
            <p className="text-sm md:text-lg xl:text-2xl font-normal text-muted-foreground leading-tight tracking-tight">
              Licensees can display their Made By Pets logo in their projects alongside the image of their PETS ROCK NFT.
            </p>
          </div>
        </div>
      </section>

      {/* ====== 7. EXPLORE ====== */}
      <section id="explore-cards" ref={setRef('explore-cards')} className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm md:text-base font-bold uppercase tracking-[0.15em] text-black/60 mb-2">EXPLORE</p>
            <h3 className="text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none">WHAT YOU CAN DO</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {exploreCards.map((card, i) => (
              <a key={i} href="#/news" className={`group relative aspect-[4/3] overflow-hidden transition-all duration-[800ms] ease-out hover:shadow-xl ${isVisible('explore-cards') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <img src={card.image} alt={card.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-end justify-start p-5">
                  <span className="text-white text-xl md:text-2xl font-black uppercase tracking-tight leading-none">{card.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="h-8 md:h-16" />
    </div>
  );
}
