function ProductTable({ products, onEdit }) {
  return (
    <div className="glass rounded-2xl overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-slate-900/80 to-indigo-900/20 backdrop-blur-sm">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-200">Product</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-200">Category</th>
              <th className="px-6 py-4 text-right font-semibold text-slate-200">Price</th>
              <th className="px-6 py-4 text-right font-semibold text-slate-200">Stock</th>
              <th className="px-6 py-4 text-right font-semibold text-slate-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, idx) => (
              <tr
                key={p.id}
                className={`group border-b border-white/10 hover:bg-white/5 transition-all duration-200 hover:backdrop-blur-sm`}
              >
                <td className="px-6 py-4 font-semibold text-slate-100">{p.name}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">
                    {p.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-right font-bold text-emerald-400 text-lg">
                  ₹{p.price.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    p.stock > 5 ? 'bg-emerald-500/20 text-emerald-300' : 
                    p.stock > 0 ? 'bg-amber-500/20 text-amber-300' : 
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {p.stock}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => onEdit(p)}
                    className="glass px-4 py-2 rounded-lg font-semibold text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30 hover-lift neon-glow transition-all"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductTable;