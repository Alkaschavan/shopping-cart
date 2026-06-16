function Navbar({ cartCount }) {
    return (
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🛒 ShopReact</h1>
        <div className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold">
          Cart: {cartCount}
        </div>
      </nav>
    );
  }
  
  export default Navbar;