import { useState } from 'react';
import { SlidersHorizontal, Eye } from 'lucide-react';

const allProducts = [
  { id: 1, name: 'Blue Blink', price: 75.00, image: '/hero-bunny.jpg', category: 'Toys' },
  { id: 2, name: 'Blue Bloom Rug', price: 175.00, image: '/prod-rug.jpg', category: 'Rugs' },
  { id: 3, name: 'Blue Bolt', price: 145.00, image: '/hero-bunny.jpg', category: 'Toys' },
  { id: 4, name: 'Midnight Bunny', price: 100.00, image: '/prod-midnight.jpg', category: 'Toys' },
  { id: 5, name: 'Sunny Surfer Ghost', price: 35.00, image: '/prod-ghost.jpg', category: 'Toys' },
  { id: 6, name: 'Grid Buddy', price: 120.00, image: '/prod-grid.jpg', category: 'Toys' },
  { id: 7, name: 'Leap of Faith', price: 100.00, image: '/prod-leap.jpg', category: 'Toys' },
  { id: 8, name: 'Lunar Blink', price: 80.00, image: '/prod-hopper.jpg', category: 'Toys' },
  { id: 9, name: 'Retro Pet Gamer', price: 40.00, image: '/prod-ghost.jpg', category: 'Keychains' },
  { id: 10, name: 'Sunny X', price: 75.00, image: '/hero-yellow.jpg', category: 'Toys', salePrice: 100.00 },
  { id: 11, name: 'Pink Hopper', price: 90.00, image: '/prod-leap.jpg', category: 'Toys' },
  { id: 12, name: 'Urban Stride', price: 65.00, image: '/prod-midnight.jpg', category: 'Posters' },
];

const catList = ['All', 'Keychains', 'Rugs', 'Toys', 'Posters'];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Alphabetically, A-Z');

  const filtered = activeCategory === 'All' ? allProducts : allProducts.filter(p => p.category === activeCategory);
  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'Price, low to high': return a.price - b.price;
      case 'Price, high to low': return b.price - a.price;
      case 'Alphabetically, Z-A': return b.name.localeCompare(a.name);
      default: return a.name.localeCompare(b.name);
    }
  });

  return (
    <main className="pt-[100px]">
      <div className="px-4 md:px-8 lg:px-16 pb-6">
        <h1 className="text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[120px] font-black text-black uppercase tracking-tighter leading-none text-center">NEWSROOM</h1>
        <div className="flex items-center gap-6 mt-6 pb-4 overflow-x-auto">
          {catList.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-sm md:text-base uppercase tracking-wider font-semibold whitespace-nowrap transition-colors ${activeCategory === cat ? 'text-black' : 'text-brand-text-muted hover:text-black'}`}>{cat}</button>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
        <button className="flex items-center gap-2 text-sm font-medium"><SlidersHorizontal size={16} /> Filters +</button>
        <div className="flex items-center gap-4 text-sm text-brand-text-secondary">
          <span className="hidden md:inline">{sorted.length} products</span>
          <div className="flex items-center gap-2"><span>Sort by:</span>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="bg-transparent border border-brand-border rounded px-2 py-1 text-xs outline-none">
              {['Most relevant', 'Best selling', 'Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price, low to high', 'Price, high to low'].map(o => (<option key={o}>{o}</option>))}
            </select>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sorted.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-[#eeeeee] overflow-hidden mb-3">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {product.salePrice && <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] uppercase tracking-wider font-semibold px-2 py-1">Sale</span>}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"><button className="bg-white/90 text-black text-xs uppercase tracking-wider font-medium px-4 py-2 flex items-center gap-2"><Eye size={14} /> Quick View</button></div>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-brand-text-muted mb-1">Outsiders Wrong</p>
              <h3 className="text-sm font-semibold text-black">{product.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                {product.salePrice && <span className="text-sm text-brand-text-muted line-through">${product.salePrice.toFixed(2)}</span>}
                <span className="text-sm text-brand-text-secondary">${product.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
