function Pagination({ currentPage, totalPages, onPageChange }) {
  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  return (
    <div className="flex items-center justify-between border-t border-slate-800 pt-4 text-xs text-slate-300">
      <span>
        Page <span className="font-semibold">{currentPage}</span> of{' '}
        <span className="font-semibold">{totalPages}</span>
      </span>
      <div className="flex gap-2">
        <button
          disabled={prevDisabled}
          onClick={() => onPageChange(currentPage - 1)}
          className={`rounded-lg px-3 py-1 font-medium ${
            prevDisabled
              ? 'cursor-not-allowed bg-slate-900 text-slate-500'
              : 'bg-slate-800 hover:bg-slate-700'
          }`}
        >
          Previous
        </button>
        <button
          disabled={nextDisabled}
          onClick={() => onPageChange(currentPage + 1)}
          className={`rounded-lg px-3 py-1 font-medium ${
            nextDisabled
              ? 'cursor-not-allowed bg-slate-900 text-slate-500'
              : 'bg-slate-800 hover:bg-slate-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;

