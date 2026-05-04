import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const heroSlides = [
  { image: '/hero-pets-do-rock-1.png', alt: 'Pets Do Rock Collection 1' },
  { image: '/hero-pets-do-rock-2.png', alt: 'Pets Do Rock Collection 2' },
];

const collections = [
  { title: 'BESTSELLERS', description: 'Explore most popular products from each collection.', image: '/cat-posters.jpg' },
  { title: 'BOUNDLESS FORMS', description: 'Unleash creativity with abstract shapes and organic designs that defy boundaries.', image: '/card-boundless.jpg' },
  { title: 'ETHEREAL LAYERS', description: 'Discover multi-dimensional artworks that play with light, texture, and depth.', image: '/banner-minique.jpg' },
  { title: 'KEYCHAINS', description: 'Discover our versatile collection of keychains, ranging from playful designs to elegant styles.', image: '/cat-keychains.jpg' },
  { title: 'RUGS', description: 'Colorful modern rugs that anchor your space with artistic expression.', image: '/cat-rugs.jpg' },
  { title: 'POSTERS', description: 'Bold graphic art posters that transform any room into a curated gallery.', image: '/cat-posters.jpg' },
];

export default function PetsDoRockPage() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const i = setInterval(() => setCurrent(p => (p + 1) % heroSlides.length), 5000); return () => clearInterval(i); }, []);

  const goNext = () => setCurrent(p => (p + 1) % heroSlides.length);
  const goPrev = () => setCurrent(p => (p - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.querySelectorAll('.col-card').forEach((item, i) => { setTimeout(() => item.classList.add('animate-slide-up'), i * 150); }); observer.unobserve(entry.target); } });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* ====== Hero Carousel ====== */}
      <section className="relative w-full h-[50vh] min-h-[300px] md:h-screen md:min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, i) => (
            <img key={i} src={slide.image} alt={slide.alt} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`} />
          ))}
        </div>
        <button onClick={goPrev} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 hover:opacity-80 transition-opacity" aria-label="Previous">
          <img src="/arrow-left.png" alt="Previous" className="w-10 md:w-14 h-auto" />
        </button>
        <button onClick={goNext} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 hover:opacity-80 transition-opacity" aria-label="Next">
          <img src="/arrow-right.png" alt="Next" className="w-10 md:w-14 h-auto" />
        </button>
      </section>

      {/* ====== Title Section ====== */}
      <section className="px-4 md:px-8 lg:px-16 pt-4 md:pt-8 lg:pt-16 xl:pt-20 pb-20 md:pb-28 lg:pb-36 xl:pb-40 text-center">
        <h1 className="text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none">
          PETS DO ROCK
        </h1>
        <p className="text-base lg:text-2xl 2xl:text-4xl font-bold text-black leading-normal tracking-tight text-center md:max-w-[85%] lg:max-w-[75%] mt-8 md:mt-10 mx-auto">
          Owning a PETS ROCK piece means you hold a broad license to use the art associated with it for personal and commercial uses.
        </p>
      </section>

      {/* ====== Collections Grid ====== */}
      <main>
        <div ref={ref} className="pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collections.map((col, i) => (
              <a key={i} href="#/news" className="col-card opacity-0 relative h-[300px] md:h-[350px] lg:h-[450px] overflow-hidden group">
                <img src={col.image} alt={col.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight mb-3">{col.title}</h2>
                  <p className="text-sm text-white/80 max-w-[360px] mb-4">{col.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.05em] font-medium text-white relative">Shop collection <ArrowRight size={14} /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
