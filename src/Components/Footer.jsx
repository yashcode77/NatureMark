import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import whitelogo from "../Asset/white-logo.png";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-16 px-4 py-6 lg:py-8 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-lg font-bold">Categories</h2>
            <ul className="font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blogs
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Updates
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-bold">Our Services</h2>
            <ul className="font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  ArborTag App
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  ArborTag Device
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Analyze your data
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Sell your Carbon Credits
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-1 mb-6">
            <img src={whitelogo} alt="" className="h-5"/>
            <h2 className="text-lg font-bold">NatureMark Systems</h2>
            </div>
            <ul className="font-medium">
              <div className="flex items-center mb-4 gap-1">
                <IoMdMail />
                <li className="">
                  <a href="#" className="hover:underline self-center">
                    naturemarksystems@gmail.com
                  </a>
                </li>
              </div>
              <div className="flex items-center gap-1 mb-4">
                <IoLocationSharp />
                <li className="">
                  <a href="#" className="hover:underline">
                    Mangaluru, Karnataka, India
                  </a>
                </li>
              </div>
              <div className="flex items-center gap-1">
                <FaPhoneAlt />
                <li className="">
                  <a href="#">
                    <span className="underline">+91 9833363372</span>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
