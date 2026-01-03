function FloatingInput({ label, name, value, onChange, error, type = 'text' }) {
  return (
    <div className="group relative">
      <input
        id={name}
        name={name}
        type={type}
        className="peer w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4 text-sm font-semibold text-slate-100 placeholder-transparent focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 h-14"
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <label 
        htmlFor={name}
        className="absolute left-4 top-3 text-xs text-slate-400 font-semibold transition-all duration-300 peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-indigo-400 peer-focus:scale-90 peer-valid:-top-2 peer-valid:text-indigo-400"
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-400 font-medium">{error}</p>}
    </div>
  );
}

export default FloatingInput;
