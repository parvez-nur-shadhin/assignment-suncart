import summerSalePhoto from "@/assets/summer-sale.png";
import Image from "next/image";
import 'animate.css';

const Banner = () => {
  return (
    <div
      className={`container mx-auto p-10 bg-cover bg-center text-center lg:py-30 space-y-5 rounded-2xl mt-10`}
      style={{ backgroundImage: `url(${summerSalePhoto.src})` }}
    >
      <h1 className="text-white text-6xl font-bold animate__animated animate__backInDown">Summer Sale!</h1>
      <p className="text-4xl text-blue-300 font-semibold animate__animated animate__backInDown">Hot Deals</p>
      <p className="text-2xl text-blue-200 animate__animated animate__backInDown">Up to 50% Off</p>
    </div>
  );
};

export default Banner;
