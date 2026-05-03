import { useState, useEffect, useRef } from 'react';

// ====== Article Content ======
const articleContent = [
  {
    question: "What's the name of your MBA project and what is it?",
    answer: "The Book of Reverie is an illustrated series that takes place in our world and also Reverie's magical realm. It features characters built around our IP—Reverie, Atlas, and Brillo. The ongoing story creates a bridge between street culture, real-world activations, and physical goods in art, design, fashion, and toys.",
  },
  {
    question: "What pet character do you use for the license and when did you acquire it?",
    answer: "Brillo is our mascot #001 and he became part of the story almost exactly 1 year ago. When we first launched, I knew it was something I wanted to be a part of and spent considerable time looking at designs before I was able to secure my favorite character.",
  },
  {
    question: "Has the project been something you have been wanting to start prior? If so, how long and why did you think now was the right time to launch?",
    answer: "The Book of Reverie first began in March of 2022 with Reverie as the first character, and she was later joined by Atlas and Brillo. When we first launched, I knew it was something I wanted to be a part of and spent a considerable amount of time developing the brand identity before bringing the characters to life.",
  },
  {
    question: "How has the community helped your project and goals?",
    answer: "Immediately after getting started, we were welcomed by incredible supporters who were striving to create their visions for the future. Too many names to name, but there have been so many amazing people in the community that have been supporting The Book of Reverie from the very beginning and made all the difference to our creative journey.",
  },
  {
    question: "What can people expect from your project in the future?",
    answer: "So far this year, the Fourth Volume of The Book of Reverie has been released—it features over 20 illustrations, exclusive drops for community participants, the first Reverie pop-up shop in NYC, a worldwide clean-up event for Earth Day, a new manifesto, and a special limited edition jacket designed especially for our fans. There are always surprises and a bit of unexpected magic, so you never know what the rest of the year might hold!",
  },
];

// ====== Related Articles ======
const relatedArticles = [
  { title: 'PAUSER', date: 'October 21, 2024', image: '/news-card-3.png', link: '#/news' },
  { title: 'REAPER ART', date: 'October 18, 2024', image: '/news-card-2.png', link: '#/news' },
  { title: 'FOREVER APES APPAREL', date: 'October 15, 2024', image: '/news-card-4.png', link: '#/news' },
  { title: 'GEN CITY LABS', date: 'October 12, 2024', image: '/news-card-6.png', link: '#/news' },
  { title: 'THE HAPPY APE', date: 'October 10, 2024', image: '/news-card-5.png', link: '#/news' },
];

export default function NewsArticlePage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.52;
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
    <div className="min-h-screen bg-[#E5E3DF]">
      {/* ====== 1. FULL-WIDTH HERO IMAGE — TALLER ====== */}
      <section className="w-full">
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] overflow-hidden">
          <img
            src="/news-featured-1.png"
            alt="THE BOOK OF REVERIE"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ====== 2. ARTICLE CONTENT ====== */}
      <section className="px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Date */}
          <p className="font-bold text-xs text-black mb-3">
            October 21, 2024
          </p>

          {/* Title */}
          <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl text-black uppercase tracking-tighter leading-none">
            THE BOOK OF REVERIE
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 mt-4 mb-8">
            <div className="w-[38px] h-[38px] lg:w-[70px] lg:h-[70px] overflow-hidden">
              <img src="/prlogo.png" alt="PETS ROCK" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-sm font-bold text-black">Made By Pets</p>
              <p className="text-xs text-muted-foreground">5 min read</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[2px] bg-black mb-10" />

          {/* Q&A Content */}
          <div id="article" ref={setRef('article')} className="space-y-8">
            {articleContent.map((item, i) => (
              <div
                key={i}
                className={`transition-all duration-[800ms] ease-out ${isVisible('article') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="text-base md:text-lg font-bold text-black mb-3">
                  {item.question}
                </h3>
                <p className="text-sm md:text-base text-black leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 3. WHAT'S NEXT — 2-ITEM CAROUSEL WITH ARROWS ====== */}
      <section
        id="whats-next"
        ref={setRef('whats-next')}
        className="py-8 md:py-12"
      >
        <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none text-center mb-8">
            What's Next
          </h2>
        </div>

        {/* Carousel with arrows */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scrollCarousel('left')}
            className="absolute left-2 md:left-8 top-[100px] md:top-[150px] lg:top-[200px] xl:top-[220px] z-30 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <img src="/arrow-left-custom.png" alt="Previous" className="w-full h-full object-contain" />
          </button>
          {/* Right arrow */}
          <button
            onClick={() => scrollCarousel('right')}
            className="absolute right-2 md:right-8 top-[100px] md:top-[150px] lg:top-[200px] xl:top-[220px] z-30 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <img src="/arrow-right-custom.png" alt="Next" className="w-full h-full object-contain" />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 md:px-20 lg:px-24 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {relatedArticles.map((article, i) => (
              <a
                key={i}
                href={article.link}
                className={`group flex-shrink-0 snap-center transition-all duration-[800ms] ease-out ${isVisible('whats-next') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ 
                  transitionDelay: `${i * 100}ms`,
                  width: 'calc(50% - 8px)',
                }}
              >
                {/* Image */}
                <div className="relative h-[200px] md:h-[300px] lg:h-[400px] xl:h-[440px] overflow-hidden mb-3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Title only + Date */}
                <h3 className="text-sm font-bold text-black uppercase tracking-tight">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {article.date}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-8 md:h-16" />
    </div>
  );
}
