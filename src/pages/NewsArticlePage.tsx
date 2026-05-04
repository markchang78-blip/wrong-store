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
      <section className="px-4 md:px-8 lg:px-16 pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Date */}
          <p className="font-bold text-xs text-black mb-3">
            October 21, 2024
          </p>

          {/* Title */}
          <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl text-black uppercase tracking-tighter leading-none">
            THE BOOK OF REVERIE
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl font-bold text-black leading-tight mt-4">
            It's an art, design, and fashion-oriented house that bridges Web 2.0 and Web 3.0. It was brought to life by @Pausrr and is made for those who seek uniqueness.
          </p>

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

          {/* Social Share Buttons */}
          <div className="flex items-center gap-6 mt-10 md:mt-14">
            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-black"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-black"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            {/* Weibo */}
            <a href="https://weibo.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-black"><path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.24.239.09.315.36.194.573zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.64 4.318-.341 5.132-2.179.8-1.793-.201-3.642-2.161-4.149zm7.563-1.224c-.346-.105-.578-.18-.4-.649.388-1.032.428-1.923.008-2.558-.786-1.187-2.937-1.123-5.399-.033 0 0-.773.34-.576-.275.381-1.215.324-2.234-.27-2.821-1.35-1.33-4.945.045-8.025 3.07C1.019 10.729 0 13.347 0 15.569c0 4.247 5.443 6.832 10.766 6.832 6.976 0 11.613-4.053 11.613-7.272 0-1.943-1.64-3.045-3.32-3.48zm.617-5.404c.668.746.75 1.793.276 2.63-.139.24-.472.334-.715.206-.247-.128-.332-.432-.196-.68.292-.51.231-1.14-.194-1.54-.419-.397-1.05-.477-1.557-.232-.251.12-.544.008-.665-.244-.123-.253-.009-.547.242-.668.829-.396 1.812-.264 2.509.528zm1.582-1.758c1.295 1.449 1.455 3.472.536 5.093-.269.465-.869.629-1.334.359-.464-.27-.63-.87-.36-1.334.617-1.07.513-2.455-.358-3.427-.868-.97-2.238-1.18-3.353-.599-.396.206-.888.052-1.095-.344-.205-.397-.052-.888.344-1.095 1.642-.854 3.647-.56 4.96.347z"/></svg>
            </a>
            {/* X (Twitter) */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-black"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ====== 3. WHAT'S NEXT — 2-ITEM CAROUSEL WITH ARROWS ====== */}
      <section
        id="whats-next"
        ref={setRef('whats-next')}
        className="pt-20 md:pt-36 pb-8 md:pb-12"
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
