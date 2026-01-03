function FloatingTextarea({ label, name, value, onChange, icon }) {
  return (
    <div className="space-y-2">
      <div className="relative group">
        {icon && (
          <span className="absolute left-4 top-4 text-slate-500 group-focus-within:text-indigo-400 z-10 transition-colors">
            {icon}
          </span>
        )}
        <textarea
          id={name}
          name={name}
          rows={4}
          className="w-full pl-12 pr-4 pt-6 pb-4 glass backdrop-blur-xl rounded-2xl border-2 border-slate-800/60
                     text-lg font-semibold text-slate-100 placeholder-transparent focus:border-indigo-500/70
                     focus:ring-4 focus:ring-indigo-500/30 focus:outline-none resize-vertical hover:border-slate-600/80
                     transition-all duration-400 peer min-h-[120px]"
          value={value}
          onChange={onChange}
          placeholder=" "
        />
        <label htmlFor={name} className="absolute left-12 top-7 text-sm font-bold text-slate-500 peer-focus-within:text-indigo-400 peer-focus-within:-top-1 peer-focus-within:text-xs peer-valid:-top-1 peer-valid:text-xs transition-all duration-300 bg-slate-950/80 px-2">
          {label}
        </label>
      </div>
    </div>
  );
}

export default FloatingTextarea;
