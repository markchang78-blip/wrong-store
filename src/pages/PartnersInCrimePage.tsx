import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Eye, ChevronLeft, ChevronRight, Sparkles, Shapes, Gem, Palette, Wand2 } from 'lucide-react';

const heroSlides = [
  { image: '/banner-realones.jpg', alt: 'Partners In Crime 1' },
  { image: '/about-hero.jpg', alt: 'Partners In Crime 2' },
  { image: '/hero-bunny.jpg', alt: 'Partners In Crime 3' },
];

const topHeroSlides = [
  { src: '/hero-partners-1.png', alt: 'Partners In Crime Hero 1' },
  { src: '/hero-partners-2.png', alt: 'Partners In Crime Hero 2' },
];

const categories = [
  { title: 'TOYS', description: 'Rebellious, handcrafted figures born from street culture and pet attitude. Each piece is a statement of individuality, perfect for those who refuse to blend in.', linkText: 'Shop Toys', image: '/cat-toys.jpg', reverse: false },
  { title: 'KEYCHAINS', description: 'Street-inspired keychains that carry the PETS ROCK attitude wherever you go. Bold designs, premium materials, unmistakable swagger.', linkText: 'Shop Keychains', image: '/cat-keychains.jpg', reverse: true },
  { title: 'POSTERS', description: 'Underground art posters featuring iconic PETS ROCK characters. Screen-printed on heavyweight stock for true collectors.', linkText: 'Shop Posters', image: '/cat-posters.jpg', reverse: false },
  { title: 'RUGS', description: 'Statement rugs that transform floors into canvases. Hand-tufted designs that bring street art energy into your space.', linkText: 'Shop Rugs', image: '/cat-rugs.jpg', reverse: true },
];

const products = [
  { id: 1, name: 'Ghost Rebellion', price: 120.00, image: '/prod-ghost.jpg' },
  { id: 2, name: 'Grid Hopper', price: 95.00, image: '/prod-hopper.jpg' },
  { id: 3, name: 'Midnight Leap', price: 150.00, image: '/prod-leap.jpg' },
  { id: 4, name: 'Sunny Blink', price: 85.00, image: '/prod-grid.jpg' },
  { id: 5, name: 'Bunny Storm', price: 110.00, image: '/prod-midnight.jpg' },
  { id: 6, name: 'Rug Master', price: 200.00, image: '/prod-rug.jpg' },
];

const blogArticles = [
  { date: 'OCT 12 2024', author: 'BY PETS ROCK TEAM', title: 'Partners In Crime: The Story Behind the Movement', excerpt: 'How a group of street artists and pet lovers came together to create a cultural phenomenon that spans the globe.', image: '/blog-1.jpg' },
  { date: 'SEP 28 2024', author: 'BY LUNA CHEN', title: 'From the Streets to Your Home: The Art of PETS ROCK', excerpt: 'Explore the journey of our iconic characters from underground graffiti to collectible art pieces.', image: '/blog-2.jpg' },
  { date: 'SEP 15 2024', author: 'BY MARCUS RIVERA', title: 'Why Partners In Crime Is More Than a Collection', excerpt: 'Discover the philosophy behind our boldest line yet—where every piece tells a story of rebellion and friendship.', image: '/blog-3.jpg' },
];

