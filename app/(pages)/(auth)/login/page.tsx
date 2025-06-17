
import React from "react";
import Image from "next/image";
import { Space_Grotesk, Krona_One } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400','500','600', '700'],
});

const kronaOne = Krona_One({
  subsets: ['latin'],
  weight: ['400'],
});

import logo from "./360-logo.jpg";
import banner from "./banner.jpg";

const Login = () => {
  return (
    <div className={`login-page min-h-[100vh] my-[60px]   flex items-center relative bg-white ${spaceGrotesk.className} `}>
      <div className=" hidden md:block layers absolute top-[50%] transform-[translateY(-50%)] left-0  pt-[40%] h-0  w-full  ">
        <div className="layer layer-2 bg-[#D9D3D0] absolute  top-0 h-0 pt-[20%] w-[25%]"></div>
        <div className="layer layer-3 bg-[#333333] absolute  bottom-[18px] h-0 pt-[30%] w-[42%]"></div>
        <div className="layer-1 absolute left-[37px] top-[50%] transform-[translateY(-50.8%)] w-[67%] h-0 pt-[29%]">
          <Image src={banner} alt="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
        <div className="layer layer-4 bg-[#9886F7] absolute  bottom-0  h-0 pt-[9.3%] w-[7.5%] "></div>
      </div>

      <div className="form-wrapper w-full   mx-auto px-[20px] md:px-[80px] pr-[40px]">
        <form
          action=""
          className="backdrop-blur-3xl  bg-white/60 border border-gray-200  relative mx-auto md:mr-[40px] max-w-[340px] 4xl:max-w-[524px] 2xl:max-w-[415px]   rounded-[10px] p-[28px] 2xl:p-[37px] 4xl:p-[48.6px] !pb-[30px] 2xl:!pb-[60px] 4xl:!pb-[70px]  shadow-[9px_9px_0px_#5435F5] "
        >
          <div className=" absolute top-0 right-[0]  transform-[translate(50%,-20%)] shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
            <Image src={logo} alt="Logo" className="max-w-[60px] md:max-w-[80px] 2xl:max-w-[118px]" />
          </div>
          <h1 className={` text-[28px] 2xl:text-[34px] 4xl:text-[42px]  text-center mb-[30px] 2xl:mb-[52px] 4xl:mb-[76px] text-transparent bg-clip-text bg-[linear-gradient(to_left,_#000000_22%,_#292929_61%,_#666666_80%)] ${kronaOne.className}`}>
            Welcome
          </h1>
          <h4 className="text-[16px] 2xl:text-[19px] 4xl:text-[24px] tracking-[0.18px] font-medium mb-[22px] 4xl:mb-[33px]">Log in to your Account</h4>

          <div className="field text-[12px] 4xl:text-[16px] mb-[18px] 4xl:mb-[25.5px]">
            <label htmlFor="login-username" className=" mb-[4px] 2xl:mb-[8px] 4xl:mb-[12px] block">
              User Name
            </label>
            <input
              type="text"
              id="login-username"
              placeholder="Username@360.one"
              className="bg-white px-3 py-[9px] block w-full border border-gray-300 rounded-[7px] text-[12px] 4xl:text-[16px]"
            />
          </div>

          <div className="field text-[12px] 4xl:text-[16px]  mb-[18px] 4xl:mb-[25.5px]">
            <label htmlFor="login-username" className=" mb-[4px] 2xl:mb-[8px] 4xl:mb-[12px] block">
              Password
            </label>
            <input
              type="text"
              id="login-username"
              placeholder="*********"
              className="bg-white px-3 py-[9px] block w-full border border-gray-300 rounded-[7px] text-[12px] 4xl:text-[16px]"
            />
          </div>
          <button className="btn cursor-pointer text-[16px] 4xl:text-[20px]  px-3 py-2 bg-[#2C2C2C] hover:bg-[#000]  text-white rounded-[7px] text-center block w-full   mb-[8px]">
            Login
          </button>

          <div className="form-footer text-center">
            <a href="#/" className="hover:underline text-center text-[14px] 4xl:text-[18px]">
              Forget Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
