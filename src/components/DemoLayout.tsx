import { useState, useEffect } from 'react';
import { Menu, ArrowRight } from 'lucide-react';
import NewsletterPopup from './NewsletterPopup';
import LandingPage from '../pages/LandingPage';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import CollectionsPage from '../pages/CollectionsPage';
import AboutPage from '../pages/AboutPage';
import DemoFeaturedPage from '../pages/DemoFeaturedPage';
import NewsroomPage from '../pages/NewsroomPage';
import NewsArticlePage from '../pages/NewsArticlePage';
import PetsForLifePage from '../pages/PetsForLifePage';
import MastermindsPage from '../pages/MastermindsPage';

function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 1, hours: 20, minutes: 59, seconds: 33 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 1; hours = 20; minutes = 59; seconds = 59; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#C63B38] text-white h-10 flex items-center justify-between px-4 md:px-8 text-[11px] md:text-xs uppercase tracking-wider z-50 relative">
      <span className="tabular-nums whitespace-nowrap">{String(timeLeft.days).padStart(2, '0')} D : {String(timeLeft.hours).padStart(2, '0')} HRS : {String(timeLeft.minutes).padStart(2, '0')} MIN : {String(timeLeft.seconds).padStart(2, '0')} SEC</span>
      <span className="absolute left-1/2 -translate-x-1/2 hidden md:inline whitespace-nowrap">Up to 50% Off: Unbeatable Sale</span>
      <a href="#/news" className="underline hover:no-underline text-white whitespace-nowrap">Explore Collection <ArrowRight size={12} className="inline ml-1" /></a>
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // isHome check removed — navbar now always sticky

  const menuLinks = [
    { href: '#/world', label: 'The Unlikely Entertainment' },
    { href: '#/collections', label: 'Pets Do Rock' },
    { href: '#/masterminds', label: 'The Masterminds' },
    { href: '#/home', label: 'Partners In Crime' },
    { href: '#/street', label: 'Pets Rock World' },
    { href: '#/pets-for-life', label: 'Pets For Life' },
    { href: '#/newsroom', label: 'Newsroom' },
  ];

  return (
    <>
      {/* Sticky Header — countdown + navbar, always on top */}
      <header className="sticky top-0 z-40">
        <CountdownBanner />
        <nav className="h-[60px] flex items-center justify-between bg-black text-white" style={{ padding: '0 clamp(20px, 4vw, 80px)' }}>
        {/* Hamburger — always visible, matches logo height */}
        <button className="flex items-center justify-center text-white p-0" onClick={() => setMobileOpen(true)} aria-label="Menu">
          <Menu className="w-9 h-9 md:w-[42px] md:h-[42px]" strokeWidth={3} />
        </button>

        {/* Logo — centered */}
        <a href="#/home" className="absolute left-1/2 -translate-x-1/2">
          <img src="/petsrocologo-white.svg" alt="PETS ROCK" className="h-[36px] md:h-[42px] w-auto" />
        </a>

        {/* Right side — empty spacer matching hamburger size */}
        <div className="w-9 md:w-[42px]" />
      </nav>
      </header>

      {/* Fullscreen Menu — covers entire viewport including navbar */}
      {mobileOpen && (
        <div className="bg-[#C63B38] text-white overflow-y-auto" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}>
          {/* Close button — top right */}
          <div className="flex justify-end px-5 pt-5 md:px-8 md:pt-8">
            <button onClick={() => setMobileOpen(false)} aria-label="Close" className="text-white p-1">
              <img src="/close-x.png" alt="Close" className="w-12 h-auto md:w-14" />
            </button>
          </div>

          {/* Mobile layout: stacked links above image */}
          <div className="flex flex-col md:hidden px-5 pt-4 pb-10">
            <nav className="flex flex-col pb-4">
              {menuLinks.map((link, index) => (
                <a key={`${link.href}-${index}`} href={link.href} onClick={() => setMobileOpen(false)} className="text-[38px] font-black tracking-tight leading-[1.05] py-[2px]">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="w-full overflow-hidden rounded-sm">
              <img src="/menu-banner.png" alt="PETS ROCK Collection" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Desktop layout: left text + right image side by side */}
          <div className="hidden md:flex flex-row items-center justify-between px-8 lg:px-16 pt-6 pb-12 gap-8" style={{ minHeight: 'calc(100vh - 80px)' }}>
            {/* Left: menu links */}
            <nav className="flex flex-col flex-shrink-0 py-0">
              {menuLinks.map((link, index) => (
                <a key={`${link.href}-${index}`} href={link.href} onClick={() => setMobileOpen(false)} className="text-[42px] lg:text-[48px] font-black tracking-tight leading-[1.05] py-[2px] hover:opacity-70 transition-opacity">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: banner image - desktop uses landscape version */}
            <div className="flex-1 flex items-center justify-end max-w-[60%] h-full">
              <div className="overflow-hidden rounded-sm w-full">
                <img src="/menu-banner-desktop.png" alt="PETS ROCK Collection" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white w-full">
      <div className="relative flex flex-col items-center justify-center px-5 py-16 md:py-20 pb-[60px] md:pb-[80px]" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Combined graffiti + logo image */}
        <div className="w-full max-w-[500px] md:max-w-[700px]">
          <img
            src="/footer-combined.png"
            alt="THE STREET IS OURS - PETS ROCK"
            className="w-full h-auto"
          />
        </div>
        {/* Copyright — fixed 20px from bottom */}
        <p className="absolute bottom-[20px] text-[11px] font-normal uppercase tracking-[0.08em] text-white/50" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>© PETS ROCK WORLD. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default function DemoLayout({ page }: { page: string }) {
  const renderPage = () => {
    switch (page) {
      case 'news': return <ShopPage />;
      case 'newsroom': return <NewsroomPage />;
      case 'news-article': return <NewsArticlePage />;
      case 'pets-for-life': return <PetsForLifePage />;
      case 'masterminds': return <MastermindsPage />;
      case 'collections': return <CollectionsPage />;
      case 'world': return <AboutPage />;
      case 'street': return <HomePage />;
      case 'demo-featured': return <DemoFeaturedPage />;
      default: return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg grain-overlay">
      <Navbar />
      <main>{renderPage()}</main>
      <Footer />
      <NewsletterPopup />
    </div>
  );
}
