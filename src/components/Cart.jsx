function Cart({ cartItems, removeFromCart, removeAllFromCart }) {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    return (
      <div className="bg-white rounded-xl shadow p-4 w-72 h-fit">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl">Your Cart 🛒</h2>
          <button
            onClick={removeAllFromCart}
            className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
          >
            Empty Cart
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p className="text-gray-400">Cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b">
              <span>{item.name} x{item.quantity}</span>
              <div className="flex items-center gap-2">
                <span className="font-bold">${item.price * item.quantity}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
        <p className="font-bold text-lg mt-4">Total: ${total}</p>
      </div>
    );
  }
  
  export default Cart;