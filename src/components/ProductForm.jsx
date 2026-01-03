import { useState, useEffect } from 'react';
import FloatingInput from './FloatingInput';
import FloatingTextarea from './FloatingTextarea';

const validate = (values) => {
  const errors = {};
  if (!values.name?.trim()) errors.name = 'Product name is required';
  if (!values.price || Number(values.price) <= 0) errors.price = 'Valid price required';
  if (!values.category?.trim()) errors.category = 'Category is required';
  if (!values.stock || Number(values.stock) < 0) errors.stock = 'Valid stock required';
  return errors;
};

function ProductForm({ initialValues, onSave, onCancel }) {
  const [values, setValues] = useState({
    id: initialValues?.id || null,
    name: initialValues?.name || '',
    price: initialValues?.price || '',
    category: initialValues?.category || '',
    stock: initialValues?.stock || '',
    description: initialValues?.description || '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form on initialValues change
  useEffect(() => {
    setValues({
      id: initialValues?.id || null,
      name: initialValues?.name || '',
      price: initialValues?.price || '',
      category: initialValues?.category || '',
      stock: initialValues?.stock || '',
      description: initialValues?.description || '',
    });
    setErrors({});
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      const submitData = {
        ...values,
        price: Number(values.price),
        stock: Number(values.stock),
      };
      onSave(submitData);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="glass p-10 md:p-12 rounded-3xl backdrop-blur-3xl shadow-3xl border-2 border-indigo-500/40 neon-glow hover-lift max-w-4xl mx-auto animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-10 pb-8 border-b border-slate-800/60">
        <div>
          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl mb-2">
            {values.id ? '⚙️ Edit Product' : '🧬 Create Product'}
          </h2>
          <p className="text-slate-400 text-lg font-mono tracking-wider">
            {values.id ? 'Update product details' : 'Add new product to matrix'}
          </p>
        </div>
        <button
          onClick={onCancel}
          className="group p-3 hover:bg-slate-800/50 rounded-2xl transition-all duration-300 hover:rotate-90 hover:scale-110 neon-glow"
          disabled={isSubmitting}
        >
          <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FloatingInput 
            label="Product Name *" 
            name="name" 
            value={values.name} 
            onChange={handleChange} 
            error={errors.name}
            icon="📦"
          />
          <FloatingInput 
            label="Price (₹) *" 
            name="price" 
            type="number" 
            value={values.price} 
            onChange={handleChange} 
            error={errors.price}
            icon="💰"
          />
          <FloatingInput 
            label="Category *" 
            name="category" 
            value={values.category} 
            onChange={handleChange} 
            error={errors.category}
            icon="🏷️"
          />
          <FloatingInput 
            label="Stock Quantity *" 
            name="stock" 
            type="number" 
            value={values.stock} 
            onChange={handleChange} 
            error={errors.stock}
            icon="📊"
          />
        </div>

        <FloatingTextarea 
          label="Product Description" 
          name="description" 
          value={values.description} 
          onChange={handleChange}
          icon="📝"
        />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-slate-800/60">
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="flex-1 glass py-5 px-8 rounded-2xl font-bold text-lg text-slate-300 
                       border-2 border-slate-700/60 hover:bg-slate-800/50 hover:border-slate-500/80 
                       hover-lift transition-all duration-300 hover:shadow-neon-md flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 
                       hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-400 py-5 px-8 
                       rounded-2xl font-black text-xl text-white shadow-3xl hover:shadow-neon-xl 
                       hover-lift transition-all duration-500 flex items-center justify-center gap-3
                       active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Saving...
              </>
            ) : (
              <>
                {values.id ? '💾 Update Product' : '🚀 Create Product'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
