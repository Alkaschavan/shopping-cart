function Cart({ cartItems }) {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div className="bg-white rounded-xl shadow p-4 w-72 h-fit">
        <h2 className="font-bold text-xl mb-4">Your Cart 🛒</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-400">Cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex justify-between py-2 border-b">
              <span>{item.name}</span>
              <span className="font-bold">${item.price}</span>
            </div>
          ))
        )}
        <p className="font-bold text-lg mt-4">Total: ${total}</p>
      </div>
    );
  }
  
  export default Cart;