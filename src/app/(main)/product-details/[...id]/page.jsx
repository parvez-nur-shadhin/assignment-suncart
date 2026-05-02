import { getProducts } from "@/lib/dataFetching";
import Image from "next/image";



const ProductDetailsPage = async({params}) => {

    const {id} = await params;
    const productId = id[0];

    const products = await getProducts();

    const expectedProduct = products.find(product => product.id == productId);

  return (
    <div className="container mx-auto mt-10 mb-15">
        <div className=" rounded-xl py-4">
            <h1 className="text-5xl text-center font-bold text-black">{expectedProduct.name}</h1>
        </div>
        <Image className="mx-auto rounded-xl mt-5" src={expectedProduct.image} width={600} height={400} alt={expectedProduct.name}/>
        <div className="max-w-150 mx-auto mt-5 space-y-3">
            <div>
                <p className="font-bold text-center text-xl">{expectedProduct.description}</p>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Brand:</h1>
                <h1 className="text-lg font-bold">{expectedProduct.brand}</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Category:</h1>
                <h1 className="text-lg font-bold">{expectedProduct.category}</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Rating:</h1>
                <h1 className="text-lg font-bold">{expectedProduct.rating}</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Stock:</h1>
                <h1 className="text-lg font-bold">{expectedProduct.stock}</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Price:</h1>
                <h1 className="text-lg font-bold">{expectedProduct.price}$</h1>
            </div>
            <button className="btn btn-outline border-blue-500 text-blue-500 w-full">Buy Now</button>
        </div>
    </div>
  );
};

export default ProductDetailsPage;
