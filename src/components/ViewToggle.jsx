function ViewToggle({ viewType, onChange }) {
  return (
    <div className="inline-flex rounded-full bg-slate-900/70 p-1 text-xs">
      <button
        onClick={() => onChange('table')}
        className={`rounded-full px-3 py-1 font-medium transition ${
          viewType === 'table'
            ? 'bg-indigo-500 text-white shadow'
            : 'text-slate-300 hover:text-white'
        }`}
      >
        List
      </button>
      <button
        onClick={() => onChange('grid')}
        className={`rounded-full px-3 py-1 font-medium transition ${
          viewType === 'grid'
            ? 'bg-indigo-500 text-white shadow'
            : 'text-slate-300 hover:text-white'
        }`}
      >
        Grid
      </button>
    </div>
  );
}

export default ViewToggle;
