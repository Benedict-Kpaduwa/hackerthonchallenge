import Image from "next/image";
import React from "react";
import time from "../assets/Timeline.svg"
import mobiletimeline from "../assets/mobile-timeline.svg"

const Timeline = () => {
  return (
    <div className="px-10 md:px-36 flex flex-col justify-center items-center pb-10 text-center space-y-20 py-16">
        <div className="space-y-2">
          <h3 className='text-[32px] font-bold'>Timeline</h3>
          <p className="max-w-[350px] text-sm font-normal">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <div className="hidden lg:block">
          <Image
            src={time}
            alt="Vercel Logo"
            width={1233}
            height={1084}
          />
        </div>
        <div className=" lg:hidden">
          <Image
            src={mobiletimeline}
            alt="Vercel Logo"
            width={933}
            height={1084}
          />
        </div>
      </div>
  );
};

export default Timeline;
