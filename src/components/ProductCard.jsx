function ProductCard({ product, addToCart }) {
    return (
      <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-3">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
        <h2 className="font-bold text-gray-800">{product.name}</h2>
        <p className="text-blue-600 font-bold">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    );
  }
  
  export default ProductCard;