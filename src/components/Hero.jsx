import React from "react";
import heroBackground from "../assets/background/background_2.mp4";
import {AiOutlineSearch} from 'react-icons/ai'



export const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src={heroBackground}
        id="video"
        className="video w-full h-full object-cover"
        autoPlay
        loop
        muted
      ></video>
      {/* Overlay DIv Start */}
      <div className="absolute w-full h-full top-0 left-0 bg-gray-600/50"></div>
      {/* Overlay DIV End */}

      <div className="absolute w-full h-full flex flex-col justify-center text-center top-0 p-4 bg-gray-700/50">
        <h1>Gwadar Vlog.</h1>
        <h2 className="p-4">Top Locations in Gwadar. </h2>

        <form className="flex justify-between items-center mx-auto border rounded-md p-2 w-full max-w-[400px] text-black bg-slate-600/50">
          <div>
            <input className='bg-transparent w-[330px] p-2 focus:outline-none' type="text" placeholder="Search the Place" />
          </div>
        <div>
          <button>
            <AiOutlineSearch size={20}/>
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};
