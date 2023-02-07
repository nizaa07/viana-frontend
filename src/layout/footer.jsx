import React from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <div className="w-full flex flex-col justify-between h-60 px-16 py-6 bg-gray-300">
      <div className="flex justify-between">
        <div>
          <div className="p-8">
            <h2 className="text-center text-2xl font-sans font-semibold tracking-wider">VIANA</h2>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <a href="">
            <BsFacebook size={25} />
          </a>
          <a href="">
            <BsInstagram size={25} />
          </a>
          <a href="">
            <BsWhatsapp size={25} />
          </a>
        </div>
      </div>
      <div>
        <h2 className="font-sans tracking-wide">Copyright © 2022 Smart City & Community Innovation Center</h2>
      </div>
    </div>
  );
}

export default Footer;
