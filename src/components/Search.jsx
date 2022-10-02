import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

export const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-5">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div className="p-4">
          <h2 className="text-black">
            Welcome to Zaver PEARL-CONTINENTAL Gwadar
          </h2>
          <p>
            Overlooking the Arabian Sea, Zaver Pearl-Continental Hotel Gwadar is
            located on the majestic Koh-e-Batil Hill, south of West Bay on Fish
            Harbour Road. Experience the comfort and elegance of our spacious
            rooms and suites, coupled with the sophistication of signature
            restaurants, serving you the finest in Pakistani, Continental, and
            Chinese cuisines
          </p>
        </div>

        {/* Buttons Start */}

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex flex-col lg:flex-row gap-1 items-center text-center">
            <button>
              <RiCustomerService2Fill size={25} />
            </button>
            <div>
              <h3 className="py-2">Leading Services</h3>
              <p>
                Elegant meeting and conference venues in Gwadar with
                state-of-the-art technology.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-1 items-center text-center">
            <button>
              <MdOutlineTravelExplore size={25} />
            </button>
            <div>
              <h3 className="py-2">Leading Services</h3>
              <p>
                Elegant meeting and conference venues in Gwadar with
                state-of-the-art technology.
              </p>
            </div>
          </div>
        </div>
        {/* Buttons End */}
      </div>

      {/* Right Side Start */}
      <div className="">
        <div className="border text center">
          <p>GET AN ADDITIONAL 10% OFF</p>
          <p className="py-2">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-300 py-2">BOOK NOW AND SAVE</p>
        </div>

        {/* Form div Start */}
        <form className='w-full'>
          <div className="flex flex-col text-left my-2">
            <label>Destinations</label>
            <select  className='border rounded-md py-2'>
              <option>PC Karachi</option>
              <option>PC Lahore</option>
              <option>PC Rawalpindi</option>
              <option>PC Peshawar</option>
              <option>PC Gwadar</option>
            </select>
          </div>
          <div className="flex flex-col text-left my-2">
            <label>Check-In</label>
            <input type='date' className='border rounded-md py-2' /> 
          </div>
          <div className="flex flex-col text-left my-2">
            <label>Check-Out</label>
            <input type='date'  className='border rounded-md py-2'/> 
          </div>
          <div >
            <button className="w-full">Rates and Avaliabilities</button>
          </div>
        </form>
        {/* Form div End */}
      </div>
      {/* Right Side End */}
    </div>
  );
};
