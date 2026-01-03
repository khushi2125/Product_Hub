function SearchBar({ value, onChange }) {
  return (
    <div className="group relative w-full max-w-lg mx-auto md:mx-0">
      {/* Animated search icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors duration-300 z-10">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      
      {/* Main input */}
      <input
        type="text"
        placeholder="🔍 Neural search products by name..."
        className="group peer w-full pl-12 pr-12 py-5 h-16 text-lg font-semibold 
                   glass rounded-2xl border-2 border-slate-800/60 bg-slate-900/80 
                   backdrop-blur-xl text-slate-100 placeholder-slate-500 
                   focus:border-indigo-500/70 focus:ring-4 focus:ring-indigo-500/30 
                   focus:outline-none focus:shadow-neon-lg transition-all duration-500
                   hover:border-slate-600/80 hover:shadow-neon-md hover-lift-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      
      {/* Debounce indicator */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
        <span className="text-xs font-mono text-slate-500 group-focus-within:text-indigo-400 transition-colors duration-300 tracking-wider">
          500ms
        </span>
      </div>
      
      {/* Search glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10 
                      opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 
                      transition-opacity duration-500 blur-xl -z-10"></div>
    </div>
  );
}

export default SearchBar;
