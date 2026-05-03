import Image from "next/image";

const TopBrands = () => {
  const brands = [
    {
      name: "SunShade",
      image: "https://plus.unsplash.com/premium_photo-1681488360043-bb891c8067dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Stylish UV protection sunglasses for sunny days.",
    },
    {
      name: "CoolCare",
      image: "https://images.unsplash.com/photo-1629380108599-ea06489d66f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Reliable skincare products for summer protection.",
    },
    {
      name: "SummerFit",
      image: "https://plus.unsplash.com/premium_photo-1661605834791-b9584d4dde32?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Comfortable and breathable summer outfits.",
    },
    {
      name: "BeachPro",
      image: "https://plus.unsplash.com/premium_photo-1684470859645-0c5472936358?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Durable beach accessories for your trips.",
    },
  ];

  return (
    <div className="container mx-auto mt-10">
        <h1 className="text-4xl text-center font-bold">Popular Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 text-center hover:shadow-xl transition"
          >
            <Image className="mx-auto rounded-xl mb-5 mt-5" src={brand.image} alt={brand.name} width={200} height={100} />
            <h2 className="text-xl font-bold text-blue-600">{brand.name}</h2>
            <p className="text-gray-600 mt-2">{brand.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