// ====== Hero ======
function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);
  useEffect(() => { const i = setInterval(() => setCurrent(p => (p + 1) % heroSlides.length), 5000); return () => clearInterval(i); }, []);

  return (
    <>
      <section className="relative min-h-[calc(100vh-100px)] flex flex-col items-center justify-center overflow-hidden pt-0 pb-8 md:pb-16">
        <div className="relative z-10 w-full">
          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden relative w-full flex items-center justify-center" style={{ height: '520px' }}>
            <div className="absolute left-0 w-[6%] sm:w-[5%] h-full overflow-hidden opacity-40 z-0">
              <img src={heroSlides[(current - 1 + heroSlides.length) % heroSlides.length].image} alt="" className="w-full h-full object-cover object-right" />
            </div>
            <button onClick={() => setCurrent(p => (p - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-[2%] sm:left-[3%] top-1/2 -translate-y-1/2 z-20 hover:opacity-80 transition-opacity" aria-label="Previous">
              <img src="/arrow-left.png" alt="Previous" className="w-10 h-auto" />
            </button>
            <div className={`relative w-[84%] sm:w-[78%] h-[580px] sm:h-[620px] z-10 mt-[30px] transition-all duration-[1000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-500 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <a href="#/news" className="block w-full h-full overflow-hidden">
                {heroSlides.map((slide, i) => (<img key={i} src={slide.image} alt={slide.alt} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ${i === current ? 'opacity-100' : 'opacity-0'}`} />))}
              </a>
              <img src="/frame-tl.png" alt="" className="absolute -top-2 -left-2 w-[80px] sm:w-[100px] h-auto pointer-events-none z-20" />
              <img src="/frame-tr.png" alt="" className="absolute -top-2 -right-2 w-[80px] sm:w-[100px] h-auto pointer-events-none z-20" />
              <img src="/frame-bl.png" alt="" className="absolute -bottom-2 -left-2 w-[80px] sm:w-[100px] h-auto pointer-events-none z-20" />
              <img src="/frame-br.png" alt="" className="absolute -bottom-2 -right-2 w-[80px] sm:w-[100px] h-auto pointer-events-none z-20" />
            </div>
            <button onClick={() => setCurrent(p => (p + 1) % heroSlides.length)} className="absolute right-[2%] sm:right-[3%] top-1/2 -translate-y-1/2 z-20 hover:opacity-80 transition-opacity" aria-label="Next">
              <img src="/arrow-right.png" alt="Next" className="w-10 h-auto" />
            </button>
            <div className="absolute right-0 w-[6%] sm:w-[5%] h-full overflow-hidden opacity-40 z-0">
              <img src={heroSlides[(current + 1) % heroSlides.length].image} alt="" className="w-full h-full object-cover object-left" />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between w-full">
            <div className="w-[7%] xl:w-[8%] h-[420px] xl:h-[480px] overflow-hidden opacity-40 flex-shrink-0">
              <img src={heroSlides[(current - 1 + heroSlides.length) % heroSlides.length].image} alt="" className="w-full h-full object-cover object-right" />
            </div>
            <button onClick={() => setCurrent(p => (p - 1 + heroSlides.length) % heroSlides.length)} className="hover:opacity-60 transition-opacity mx-2 flex-shrink-0" aria-label="Previous">
              <img src="/arrow-left.png" alt="Previous" className="w-12 h-auto" />
            </button>
            <div className={`relative w-[600px] xl:w-[720px] h-[640px] xl:h-[740px] flex-shrink-0 mt-[30px] md:mt-[40px] transition-all duration-[1000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-500 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <a href="#/news" className="block w-full h-full overflow-hidden">
                {heroSlides.map((slide, i) => (<img key={i} src={slide.image} alt={slide.alt} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ${i === current ? 'opacity-100' : 'opacity-0'}`} />))}
              </a>
              <img src="/frame-tl.png" alt="" className="absolute -top-3 xl:-top-4 -left-3 xl:-left-4 w-[100px] xl:w-[120px] h-auto pointer-events-none z-20" />
              <img src="/frame-tr.png" alt="" className="absolute -top-3 xl:-top-4 -right-3 xl:-right-4 w-[100px] xl:w-[120px] h-auto pointer-events-none z-20" />
              <img src="/frame-bl.png" alt="" className="absolute -bottom-3 xl:-bottom-4 -left-3 xl:-left-4 w-[100px] xl:w-[120px] h-auto pointer-events-none z-20" />
              <img src="/frame-br.png" alt="" className="absolute -bottom-3 xl:-bottom-4 -right-3 xl:-right-4 w-[100px] xl:w-[120px] h-auto pointer-events-none z-20" />
            </div>
            <button onClick={() => setCurrent(p => (p + 1) % heroSlides.length)} className="hover:opacity-60 transition-opacity mx-2 flex-shrink-0" aria-label="Next">
              <img src="/arrow-right.png" alt="Next" className="w-12 h-auto" />
            </button>
            <div className="w-[7%] xl:w-[8%] h-[520px] xl:h-[620px] overflow-hidden opacity-40 flex-shrink-0">
              <img src={heroSlides[(current + 1) % heroSlides.length].image} alt="" className="w-full h-full object-cover object-left" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ====== Categories ======
