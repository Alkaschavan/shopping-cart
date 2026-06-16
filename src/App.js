import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const products = [
  { id: 1, name: "Floral Summer Dress", price: 49, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300" },
  { id: 2, name: "Classic Denim Jacket", price: 89, image: "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=300" },
  { id: 3, name: "Elegant Evening Gown", price: 149, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300" },
  { id: 4, name: "Casual Linen Top", price: 29, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=300" },
  { id: 5, name: "Boho Maxi Skirt", price: 59, image: "https://images.unsplash.com/photo-1583496661160-fb5974ca5f3a?w=300" },
  { id: 6, name: "Striped Summer Blouse", price: 39, image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=300" },
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
    <div className="min-h-screen bg-rose-50">
      <Navbar cartCount={cartItems.length} />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-widest text-gray-800">NEW ARRIVALS</h2>
          <p className="text-gray-400 tracking-widest text-sm mt-1">FRESH STYLES JUST FOR YOU</p>
        </div>
        <div className="flex gap-8">
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-6">
              <ProductList products={products} addToCart={addToCart} />
            </div>
          </div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart} />
        </div>
      </div>
    </div>
  );
}




export default App;