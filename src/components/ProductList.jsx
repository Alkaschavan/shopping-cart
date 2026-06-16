import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </>
  );
}

export default ProductList;