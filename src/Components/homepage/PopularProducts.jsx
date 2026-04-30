import { getProducts } from "@/lib/dataFetching";
import Cards from "../Pieces/Cards";

const PopularProducts = async () => {
  const products = await getProducts();
  const PopularProducts = products.slice(0, 3);
  console.log(PopularProducts);

  /**{
    "id": 1,
    "name": "UV Protection Sunglasses",
    "brand": "SunShade",
    "price": 15,
    "rating": 4.7,
    "stock": 10,
    "description": "Stylish UV protection sunglasses perfect for summer outings.",
    "image": "https://i.postimg.cc/1XjYwvbL/sunglasses.png",
    "category": "Accessories"
} */

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl text-center font-bold">Popular Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 mt-5">
        {PopularProducts.map((product) => <Cards key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default PopularProducts;
