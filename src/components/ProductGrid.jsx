function ProductGrid({ products, onEdit }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p, idx) => (
        <div
          key={p.id}
          className="glass p-6 rounded-2xl hover-lift group hover:border-indigo-500/60 hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 overflow-hidden relative"
          style={{ animationDelay: `${idx * 50}ms` }}
        >
          {/* Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold border border-emerald-500/30">
              {p.stock > 0 ? 'In Stock' : 'Out'}
            </span>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-300 mb-2 transition-colors">
              {p.name}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-lg text-sm font-semibold">
                {p.category}
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-black text-emerald-400">
                ₹{p.price.toLocaleString()}
              </p>
              {p.description && (
                <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                  {p.description}
                </p>
              )}
            </div>
          </div>

          {/* Action */}
          <button
            onClick={() => onEdit(p)}
            className="mt-6 w-full glass py-3 rounded-xl font-semibold text-indigo-300 border-2 border-indigo-500/30 hover:bg-indigo-500/30 hover:border-indigo-400 hover:text-white neon-glow group-hover:scale-105 transition-all duration-300"
          >
            ✏️ Edit Product
          </button>
        </div>
      ))}
    </div>
  );
}
export default ProductGrid;