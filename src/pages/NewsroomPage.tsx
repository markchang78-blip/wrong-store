import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

// ====== Featured Stories ======
const featuredStories = [
  {
    title: 'THE BOOK OF REVERIE',
    subtitle: 'Featuring Maggie Dylan (Founder) Made By Apes #00187',
    image: '/news-featured-1.png',
    link: '#/news/slug-reverie',
  },
  {
    title: 'PAUSER',
    subtitle: 'Featuring Pauser (Founder) Made By Apes #00452',
    image: '/news-featured-2.png',
    link: '#/news',
  },
];

// ====== News Cards ======
const newsCards = [
  {
    date: 'October 21, 2024',
    title: 'THE BOOK OF REVERIE',
    subtitle: 'Featuring Maggie Dylan (Founder) Made By Apes #00187',
    image: '/news-card-1.png',
    link: '#/news/slug-reverie',
  },
  {
    date: 'October 21, 2024',
    title: 'REAPER ART',
    subtitle: 'Featuring Reaper (Founder) Made By Apes #00135',
    image: '/news-card-2.png',
    link: '#/news',
  },
  {
    date: 'October 21, 2024',
    title: 'PAUSER',
    subtitle: 'Featuring Pauser (Founder) Made By Apes #00452',
    image: '/news-card-3.png',
    link: '#/news',
  },
  {
    date: 'October 21, 2024',
    title: 'FOREVER APES APPAREL',
    subtitle: 'Featuring Brazy (Founder) Made By Apes #00008',
    image: '/news-card-4.png',
    link: '#/news',
  },
  {
    date: 'October 21, 2024',
    title: 'THE HAPPY APE',
    subtitle: 'Featuring 0xBoredDev (Founder) Made By Apes #00394',
    image: '/news-card-5.png',
    link: '#/news',
  },
  {
    date: 'October 21, 2024',
    title: 'GEN CITY LABS',
    subtitle: 'Featuring Shaman (Founder) Made By Apes #00012',
    image: '/news-card-6.png',
    link: '#/news',
  },
];

export default function NewsroomPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.85;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
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
      {/* ====== HERO + FEATURED 统一容器 ====== */}
      <div className="flex flex-col py-4 md:py-8 gap-6 lg:gap-12">
        {/* HERO TITLE */}
        <div className="text-center px-6 lg:p-0">
          <h1 className="font-black tracking-tighter text-[36px] md:text-[58px] lg:text-[82px] xl:text-[105px] leading-none uppercase">
            From the Bodega
          </h1>
        </div>

        {/* FEATURED STORIES */}
        <section
          id="featured"
          ref={setRef('featured')}
          className="w-screen flex flex-col gap-8"
        >
        <h2 className="text-center font-black text-base md:text-lg xl:text-xl tracking-tighter leading-none uppercase px-6 md:px-0 mx-auto">
          FEATURED STORIES
        </h2>

        {/* Horizontal scroll carousel */}
        <div className="relative">
          {/* Left arrow — positioned at image center */}
          <button
            onClick={() => scrollCarousel('left')}
            className="absolute left-2 md:left-4 top-[150px] md:top-[200px] lg:top-[250px] xl:top-[275px] 2xl:top-[300px] -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <img src="/arrow-left-custom.png" alt="Previous" className="w-full h-full object-contain" />
          </button>
          {/* Right arrow — positioned at image center */}
          <button
            onClick={() => scrollCarousel('right')}
            className="absolute right-2 md:right-4 top-[150px] md:top-[200px] lg:top-[250px] xl:top-[275px] 2xl:top-[300px] -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <img src="/arrow-right-custom.png" alt="Next" className="w-full h-full object-contain" />
          </button>
          <div ref={carouselRef} className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {featuredStories.map((story, i) => (
              <a
                key={i}
                href={story.link}
                className={`group flex-shrink-0 snap-center transition-all duration-[800ms] ease-out ${isVisible('featured') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ 
                  transitionDelay: `${i * 150}ms`,
                  width: 'min(85vw, 1100px)',
                }}
              >
                {/* Image — large rectangle */}
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] overflow-hidden mb-4">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col items-start px-4 md:px-6 lg:px-8 gap-2 md:gap-3 lg:gap-4">
                  <div className="relative w-[70px] h-[18px] lg:w-[100px] lg:h-[26px]">
                    <img src="/prlogo.png" alt="" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-extrabold text-lg lg:text-2xl xl:text-[40px] tracking-tight leading-none line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground text-base font-normal lg:text-lg xl:text-2xl leading-tight line-clamp-2">
                    {story.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#C63B38] transition-colors mt-2 md:mt-4 cursor-pointer">
                    Read More <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* ====== 3. STORIES, NEWS AND SERIES ====== */}
      <section className="w-full flex flex-col justify-center items-center gap-3 py-8 md:py-12">
        <h2 className="text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none text-center">
          STORIES, NEWS AND SERIES
        </h2>
      </section>

      {/* ====== 4. NEWS CARDS GRID ====== */}
      <section
        id="news-grid"
        ref={setRef('news-grid')}
        className="md:px-16 lg:px-0 pb-8 md:pb-12"
      >
        <div className="grid w-full lg:grid-cols-2 gap-6 md:gap-10 2xl:gap-14">
          {newsCards.map((card, i) => (
            <a
              key={i}
              href={card.link}
              className={`group block transition-all duration-[800ms] ease-out ${isVisible('news-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-[200px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] overflow-hidden mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Text —统一 padding 和间距 */}
              <div className="flex flex-col items-start px-4 md:px-6 lg:px-8 pt-4 lg:pt-7 gap-2 md:gap-3 lg:gap-4">
                <div className="relative w-[70px] h-[18px] lg:w-[100px] lg:h-[26px]">
                  <img src="/prlogo.png" alt="" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-extrabold text-lg lg:text-2xl xl:text-[40px] tracking-tight leading-none line-clamp-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-base font-normal lg:text-lg xl:text-2xl leading-tight line-clamp-2">
                  {card.subtitle}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#C63B38] transition-colors mt-2 md:mt-4">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ====== 5. PAGINATION ====== */}
      <section className="px-4 md:px-8 lg:px-16 py-6 md:py-8">
        <div className="flex items-center justify-center gap-4">
          <button className="text-[13px] font-bold uppercase tracking-wider text-black/40 hover:text-black transition-colors">
            Previous
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-black text-white text-[14px] font-bold rounded-full">
            1
          </button>
          <button className="text-[13px] font-bold uppercase tracking-wider text-black/40 hover:text-black transition-colors">
            Next
          </button>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-8 md:h-16" />
    </div>
  );
}
