function Cart({ cartItems, removeFromCart, removeAllFromCart }) {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 w-80 h-fit sticky top-6">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="font-bold text-xl tracking-widest">YOUR BAG 🛍️</h2>
          {cartItems.length > 0 && (
            <button
              onClick={removeAllFromCart}
              className="text-xs text-rose-500 hover:text-rose-700 tracking-widest"
            >
              CLEAR ALL
            </button>
          )}
        </div>
        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-4xl mb-3">🛍️</p>
            <p className="text-gray-400 tracking-widest text-sm">YOUR BAG IS EMPTY</p>
          </div>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-3 border-b">
              <div>
                <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                <p className="text-rose-500 text-sm">x{item.quantity} · ${item.price * item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-rose-500 text-lg"
              >
                ✕
              </button>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between font-bold text-lg">
              <span className="tracking-widest">TOTAL</span>
              <span className="text-rose-500">${total}</span>
            </div>
            <button className="mt-4 w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-rose-500 transition-colors duration-300 tracking-widest text-sm">
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    );
  }
  
  export default Cart;