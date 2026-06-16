function Navbar({ cartCount }) {
    return (
      <nav className="bg-gray-900 text-white px-8 py-5 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-widest">ALKA'S</h1>
          <p className="text-xs tracking-widest text-rose-300">FASHION BOUTIQUE</p>
        </div>
        <div className="border border-rose-300 text-rose-300 px-4 py-2 rounded-full text-sm">
          🛍️ Cart: {cartCount}
        </div>
      </nav>
    );
  }
  
  export default Navbar;