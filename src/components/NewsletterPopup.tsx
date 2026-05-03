import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('newsletter-dismissed');
    if (!dismissed) {
      const t = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem('newsletter-dismissed', 'true');
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[100] w-[340px] md:w-[380px] bg-white border border-brand-border rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden animate-slide-up">
      <div className="flex relative">
        <div className="w-[100px] min-h-[200px] bg-gradient-to-br from-pink-400 via-red-400 to-green-400 flex-shrink-0" />
        <div className="flex-1 p-5">
          <button onClick={dismiss} className="absolute top-3 right-3 p-1 hover:opacity-70 transition-opacity"><X size={14} /></button>
          <h3 className="text-lg font-bold uppercase tracking-wide mb-3 pr-4">Get 25% Off Your First Order</h3>
          <input type="email" placeholder="E-mail" className="w-full border-b border-brand-border pb-2 text-sm outline-none focus:border-black transition-colors mb-3" />
          <button className="w-full bg-black text-white text-xs uppercase tracking-wider font-medium py-3 hover:bg-black/90 transition-colors">Subscribe</button>
          <p className="text-[10px] text-brand-text-muted mt-2">By subscribing, you agree to our Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}