function Categories() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.cat-img, .cat-text').forEach((item) => {
            item.classList.add('animate-cat-slide');
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-10 md:py-24 px-4 md:px-8 lg:px-16" style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div className="mb-10 md:mb-24 text-center">
        <h2 className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[90px] font-black text-[#C63B38] leading-[1.05] tracking-tight">
          Partners In Crime—Built For the Bold
        </h2>
      </div>
      <div className="flex flex-col gap-12 md:gap-16">
        {categories.map((cat, i) => (
          <div key={i} className={`cat-anim flex flex-col ${cat.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-12 items-center pb-12`}>
            <div className={`cat-img w-full md:w-[55%] overflow-hidden -mx-4 md:mx-0 md:rounded-lg opacity-0 transition-all duration-[1200ms] ease-out ${cat.reverse ? 'translate-x-20 md:translate-x-12' : '-translate-x-20 md:-translate-x-12'}`}>
              <img src={cat.image} alt={cat.title} className="w-full aspect-[5/6] object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            </div>
            <div className={`cat-text w-full md:w-[45%] flex flex-col items-center justify-center opacity-0 transition-all duration-[1200ms] ease-out ${cat.reverse ? '-translate-x-20 md:-translate-x-12' : 'translate-x-20 md:translate-x-12'}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-center">{cat.title}</h3>
              <p className="text-sm text-brand-text-secondary leading-relaxed max-w-[320px] mb-4 text-center">{cat.description}</p>
              <a href="#/news" className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.05em] font-medium group/link relative">{cat.linkText} <ArrowRight size={14} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ====== Marquee Banner ======
function MarqueeBanner() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/cat-rebellion.jpg)' }} /><div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <div className="animate-marquee-slow whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (<span key={i} className="text-[60px] md:text-[80px] font-extrabold text-white/30 uppercase tracking-tight mx-8">PARTNERS IN CRIME</span>))}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white/85 backdrop-blur-sm w-[90%] max-w-[500px] p-8 md:p-12 text-center rounded-sm">
          <p className="text-sm md:text-base text-[#333] leading-relaxed">A collection for those who push boundaries. Street art meets pet culture in our most rebellious line yet.</p>
          <a href="#/news" className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[0.05em] font-medium text-black group relative">Explore Collection <ArrowRight size={14} /></a>
        </div>
      </div>
    </section>
  );
}

// ====== Product Card ======
function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { setTimeout(() => entry.target.classList.add('animate-slide-up'), index * 100); observer.unobserve(entry.target); } }); }, { threshold: 0.1 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={cardRef} className="group cursor-pointer opacity-0">
      <div className="relative aspect-[5/6] bg-[#eeeeee] overflow-hidden mb-3 -mx-4 md:mx-0">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="bg-white/90 text-black text-xs uppercase tracking-wider font-medium px-4 py-2 flex items-center gap-2"><Eye size={14} /> Quick View</button>
        </div>
      </div>
      <h3 className="text-sm font-semibold text-black">{product.name}</h3>
      <p className="text-sm text-brand-text-secondary mt-1">${product.price.toFixed(2)}</p>
    </div>
  );
}

// ====== Product Grid ======
function ProductGrid() {
  return (
    <section id="products" className="py-24 md:py-32 px-4 md:px-8 lg:px-16" style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <div><span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-brand-purple">New Collection</span><h2 className="text-2xl md:text-4xl font-bold mt-2">Partners In Crime Picks</h2></div>
        <a href="#/news" className="hidden md:inline-flex items-center px-5 py-2.5 bg-black text-white text-xs uppercase tracking-wider font-medium hover:bg-white hover:text-black border border-black transition-colors">Shop All</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((p, i) => (<ProductCard key={p.id} product={p} index={i} />))}
      </div>
    </section>
  );
}

// ====== CTA Section ======
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.querySelectorAll('.cta-anim').forEach((item, i) => { setTimeout(() => item.classList.add('animate-slide-up'), i * 150); }); observer.unobserve(entry.target); } }); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/cat-defiant.jpg)' }} /><div className="absolute inset-0 bg-white/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="cta-anim opacity-0 font-extrabold text-black uppercase mb-4" style={{ fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: '-0.02em' }}>BUILT FOR THE BOLD</h2>
        <p className="cta-anim opacity-0 text-sm md:text-base text-brand-text-secondary max-w-[480px] mb-8">Street culture meets pet love. Explore the collection that started it all.</p>
        <a href="#/news" className="cta-anim opacity-0 inline-flex items-center px-8 py-4 bg-black text-white text-sm uppercase tracking-wider font-medium hover:bg-white hover:text-black border border-black transition-colors">Explore Partners In Crime</a>
      </div>
    </section>
  );
}

// ====== Collection Showcase ======
function CollectionShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.querySelectorAll('.cs-card').forEach((item, i) => { setTimeout(() => item.classList.add('animate-slide-up'), i * 200); }); observer.unobserve(entry.target); } }); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 md:px-8 lg:px-16" style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <div><span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-brand-purple">Featured</span><h2 className="text-2xl md:text-4xl font-bold mt-2">Crime Duos</h2></div>
        <div className="flex items-center gap-3">
          <a href="#/news" className="hidden md:inline-flex items-center px-5 py-2.5 bg-black text-white text-xs uppercase tracking-wider font-medium hover:bg-white hover:text-black border border-black transition-colors">Shop All</a>
          <div className="hidden md:flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition-colors"><ChevronLeft size={14} /></button>
            <button className="w-8 h-8 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition-colors"><ChevronRight size={14} /></button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {[{ title: 'BOUNDLESS FORMS', desc: 'Unleash creativity with abstract shapes and organic designs that defy boundaries.', image: '/card-boundless.jpg' }, { title: 'TOYS', desc: 'Explore our collection of finely crafted statuettes, each one a miniature work of art.', image: '/card-toys.jpg' }].map((col, i) => (
          <a key={i} href="#/news" className="cs-card opacity-0 relative aspect-[5/6] overflow-hidden -mx-4 md:mx-0 md:rounded-lg group">
            <img src={col.image} alt={col.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{col.title}</h3>
              <p className="text-sm text-white/80 max-w-[320px] mb-4">{col.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.05em] font-medium text-white">Shop collection <ArrowRight size={14} /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ====== Values Section ======
function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.querySelectorAll('.val-item').forEach((item, i) => { setTimeout(() => item.classList.add('animate-slide-up'), i * 100); }); observer.unobserve(entry.target); } }); }, { threshold: 0.2 }); if (ref.current) observer.observe(ref.current); return () => observer.disconnect(); }, []);

  return (
    <section ref={ref} id="values" className="py-24 md:py-32 px-4 md:px-8 lg:px-16" style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-brand-purple">Our Values</span>
        <h2 className="text-2xl md:text-4xl font-bold mt-2">REBELS WITH A CAUSE</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[{ title: 'COMMUNITY', content: 'At the heart of Partners In Crime is connection. A brotherhood of creators, collectors, and rebels who share a passion for street culture and pet art.' }, { title: 'ROOTS', content: 'Our journey started in the underground. Skate parks, graffiti walls, and late-night studios—this is where PETS ROCK was born.' }, { title: 'BRAND VISION', content: 'We don\'t follow trends. We set them. Every piece is a statement of individuality, crafted for those who dare to stand out.' }, { title: 'BEYOND BORDERS', content: 'From Tokyo to London, New York to São Paulo—our Partners In Crime movement spans the globe, uniting cultures through art.' }].map((val, i) => (
          <div key={i} className={`val-item opacity-0 border-l-2 pl-6 transition-all duration-400 cursor-pointer ${activeIndex === i ? 'border-brand-purple' : 'border-brand-border'}`} onMouseEnter={() => setActiveIndex(i)}>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 transition-colors duration-300 ${activeIndex === i ? 'text-brand-purple' : 'text-black'}`}>{val.title}</h3>
            <p className={`text-sm text-brand-text-secondary leading-relaxed transition-all duration-400 overflow-hidden ${activeIndex === i ? 'max-h-[200px] opacity-100' : 'max-h-0 md:max-h-[200px] opacity-0 md:opacity-100'}`}>{val.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ====== Full Width Banner ======
function FullWidthBanner() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.querySelectorAll('.fw-anim').forEach((item, i) => { setTimeout(() => item.classList.add('animate-slide-up'), i * 80); }); observer.unobserve(entry.target); } }); }, { threshold: 0.3 }); if (ref.current) observer.observe(ref.current); return () => observer.disconnect(); }, []);

  return (
    <section ref={ref} className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/banner-realones.jpg)' }} /><div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="fw-anim opacity-0 text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight">PARTNERS IN CRIME</h2>
        <h2 className="fw-anim opacity-0 text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight mt-2">COLLECTION</h2>
        <p className="fw-anim opacity-0 text-sm md:text-base text-white/90 max-w-[500px] mt-6 leading-relaxed">For those who never back down. Bold designs, fearless attitude, and a community that has your back.</p>
        <a href="#/news" className="fw-anim opacity-0 mt-8 inline-flex items-center px-6 py-3 bg-white text-black text-sm uppercase tracking-wider font-medium hover:bg-transparent hover:text-white border border-white transition-colors">Explore Collection</a>
      </div>
    </section>
  );
}

