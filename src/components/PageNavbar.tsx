import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { label: 'PETS ROCK WORLD', href: '#/street' },
  { label: 'NEWSROOM', href: '#/news' },
  { label: 'PETS DO ROCK', href: '#/collections' },
  { label: 'THE UNLIKELY ENTERTAINMENT', href: '#/world' },
  { label: 'PARTNERS IN CRIME', href: '#/home' },
];

export default function PageNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="relative z-50 bg-black h-[60px] flex items-center justify-between px-5 md:px-10">
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Menu"
          className="text-white p-2 hover:opacity-70 transition-opacity"
        >
          <Menu size={20} />
        </button>

        <a href="#/home" className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/petsrocologo-white.svg"
            alt="PETS ROCK"
            className="h-[36px] md:h-[42px] w-auto"
          />
        </a>

        <div className="w-8" />
      </nav>

      {/* Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-black text-white">
          <div className="absolute top-6 right-6 z-10">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white hover:opacity-60 transition-opacity p-2"
            >
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-row h-full">
            <div className="flex flex-col justify-center flex-1 pl-8 md:pl-16 pr-4">
              <nav className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[42px] md:text-[56px] font-black uppercase tracking-tight leading-none py-2 hover:opacity-60 transition-opacity"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="hidden md:flex w-[45%] h-full">
              <img
                src="/menu-banner.png"
                alt="PETS ROCK Collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
