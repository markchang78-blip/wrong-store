import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Eye, Sparkles, Shapes, Gem, Palette, Wand2 } from 'lucide-react';

const heroSlides = [
  { image: '/hero-yellow.jpg', alt: 'Pets Rock World 1' },
  { image: '/hero-doodles.jpg', alt: 'Pets Rock World 2' },
  { image: '/hero-shelf.jpg', alt: 'Pets Rock World 3' },
];

const topHeroSlides = [
  { src: '/hero-yellow.jpg', alt: 'Pets Rock World Hero 1' },
  { src: '/hero-doodles.jpg', alt: 'Pets Rock World Hero 2' },
];

const categories = [
  { title: 'APPAREL', description: 'Wear the movement. From graphic tees to statement hoodies, our apparel line brings PETS ROCK energy to your everyday style.', linkText: 'Shop Apparel', image: '/handbook-apparel.png', reverse: false },
  { title: 'COLLECTIBLES', description: 'Limited edition figures and art pieces for the serious collector. Each drop is a moment in PETS ROCK history.', linkText: 'Shop Collectibles', image: '/handbook-hero.png', reverse: true },
  { title: 'ACCESSORIES', description: 'Pins, patches, and everyday essentials that let you carry the PETS ROCK attitude with you everywhere.', linkText: 'Shop Accessories', image: '/handbook-pins.png', reverse: false },
  { title: 'HOME DECOR', description: 'Transform your space into a PETS ROCK gallery. Rugs, posters, and home goods that make a statement.', linkText: 'Shop Home', image: '/handbook-products.png', reverse: true },
];

const products = [
  { id: 1, name: 'Yellow Surfer', price: 75.00, image: '/hero-yellow.jpg' },
  { id: 2, name: 'Doodle Master', price: 45.00, image: '/hero-doodles.jpg' },
  { id: 3, name: 'Shelf King', price: 130.00, image: '/hero-shelf.jpg' },
  { id: 4, name: 'Bunny Hop', price: 60.00, image: '/hero-bunny.jpg' },
  { id: 5, name: 'Street Legend', price: 90.00, image: '/street-card.png' },
  { id: 6, name: 'The Real One', price: 110.00, image: '/banner-realones.jpg' },
];

