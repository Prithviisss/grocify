import React from "react";
import { useLocation } from "react-router-dom";
import Cards from "../Cards/Cards";
import products from "../ProductList/ProductList"; // ✅ your products array

const AllProducts = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get("search")?.toLowerCase() || "";

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="mt-40 max-w-[1400px] mx-auto px-10">
      <h2 className="text-3xl font-bold mb-10">
        {searchTerm ? `Search results for "${searchTerm}"` : "All Products"}
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-zinc-500 mt-10">
          No products found 😢
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <Cards key={product.id ?? index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
