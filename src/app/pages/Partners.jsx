import Image from "next/image";
import React from "react";
import sponsors from "../assets/sponsors.svg"

const Parnters = () => {
  return (
    <div className='py-32 flex flex-col items-center justify-center w-full'>
    <div className='flex flex-col mb-20'>
      <h1 className='text-[32px] font-bold text-white text-center'>Partners and Sponsors</h1>
      <span className='text-sm font-normal text-center'>
        Getlinked Hackathon 1.0 is honored to have the following major
        <br />
        companies as its partners and sponsors.
      </span>
    </div>
    <div>
      <Image
        src={sponsors}
        alt="getlinked"
        width={1255}
        height={560}
      />
    </div>
  </div>
  );
};

export default Parnters;
