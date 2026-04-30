import Cards from "@/Components/Pieces/Cards";
import { getProducts } from "@/lib/dataFetching";
import React from "react";

const page = async () => {
  const products = await getProducts();

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-5xl font-bold text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {products.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
