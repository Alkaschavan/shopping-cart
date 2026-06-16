function ProductCard({ product, addToCart }) {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full h-72 object-cover object-top" />
          <div className="absolute top-3 right-3 bg-white text-rose-500 text-xs font-bold px-2 py-1 rounded-full shadow">
            NEW
          </div>
        </div>
        <div className="p-4">
          <h2 className="font-semibold text-gray-800 text-lg">{product.name}</h2>
          <p className="text-rose-500 font-bold text-xl mt-1">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-3 w-full bg-gray-900 text-white py-2 rounded-xl hover:bg-rose-500 transition-colors duration-300 text-sm tracking-widest"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
  
  export default ProductCard;