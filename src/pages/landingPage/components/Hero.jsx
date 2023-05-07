import React from "react";
import heroImg from "../../../assets/images/hero.png";
import heroBg from "../../../assets/images/background.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[600px] flex justify-center p-20 text-[20px] text-white "
    >
      <div className=" w-full h-full top-0 object-fit z-[-1] opacity-10 fixed">
        <img src={heroBg} alt="" className="w-full h-full object-fit " />
      </div>
      <div className="absolute top-0 w-full h-full bg-primary mix-blend-overlay z-[-1]"></div>
      {/* <div className="absolute top-0 left-0 bg-primary w-full h-full circle  opacity-60"></div>
      <div className="absolute top-0 left-0 bg-primary w-full h-full circle2  opacity-60"></div> */}
      <div className="flex justify-center items-center  w-full mt-[-1rem] text-center">
        <div className="flex flex-col gap-5 p-10 w-[900px]">
          <div className=" p-5">
            <h1 className="text-[80px] tracking-[2rem] font-bold text-[#e69ffd]">
              RICHWELL
            </h1>
            <h1 className="-mt-10 tracking-[12px] text-[#ecac44] text-[30px] -ml-5 over">
              COLLEGES INCORPORATED{" "}
            </h1>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            eaque aperiam asperiores tenetur. Reiciendis, vel. Vitae quibusdam
            non dolore quam? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Dolorum, in!
          </p>
          {/* <motion.a
            className="bg-primary text-white py- px-4 rounded-xl w-[100px] cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            Enroll Now
          </motion.a> */}
        </div>
        {/* <div className="w-[600px] flex z-10 bg-red-200">
          <div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