// ====== Blog Section ======
function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.querySelectorAll('.blog-card').forEach((item, i) => { setTimeout(() => item.classList.add('animate-slide-up'), i * 150); }); observer.unobserve(entry.target); } }); }, { threshold: 0.1 }); if (ref.current) observer.observe(ref.current); return () => observer.disconnect(); }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 md:px-8 lg:px-16" style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <div><span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-brand-purple">Stories</span><h2 className="text-2xl md:text-4xl font-bold mt-2">The Crew</h2></div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-1 text-xs uppercase tracking-[0.05em] font-medium group relative cursor-pointer">Read All Stories <ArrowRight size={14} /></span>
          <div className="hidden md:flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition-colors"><ChevronLeft size={14} /></button>
            <button className="w-8 h-8 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition-colors"><ChevronRight size={14} /></button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {blogArticles.map((article, i) => (
          <article key={i} className="blog-card opacity-0 group cursor-pointer">
            <div className="aspect-[5/6] overflow-hidden -mx-4 md:mx-0 md:rounded-lg mb-4"><img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-brand-text-muted mb-2"><span className="bg-black text-white px-2 py-0.5">{article.date}</span><span>{article.author}</span></div>
            <h3 className="text-lg font-semibold leading-snug mb-2 group-hover:text-brand-purple transition-colors">{article.title}</h3>
            <p className="text-sm text-brand-text-secondary line-clamp-2 mb-4">{article.excerpt}</p>
            <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.05em] font-medium relative">Read Story <ArrowRight size={14} /></span>
          </article>
        ))}
      </div>
    </section>
  );
}

