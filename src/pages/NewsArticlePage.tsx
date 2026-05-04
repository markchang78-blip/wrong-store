import { useState, useEffect, useRef } from 'react';

// ====== Article Content (Lead + Text + Images) ======
const articleSections = [
  {
    lead: "What's the name of your MBA project, and what is it?",
    text: "It's an art, design, and fashion-oriented house that bridges Web 2.0 and Web 3.0. It was brought to life by @Pausrr and is made for those who seek uniqueness.",
    image: '/news-article-1.png',
  },
  {
    lead: "Which Ape do you use for the license, and when did you acquire it?",
    text: "I'm using MAYC #14084, which I acquired at the end of February this year. It all started after an Uber ride with Grateful.eth, who convinced me to get into the Apes community. :-)",
    image: '/news-article-2.png',
  },
  {
    lead: "Has the project been something you have been wanting to start prior to MBA?",
    text: "Yes. I studied clothing design and have been a UI designer for over 15 years, but I always wanted to create fashion. I made my first collection of scarves and sold them as NFTs in 2021. Since then, I've produced small editions of silk fashion items. However, joining the Ape community and getting the MBA license gave my work new meaning and impact. Creating custom scarves with luxury materials and unique designs became my key focus, and now I feel like I'm on the path to fulfilling my dream. I want to take it to the next level by introducing new products.",
    image: '/news-article-3.png',
  },
  {
    lead: "How have MBA, the Apes, and the larger Web3 community helped your project and goals?",
    text: "The biggest benefit has been how quickly the community accepted me and how things have progressed. Securing the MBA license was crucial for me, as it allowed me to become part of something bigger alongside other creative Apes and businesses. Access to other subcommunities that inspire and support me has been incredible. It's the best form of networking I've ever experienced, and seeing others tackle similar challenges is very motivating.",
    image: '/news-article-4.png',
  },
  {
    lead: "What can people expect from your project in 2024?",
    text: "I just released a limited-edition silk scarf made especially for ApeFest, featuring a unique custom design inspired by Portuguese azulejo tiles. I'm also working on additional scarf designs that I hope to bring to ApeFest as well. My goal is to release new drops every two months. I'm planning to introduce completely new luxury products and am working on some secret collaborations that will be revealed soon. Over time, I intend to put all my art canvases on the blockchain, making them accessible to Web3 users. All of these products will be embedded with NFC chips by Wov Labs, providing proof of ownership.",
    image: '/news-article-5.png',
  },
  {
    lead: "How can Apes support you in 2024?",
    text: "It's not just about sales; I want to meet as many Apes as possible, get to know each other on a personal level, and learn about what everyone else is building. By supporting each other, our community will feel more like a family, and we can learn and grow together. My goal is to host more art exhibitions and fashion shows in Europe and the U.S., helping to spread the word about the Apes beyond our immediate circle. That's why I created a large Ape mural on the rooftop of the Community Center in Neubad Luzern. I want to create art that all Apes can be a part of.",
    image: null,
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

          {/* Article Content */}
          <div id="article" ref={setRef('article')} className="space-y-10">
            {articleSections.map((section, i) => (
              <div key={i}>
                {/* Lead / Heading */}
                <h3 className="text-lg md:text-xl font-bold text-black mb-4 leading-tight">
                  {section.lead}
                </h3>
                
                {/* Body Text */}
                <p className="text-sm md:text-base text-black leading-relaxed mb-6">
                  {section.text}
                </p>
                
                {/* Inline Image */}
                {section.image && (
                  <div className="relative w-screen left-1/2 -translate-x-1/2 md:w-full md:left-0 md:translate-x-0 overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.lead}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
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
                  width: '85%',
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
