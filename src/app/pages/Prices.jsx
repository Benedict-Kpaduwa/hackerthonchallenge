import Image from "next/image";
import React from "react";
import trophy from "../assets/trophy.svg"
import medals from "../assets/medals.svg"

const Prices = () => {
  return (
    <div className=" relative px-10 md:px-32 lg:grid grid-cols-2 py-20 items-center bg-center bg-cover">
        <Image
          style={{
            filter: "opacity(15%)",
          }}
          className="absolute z-[-10]"
          src="/assets/pricebg.png"
          alt="Vercel Logo"
          fill
          priority
        />
        <div>
          <Image
            src={trophy}
            alt="Vercel Logo"
            width={548}
            height={718}
            priority
          />
        </div>
        <div className="space-y-14">
          <div className="pl-16 space-y-4">
            <div className="pl-14">
              <h3 className='text-[32px] font-bold'>
                Prices and
                <br /> <span className="text-secondary">Rewards</span>
              </h3>
              <p className="max-w-[330px]">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
          </div>
          <div className="min-w-[45vw]">
            <Image
              src={medals}
              alt="Vercel Logo"
              width={664}
              height={563}
              priority
            />
          </div>
        </div>
      </div>
  );
};

export default Prices;
