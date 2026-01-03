import { useEffect, useState } from 'react';
import { initialProducts } from './data/products';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import SearchBar from './components/SearchBar';
import ViewToggle from './components/ViewToggle';
import Pagination from './components/Pagination';

function App() {
  const [products, setProducts] = useState([]);
  const [viewType, setViewType] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const pageSize = 6;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(initialProducts);
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1);
    }, 500);
    return () => clearTimeout(id);
  }, [searchTerm]);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const start = (currentPage - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  const handleSave = (product) => {
    if (product.id) {
      setProducts(prev => prev.map(p => p.id === product.id ? product : p));
    } else {
      const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
      setProducts(prev => [...prev, { ...product, id: newId }]);
    }
    setEditingProduct(null);
  };

  const handleEditClick = (product) => setEditingProduct({ ...product });
  const handleCancelEdit = () => setEditingProduct(null);

  if (isLoading) {
    return (
      <div className="min-h-screen cyber-bg flex items-center justify-center p-8 relative overflow-hidden">
        <div className="glass p-12 rounded-3xl text-center pulse-glow hover-lift max-w-md mx-auto shadow-2xl border-neon">
          <div className="w-24 h-24 border-4 border-indigo-500/40 border-t-indigo-500 rounded-full animate-spin mx-auto mb-8 shadow-2xl"></div>
          <div className="space-y-4">
            <h1 className="text-4xl font-black bg-gradient-cyber bg-clip-text text-transparent drop-shadow-2xl">
              Product Dashboard
            </h1>
            <p className="text-slate-400 text-xl tracking-wider">Initializing cyberpunk interface...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen cyber-bg relative overflow-hidden">
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12">
        
        {/* Cyberpunk Header */}
        <header className="glass p-12 rounded-3xl hover-lift text-center shadow-3xl border-neon backdrop-blur-xl">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-cyber bg-clip-text text-transparent drop-shadow-3xl mb-6 leading-tight tracking-tight">
            CYBER DASHBOARD
          </h1>
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">
              {filtered.length} Products • Page {currentPage}/{totalPages}
            </p>
            <p className="text-lg text-slate-500 tracking-wide">Neural search • Quantum updates • Dark matrix</p>
          </div>
        </header>

        {/* Controls Matrix */}
        <div className="glass p-10 rounded-3xl shadow-3xl border-neon backdrop-blur-2xl hover:shadow-neon-xl transition-all duration-700">
          <div className="flex flex-col xl:flex-row gap-8 items-stretch xl:items-center justify-between">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <div className="flex flex-wrap gap-4 items-center justify-center xl:justify-end">
              <ViewToggle viewType={viewType} onChange={setViewType} />
              <button
                onClick={() => setEditingProduct({ name: '', price: '', category: '', stock: '', description: '' })}
                className="cyber-btn px-10 py-5 rounded-2xl font-black text-xl border-2 border-neon-blue/50 
                           hover:bg-indigo-500/20 hover:border-indigo-400/80 hover-lift neon-indigo 
                           shadow-neon-lg bg-slate-900/60 min-w-[200px] transition-all duration-500"
              >
                🧬 CREATE PRODUCT
              </button>
            </div>
          </div>
        </div>

        {/* Neural Form */}
        {editingProduct && (
          <ProductForm
            key={editingProduct.id || 'new'}
            initialValues={editingProduct}
            onSave={handleSave}
            onCancel={handleCancelEdit}
          />
        )}

        {/* Data Matrix */}
        <div className="space-y-8">
          <div className="glass p-8 rounded-2xl border-neon/50 shadow-xl">
            <h3 className="text-3xl font-black text-slate-100 flex items-center gap-3">
              <span className="text-indigo-400">⚡</span>
              PRODUCT MATRIX ({filtered.length})
            </h3>
          </div>

          <ProductList products={pageItems} viewType={viewType} onEdit={handleEditClick} />
        </div>

        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        )}
      </div>
    </div>
  );
}

export default App;
