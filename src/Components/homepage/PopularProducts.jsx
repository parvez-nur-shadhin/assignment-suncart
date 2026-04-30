import { fetchingData } from "@/lib/dataFetching";
import Image from "next/image";
import Link from "next/link";

const PopularProducts = async () => {
  const products = await fetchingData();
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
        {PopularProducts.map((product) => {
          return (
            <div key={product.id}>
              <div className="card bg-base-100 shadow-lg">
                <figure>
                  <Image
                    src={product.image}
                    height={300}
                    width={500}
                    alt={product.name}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.description}</p>
                </div>
                <div className="flex items-center justify-between mt-2 px-6">
                  <p className="font-semibold">Rating:</p>
                  <p className="font-bold">{product.rating}</p>
                </div>
                <div className="flex items-center justify-between mt-2 px-6">
                  <p className="font-semibold">Price:</p>
                  <p className="font-bold">{product.price}$</p>
                </div>
                <div className="card-actions justify-end px-6 mt-5">
                  <button className="btn bg-blue-500 text-white">
                    <Link href={"/details"}>View Details</Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