// ====== Ticker ======
function Ticker() {
  const items = [
    { icon: Sparkles, title: 'ARTISANAL TOUCH', desc: 'Unique, handcrafted pieces from skilled artisans.' },
    { icon: Shapes, title: 'SCULPTURAL WONDERS', desc: 'Sculptures that push the boundaries of form and texture.' },
    { icon: Gem, title: 'HERITAGE CRAFTSMANSHIP', desc: 'Timeless pieces celebrating heritage techniques and artistry.' },
    { icon: Palette, title: 'MASTERFUL CREATIONS', desc: 'Handcrafted masterpieces with attention to detail and artistry.' },
    { icon: Wand2, title: 'BOUNDLESS IMAGINATION', desc: 'Art blending traditional techniques with modern aesthetics.' },
  ];
  const doubled = [...items, ...items];
  return (
    <section className="w-full bg-black text-white py-12 md:py-16 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => { const Icon = item.icon; return (<div key={i} className="flex items-start gap-4 mx-8 md:mx-12 min-w-[280px] md:min-w-[320px]"><div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0"><Icon size={20} className="text-white/70" /></div><div><h4 className="text-sm font-bold uppercase tracking-wider mb-1">{item.title}</h4><p className="text-xs text-brand-text-muted whitespace-normal max-w-[200px]">{item.desc}</p></div></div>); })}
      </div>
    </section>
  );
}

