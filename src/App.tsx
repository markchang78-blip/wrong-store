import { useState, useEffect } from 'react';
import DemoLayout from './components/DemoLayout';

function App() {
  const [page, setPage] = useState(() => {
    const hash = window.location.hash;
    // New canonical routes
    if (hash === '#/the-unlikely-entertainment') return 'the-unlikely-entertainment';
    if (hash === '#/pets-do-rock') return 'pets-do-rock';
    if (hash === '#/the-masterminds') return 'the-masterminds';
    if (hash === '#/partners-in-crime') return 'partners-in-crime';
    if (hash === '#/pets-rock-world') return 'pets-rock-world';
    if (hash === '#/pets-for-life') return 'pets-for-life';
    if (hash === '#/newsroom') return 'newsroom';
    // Legacy routes (preserved)
    if (hash === '#/news') return 'shop';
    if (hash === '#/newsroom') return 'newsroom';
    if (hash.startsWith('#/news/')) return 'news-article';
    if (hash === '#/pets-for-life') return 'pets-for-life';
    if (hash === '#/masterminds') return 'masterminds';
    if (hash === '#/collections') return 'collections';
    if (hash === '#/world') return 'world';
    if (hash === '#/street') return 'street';
    if (hash === '#/demo-featured') return 'demo-featured';
    if (hash === '#/home') return 'home';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      // New canonical routes
      if (hash === '#/the-unlikely-entertainment') setPage('the-unlikely-entertainment');
      else if (hash === '#/pets-do-rock') setPage('pets-do-rock');
      else if (hash === '#/the-masterminds') setPage('the-masterminds');
      else if (hash === '#/partners-in-crime') setPage('partners-in-crime');
      else if (hash === '#/pets-rock-world') setPage('pets-rock-world');
      else if (hash === '#/pets-for-life') setPage('pets-for-life');
      else if (hash === '#/newsroom') setPage('newsroom');
      // Legacy routes (preserved)
      else if (hash === '#/news') setPage('shop');
      else if (hash.startsWith('#/news/')) setPage('news-article');
      else if (hash === '#/masterminds') setPage('masterminds');
      else if (hash === '#/collections') setPage('collections');
      else if (hash === '#/world') setPage('world');
      else if (hash === '#/street') setPage('street');
      else if (hash === '#/demo-featured') setPage('demo-featured');
      else if (hash === '#/home') setPage('home');
      else setPage('home');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return <DemoLayout page={page} />;
}

export default App;
