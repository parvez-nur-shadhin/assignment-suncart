import Link from "next/link";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-blue-500 py-10 mt-10">
            <div className="container mx-auto">
                <h1 className="text-5xl font-bold text-white text-center md:text-left">SunCart</h1>
                <div className="mt-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left md:justify-between">
                    <div className="text-white space-y-2">
                        <p className="text-xl font-semibold">Contact Us</p>
                        <p>Email: support@suncart.com</p>
                        <p>Phone: +880 1234-567890</p>
                        <p>Location: Dhaka, Bangladesh</p>
                    </div>
                    <div className="text-white">
                        <h1 className="text-xl font-semibold">Legal</h1>
                        <ul className="mt-2 space-y-1">
                            <li className="hover:underline">
                                <Link href={"/privacy-policy"}>
                                    <p>Privacy Policy</p>
                                </Link>
                            </li>
                            <li className="hover:underline">
                                <Link href={"/terms-conditions"}>
                                    <p>Terms & Conditions</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h1 className="text-xl font-semibold">Social Links</h1>
                        <ul className="flex gap-4 items-center justify-center mt-2">
                            <li>
                                <a href="#">
                                    <IoLogoFacebook size={30} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaTwitterSquare size={30} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaInstagramSquare size={30} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-center font-semibold text-white opacity-70">© {new Date().getFullYear()} SunCart. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;