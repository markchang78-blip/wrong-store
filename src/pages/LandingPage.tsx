import { useEffect, useRef } from 'react';
import { ArrowRight, Eye } from 'lucide-react';

// ====== Data ======
const categories = [
  { title: 'TOYS', description: 'Modern and creative figures that bring personality to your space, perfect for collectors or anyone looking to add a unique touch to their surroundings.', linkText: 'Shop Toys', image: '/cat-toys.jpg', reverse: false },
  { title: 'KEYCHAINS', description: 'Vibrant, playful keychains and charms that add personality to your everyday essentials. Each piece is designed with meticulous attention to detail.', linkText: 'Shop Keychains', image: '/cat-keychains.jpg', reverse: true },
  { title: 'POSTERS', description: 'Bold graphic art posters that transform any room into a curated gallery. Designed by emerging artists and printed on premium archival paper.', linkText: 'Shop Posters', image: '/cat-posters.jpg', reverse: false },
  { title: 'RUGS', description: 'Colorful modern rugs that anchor your space with artistic expression. Hand-tufted designs that blend contemporary art with functional home decor.', linkText: 'Shop Rugs', image: '/cat-rugs.jpg', reverse: true },
];

const products = [
  { id: 1, name: 'Midnight Bunny', price: 100.00, image: '/prod-midnight.jpg' },
  { id: 2, name: 'Sunny Surfer Ghost', price: 35.00, image: '/prod-ghost.jpg' },
  { id: 3, name: 'Blue Bloom Rug', price: 175.00, image: '/prod-rug.jpg' },
  { id: 4, name: 'Grid Buddy', price: 120.00, image: '/prod-grid.jpg' },
  { id: 5, name: 'Leap of Faith', price: 100.00, image: '/prod-leap.jpg' },
  { id: 6, name: 'Lunar Blink', price: 80.00, image: '/prod-hopper.jpg' },
];

// ====== Doodles Style Hero ======
function DoodlesHero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden">
      {/* Background Video - Full bleed, no gaps */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4"
      />

      {/* Subtle gradient at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f2f0eb] to-transparent" />
    </section>
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
    <section ref={ref} className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-[#f2f0eb]" style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div className="flex items-end justify-between mb-12 md:mb-16">
        <div><span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-brand-purple">Categories</span><h2 className="text-2xl md:text-4xl font-bold mt-2">SHOP BY CATEGORIES</h2></div>
      </div>
      <div className="flex flex-col gap-12 md:gap-16">
        {categories.map((cat, i) => (
          <div key={i} className={`cat-anim flex flex-col ${cat.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-12 items-center pb-12`}>
            <div className={`cat-img w-full md:w-[55%] overflow-hidden -mx-4 md:mx-0 md:rounded-lg opacity-0 transition-all duration-[1200ms] ease-out ${cat.reverse ? 'translate-x-20 md:translate-x-12' : '-translate-x-20 md:-translate-x-12'}`}>
              <img src={cat.image} alt={cat.title} className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            </div>
            <div className={`cat-text w-full md:w-[45%] flex flex-col justify-center opacity-0 transition-all duration-[1200ms] ease-out ${cat.reverse ? '-translate-x-20 md:-translate-x-12' : 'translate-x-20 md:translate-x-12'}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{cat.title}</h3>
              <p className="text-sm text-brand-text-secondary leading-relaxed max-w-[320px] mb-4">{cat.description}</p>
              <a href="#/news" className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.05em] font-medium group/link relative w-fit">{cat.linkText} <ArrowRight size={14} /></a>
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
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/banner-minique.jpg)' }} /><div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <div className="animate-marquee-slow whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (<span key={i} className="text-[60px] md:text-[80px] font-extrabold text-white/30 uppercase tracking-tight mx-8">OUTSIDERS X MINIQUE</span>))}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white/85 backdrop-blur-sm w-[90%] max-w-[500px] p-8 md:p-12 text-center rounded-sm">
          <p className="text-sm md:text-base text-[#333] leading-relaxed">Our latest collection of designer figurines is crafted to perfection. Limited edition and ready to be a part of your personal gallery.</p>
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
      <div className="relative aspect-[3/4] bg-[#eeeeee] overflow-hidden mb-3 -mx-4 md:mx-0">
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

// ====== Product Grid (New Collection / Creative Items) ======
function ProductGrid() {
  return (
    <section id="products" className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-[#f2f0eb]" style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <div><span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-brand-purple">New Collection</span><h2 className="text-2xl md:text-4xl font-bold mt-2">Creative Items</h2></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.slice(0, 4).map((p, i) => (<ProductCard key={p.id} product={p} index={i} />))}
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
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/cat-keychains.jpg)' }} /><div className="absolute inset-0 bg-white/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="cta-anim opacity-0 font-extrabold text-black uppercase mb-4" style={{ fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: '-0.02em' }}>ESSENTIALS WITH A BOLD TWIST</h2>
        <p className="cta-anim opacity-0 text-sm md:text-base text-brand-text-secondary max-w-[480px] mb-8">Brighten your day with modern designs that are as bold as you are.</p>
        <a href="#/news" className="cta-anim opacity-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.05em] font-medium text-black group relative">Explore World <img src="/arrow-right-custom.png" alt="" className="w-4 h-4 object-contain" /></a>
      </div>
    </section>
  );
}

// ====== Main Export ======
export default function LandingPage() {
  return (
    <>
      <DoodlesHero />
      <Categories />
      <MarqueeBanner />
      <ProductGrid />
      <CTASection />
    </>
  );
}
