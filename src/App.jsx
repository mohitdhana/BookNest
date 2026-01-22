import React, { useState, useMemo } from 'react';
import { 
  BookOpen, Search, Moon, Sun, ShoppingBag, 
  Star, ExternalLink, X, Heart, Filter, 
  ChevronRight, Bookmark
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Enhanced Dataset ---
const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "fiction",
    rating: 4.5,
    reviews: 12034,
    description: "Between life and death there is a library, and within that library, the shelves go on forever.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    amazonLink: "#"
  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: "Andy Weir",
    genre: "sci-fi",
    rating: 4.7,
    reviews: 8921,
    description: "A lone astronaut must save the earth from disaster in this science-based thriller.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    amazonLink: "#"
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "non-fiction",
    rating: 4.8,
    reviews: 15678,
    description: "Tiny Changes, Remarkable Results. A proven framework for improving every day.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop",
    amazonLink: "#"
  },
  {
    id: 4,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "mystery",
    rating: 4.3,
    reviews: 23456,
    description: "A psychological thriller about a woman who shoots her husband and then stops speaking.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    amazonLink: "#"
  },
  {
    id: 5,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: "fantasy",
    rating: 4.9,
    reviews: 34567,
    description: "The story of Kvothe, from his childhood to becoming the most notorious wizard.",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
    amazonLink: "#"
  },
  {
    id: 6,
    title: "Educated",
    author: "Tara Westover",
    genre: "biography",
    rating: 4.8,
    reviews: 45678,
    description: "A memoir about a young girl who leaves her survivalist family and earns a PhD.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop",
    amazonLink: "#"
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "fiction",
    rating: 4.7,
    reviews: 98450,
    description: "A fable about following your dream, following the paths of Santiago.",
    price: 13.50,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
    amazonLink: "#"
  },
  {
    id: 8,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "non-fiction",
    rating: 4.6,
    reviews: 21340,
    description: "A deep dive into the two systems that drive the way we think.",
    price: 15.25,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
    amazonLink: "#"
  }
];

const BookNestPage = () => {
  const [activeGenre, setActiveGenre] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [readingList, setReadingList] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const genres = ['all', 'fiction', 'non-fiction', 'fantasy', 'sci-fi', 'mystery', 'biography'];

  // --- Search & Filter Logic (useMemo for Performance) ---
  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesGenre = activeGenre === 'all' || book.genre === activeGenre;
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            book.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGenre && matchesSearch;
    });
  }, [activeGenre, searchQuery]);

  const toggleReadingList = (book) => {
    setReadingList(prev => 
      prev.find(item => item.id === book.id) 
        ? prev.filter(item => item.id !== book.id)
        : [...prev, book]
    );
  };

  return (
    <div className={`${isDarkMode ? 'dark bg-slate-900' : 'bg-white'} min-h-screen transition-colors duration-300 font-sans`}>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              BOOK<span className="text-blue-600">NEST</span>
            </h1>
          </div>

    
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-8"
          >
            <div className="max-w-xl">
              <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                Your next <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">great story</span> is waiting.
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                Explore a hand-picked library of bestsellers and hidden gems.
              </p>
            </div>

            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text"
                placeholder="Search by title or author..."
                className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-3">
            {genres.map(genre => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`px-6 py-2 rounded-xl text-sm font-semibold capitalize transition-all border ${
                  activeGenre === genre 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-blue-400'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </header>

        {/* Book Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredBooks.map((book) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={book.id}
                className="group bg-white dark:bg-slate-800/40 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
              >
                <div className="aspect-[2/3] overflow-hidden relative">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <button 
                    onClick={() => toggleReadingList(book)}
                    className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-colors ${
                      readingList.some(i => i.id === book.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-slate-900 hover:bg-white'
                    }`}
                  >
                    <Heart size={18} fill={readingList.some(i => i.id === book.id) ? "currentColor" : "none"} />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-blue-600 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-md">
                      {book.genre}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{book.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white leading-tight mb-1 truncate">{book.title}</h3>
                  <p className="text-sm text-slate-500 mb-6">{book.author}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-slate-900 dark:text-white">${book.price}</span>
                    <a 
                      href={book.amazonLink} 
                      className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:gap-2 transition-all"
                    >
                      View Details <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="py-24 text-center">
            <div className="bg-slate-100 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">No matches found</h3>
            <p className="text-slate-500">Try searching for a different title or clearing filters.</p>
          </div>
        )}
      </main>

      {/* Side Drawer (Reading List) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50" 
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 z-50 shadow-2xl p-8 border-l border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-2xl font-black dark:text-white">Reading List</h2>
                  <p className="text-sm text-slate-500">Books you're interested in</p>
                </div>
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full dark:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-200px)] pr-2">
                {readingList.length === 0 && (
                  <div className="text-center py-20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
                    <Bookmark className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500">Nothing here yet.</p>
                  </div>
                )}
                {readingList.map(item => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={item.id} 
                    className="flex gap-5 group"
                  >
                    <img src={item.image} className="w-20 h-28 object-cover rounded-xl shadow-lg shadow-blue-500/5" />
                    <div className="flex-1 min-w-0 py-1">
                      <h4 className="font-bold text-slate-900 dark:text-white truncate">{item.title}</h4>
                      <p className="text-xs text-slate-500 mb-4">{item.author}</p>
                      <button 
                        onClick={() => toggleReadingList(item)}
                        className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors uppercase tracking-widest"
                      >
                        Remove
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {readingList.length > 0 && (
                <div className="absolute bottom-8 left-8 right-8">
                  <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                    Order Collection (${readingList.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)})
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="mt-20 py-12 border-t border-slate-100 dark:border-slate-800 text-center">
        <p className="text-slate-400 text-sm">© 2026 BookNest Labs. Built for performance and readers.</p>
      </footer>
    </div>
  );
};

export default BookNestPage;