const blogArticles = [
  { date: 'NOV 05 2024', author: 'BY PETS ROCK TEAM', title: 'Pets Rock World: A Global Movement Born From the Streets', excerpt: 'From humble beginnings to a worldwide phenomenon—discover how PETS ROCK WORLD became the voice of street pet culture.', image: '/hero-doodles.jpg' },
  { date: 'OCT 22 2024', author: 'BY ALEX TORRES', title: 'The Art of the Drop: How We Create Our Collections', excerpt: 'An inside look at the creative process behind every PETS ROCK WORLD collection, from sketch to storefront.', image: '/hero-shelf.jpg' },
  { date: 'OCT 08 2024', author: 'BY SAMIRA OKONKWO', title: 'Community Spotlight: Collectors Around the Globe', excerpt: 'Meet the passionate collectors who make up the PETS ROCK WORLD community—from Tokyo to São Paulo.', image: '/hero-yellow.jpg' },
];

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
          WORLD
        </h1>
      </div>
      <h2 className="text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none mt-8 md:mt-12">
        THE STREET IS OURS
      </h2>
      <p className="text-base lg:text-2xl 2xl:text-4xl font-bold text-black leading-normal tracking-tight text-center md:max-w-[85%] lg:max-w-[75%] mt-6">
        From the pavement to the penthouse. PETS ROCK WORLD is everywhere.
      </p>
    </section>
  );
}

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
          <div className="lg:hidden relative w-full flex items-center justify-center">
            <div className="absolute left-0 top-0 bottom-0 w-[6%] sm:w-[5%] overflow-hidden opacity-40 z-0">
              <img src={heroSlides[(current - 1 + heroSlides.length) % heroSlides.length].image} alt="" className="w-full h-full object-cover object-right" />
            </div>
            <button onClick={() => setCurrent(p => (p - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-[2%] sm:left-[3%] top-1/2 -translate-y-1/2 z-20 hover:opacity-80 transition-opacity" aria-label="Previous">
              <img src="/arrow-left.png" alt="Previous" className="w-10 h-auto" />
            </button>
            <div className={`relative w-[84%] sm:w-[78%] h-[580px] sm:h-[620px] z-10 mt-[30px] transition-all duration-[1000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-500 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <a href="#/news" className="block w-full h-full overflow-hidden">
                {heroSlides.map((slide, i) => (<img key={i} src={slide.image} alt={slide.alt} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ${i === current ? 'opacity-100' : 'opacity-0'}`} />))}
              </a>
              <img src="/frame-tl.png" alt="" className="absolute -top-6 -left-4 w-[80px] sm:w-[100px] h-auto pointer-events-none z-20" />
              <img src="/frame-tr.png" alt="" className="absolute -top-6 -right-4 w-[80px] sm:w-[100px] h-auto pointer-events-none z-20" />
              <img src="/frame-bl.png" alt="" className="absolute -bottom-6 -left-4 w-[80px] sm:w-[100px] h-auto pointer-events-none z-20" />
              <img src="/frame-br.png" alt="" className="absolute -bottom-6 -right-4 w-[80px] sm:w-[100px] h-auto pointer-events-none z-20" />
            </div>
            <button onClick={() => setCurrent(p => (p + 1) % heroSlides.length)} className="absolute right-[2%] sm:right-[3%] top-1/2 -translate-y-1/2 z-20 hover:opacity-80 transition-opacity" aria-label="Next">
              <img src="/arrow-right.png" alt="Next" className="w-10 h-auto" />
            </button>
            <div className="absolute right-0 top-0 bottom-0 w-[6%] sm:w-[5%] overflow-hidden opacity-40 z-0">
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
              <img src="/frame-tl.png" alt="" className="absolute -top-6 xl:-top-8 -left-6 xl:-left-8 w-[100px] xl:w-[120px] h-auto pointer-events-none z-20" />
              <img src="/frame-tr.png" alt="" className="absolute -top-6 xl:-top-8 -right-6 xl:-right-8 w-[100px] xl:w-[120px] h-auto pointer-events-none z-20" />
              <img src="/frame-bl.png" alt="" className="absolute -bottom-6 xl:-bottom-8 -left-6 xl:-left-8 w-[100px] xl:w-[120px] h-auto pointer-events-none z-20" />
              <img src="/frame-br.png" alt="" className="absolute -bottom-6 xl:-bottom-8 -right-6 xl:-right-8 w-[100px] xl:w-[120px] h-auto pointer-events-none z-20" />
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
    <section ref={ref} className="py-10 md:py-24">
      <div className="mb-10 md:mb-24 text-center">
        <h2 className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[90px] font-black text-[#C63B38] leading-[1.05] tracking-tight">
          The World Is Your Playground
        </h2>
      </div>
      <div className="flex flex-col gap-12 md:gap-16">
        {categories.map((cat, i) => (
          <section key={i} className="py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className={`cat-img relative w-full h-[372px] lg:h-[694px] transition-all duration-[1200ms] ease-out opacity-0 ${cat.reverse ? 'lg:order-2 translate-x-20 md:translate-x-12' : 'lg:order-1 -translate-x-20 md:-translate-x-12'}`}>
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
              </div>
              {/* Text */}
              <div className={`cat-text relative w-full flex flex-col justify-center p-8 lg:p-16 xl:p-20 gap-2 md:gap-4 xl:gap-7 transition-all duration-[1200ms] ease-out delay-200 opacity-0 ${cat.reverse ? 'lg:order-1 -translate-x-20 md:-translate-x-12' : 'lg:order-2 translate-x-20 md:translate-x-12'}`}>
                <h3 className="text-2xl md:text-3xl xl:text-5xl font-black text-black uppercase tracking-tighter leading-none">
                  {cat.title}
                </h3>
                <p className="text-sm md:text-lg xl:text-2xl font-normal text-muted-foreground leading-tight tracking-tight">
                  {cat.description}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

// ====== Marquee Banner ======
function MarqueeBanner() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/banner-minique.jpg)' }} /><div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <div className="animate-marquee-slow whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (<span key={i} className="text-[60px] md:text-[80px] font-extrabold text-white/30 uppercase tracking-tight mx-8">PETS ROCK WORLD</span>))}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white/85 backdrop-blur-sm w-[90%] max-w-[500px] p-8 md:p-12 text-center rounded-sm">
          <p className="text-sm md:text-base text-[#333] leading-relaxed">A global community united by love for pets and street culture. Welcome to the world we built together.</p>
          <a href="#/news" className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[0.05em] font-medium text-black group relative">Explore World <img src="/arrow-right-custom.png" alt="" className="w-4 h-4 object-contain" /></a>
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
      <div className="relative aspect-[3/2] bg-[#eeeeee] overflow-hidden mb-3 -mx-4 md:mx-0">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="bg-white/90 text-black text-xs uppercase tracking-wider font-medium px-4 py-2 flex items-center gap-2"><Eye size={14} /> Quick View</button>
        </div>
      </div>
      <h3 className="text-lg md:text-xl font-black text-black uppercase tracking-tighter leading-none">{product.name}</h3>
    </div>
  );
}

// ====== Product Grid ======
function ProductGrid() {
  return (
    <section id="products" className="py-24 md:py-32 px-4 md:px-8 lg:px-16" style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <div><h2 className="text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none mt-2">Global Favorites</h2></div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-6">
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
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/cat-authentic.jpg)' }} /><div className="absolute inset-0 bg-white/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="cta-anim opacity-0 text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none mb-4">THE STREET IS OURS</h2>
        <p className="cta-anim opacity-0 text-base lg:text-2xl 2xl:text-4xl font-bold text-black leading-normal tracking-tight max-w-[480px] mb-8">From the pavement to the penthouse. PETS ROCK WORLD is everywhere.</p>
        <a href="#/news" className="cta-anim opacity-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.05em] font-medium text-black group relative">Explore World <img src="/arrow-right-custom.png" alt="" className="w-4 h-4 object-contain" /></a>
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
      <div className="mb-10 md:mb-14">
        <h2 className="text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none">Curated Drops</h2>
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


// ====== Full Width Banner ======
function FullWidthBanner() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.querySelectorAll('.fw-anim').forEach((item, i) => { setTimeout(() => item.classList.add('animate-slide-up'), i * 80); }); observer.unobserve(entry.target); } }); }, { threshold: 0.3 }); if (ref.current) observer.observe(ref.current); return () => observer.disconnect(); }, []);

  return (
    <section ref={ref} className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/about-hero.jpg)' }} /><div className="absolute inset-0 bg-white/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="fw-anim opacity-0 text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none">PETS ROCK<br/>WORLDWIDE</h2>
        <p className="fw-anim opacity-0 text-base lg:text-2xl 2xl:text-4xl font-bold text-black leading-normal tracking-tight max-w-[480px] mt-6 mb-8">A movement that transcends borders. Art that speaks every language. Welcome to our world.</p>
        <a href="#/news" className="fw-anim opacity-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.05em] font-medium text-black group relative">Explore World <img src="/arrow-right-custom.png" alt="" className="w-4 h-4 object-contain" /></a>
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
      <div className="mb-10 md:mb-14">
        <h2 className="text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none">From the Globe</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {blogArticles.map((article, i) => (
          <article key={i} className="blog-card opacity-0 group cursor-pointer">
            <div className="aspect-[5/6] overflow-hidden -mx-4 md:mx-0 md:rounded-lg"><img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ====== Ticker ======
function Ticker() {
  const items = [
    { icon: Sparkles, title: 'WORLDWIDE SHIPPING', desc: 'We deliver PETS ROCK to every corner of the globe. No border can stop the movement.' },
    { icon: Shapes, title: 'EXCLUSIVE DROPS', desc: 'Limited releases that sell out fast. Join the community to get early access.' },
    { icon: Gem, title: 'COMMUNITY EVENTS', desc: 'Pop-ups, gallery shows, and meetups. The PETS ROCK WORLD comes alive offline.' },
    { icon: Palette, title: 'ARTIST COLLABS', desc: 'We partner with visionary artists to create one-of-a-kind pieces you won\'t find anywhere else.' },
    { icon: Wand2, title: 'MEMBER PERKS', desc: 'Early access, exclusive merch, and VIP experiences for our loyal community members.' },
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

// ====== Main Export ======
export default function PetsRockWorldPage() {
  return (
    <>
      <TopHero /><TitleSection /><Hero /><Categories /><MarqueeBanner /><ProductGrid /><CTASection /><CollectionShowcase />
      <FullWidthBanner /><BlogSection /><Ticker />
    </>
  );
}
