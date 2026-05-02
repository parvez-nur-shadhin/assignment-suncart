import Image from "next/image";
import Link from "next/link";

const Cards = ({ product }) => {
  return (
    <div>
      <div>
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
          <div className="card-actions justify-end px-6 mt-5 mb-5">
            <button className="btn bg-blue-500 text-white">
              <Link href={`/product-details/${product.id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