// ====== Top Hero Banner (new full-width carousel) ======
function TopHero() {
  const [current, setCurrent] = useState(0);
  useEffect(() => { const i = setInterval(() => setCurrent(p => (p + 1) % topHeroSlides.length), 5000); return () => clearInterval(i); }, []);
  const goPrev = () => setCurrent(p => (p - 1 + topHeroSlides.length) % topHeroSlides.length);
  const goNext = () => setCurrent(p => (p + 1) % topHeroSlides.length);

  return (
    <section className="relative w-full h-[50vh] min-h-[300px] md:h-screen md:min-h-[600px] overflow-hidden">
      {topHeroSlides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        />
      ))}
      <button onClick={goPrev} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 transition-transform" aria-label="Previous">
        <img src="/arrow-left-custom.png" alt="Previous" className="w-full h-full object-contain" />
      </button>
      <button onClick={goNext} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 transition-transform" aria-label="Next">
        <img src="/arrow-right-custom.png" alt="Next" className="w-full h-full object-contain" />
      </button>
    </section>
  );
}

// ====== Title Section ======
function TitleSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 pt-8 pb-12 flex flex-col items-center text-center">
      <div className="flex items-center justify-center gap-4 md:gap-6 w-full">
        <img src="/pr1.png" alt="PETS ROCK" className="h-[60px] md:h-[80px] lg:h-[100px] w-auto flex-shrink-0" />
        <h1 className="text-[10vw] md:text-[8vw] lg:text-[10vw] 2xl:text-[11vw] font-black text-black uppercase tracking-tighter leading-none">
          HANDBOOK
        </h1>
      </div>
      <h2 className="text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none mt-8 md:mt-12">
        PARTNERS IN CRIME
      </h2>
      <p className="text-base lg:text-2xl 2xl:text-4xl font-bold text-black leading-normal tracking-tight text-center md:max-w-[85%] lg:max-w-[75%] mt-6">
        A collection for those who push boundaries. Street art meets pet culture in our most rebellious line yet.
      </p>
    </section>
  );
}

// ====== Main Export ======
export default function PartnersInCrimePage() {
  return (
    <>
      <TopHero />
      <TitleSection />
      <Hero /><Categories /><MarqueeBanner /><ProductGrid /><CTASection /><CollectionShowcase />
      <ValuesSection /><FullWidthBanner /><BlogSection /><Ticker />
    </>
  );
}
