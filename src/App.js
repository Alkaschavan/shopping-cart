import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const products = [
  { id: 1, name: "Wireless Headphones", price: 99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
  { id: 2, name: "Smart Watch", price: 199, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" },
  { id: 3, name: "Bluetooth Speaker", price: 79, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300" },
  { id: 4, name: "Laptop Stand", price: 49, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300" },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
        setCartItems(
            cartItems.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const removeAllFromCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cartItems.length} />
      <div className="flex gap-6 p-6">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart} />
      </div>
    </div>
  );
}




export default App;