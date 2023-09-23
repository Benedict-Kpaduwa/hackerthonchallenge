import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import padlock from "../assets/padlock.svg"
import checked from "../assets/checked.svg"

const Privacy = () => {
  return (
    <section>
      <div className=" relative px-10 md:px-32 lg:grid grid-cols-2 py-20 items-center bg-center bg-cover space-x-10">
        <div className="space-y-14">
          <div className=" space-y-4">
            <div className="space-y-4">
            <h3 className='text-[32px] font-bold'>
                Privacy Policy and
                <br /> <span className="text-[#D434FE]">Terms</span>
              </h3>
              <p className="max-w-[330px] text-gray-300">
                Last updated on September 12, 2023
              </p>
              <p className="max-w-[420px]">
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </p>
            </div>
          </div>
          <div className="w-[569px] h-[608px] flex flex-col px-20 py-16 space-y-5 border-2 border-tertiary">
            <p className="">
              At getlinked tech Hackathon 1.0, we value your privacy <br /> and
              are committed to protecting your personal information. <br />
              This Privacy Policy outlines how we collect, use, disclose, <br />{" "}
              and safeguard your data when you participate in our tech
              <br /> hackathon event. By participating in our event, you consent
              <br />
              to the practices described in this policy.
            </p>
            <div className="space-y-5">
              <div className="space-y-1">
                <p className="font-bold text-[#D434FE]">Licensing Policy</p>
                <p className="font-bold">
                  Here are terms of our Standard License:
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Image
                    src={checked}
                    alt="Vercel Logo"
                    width={17}
                    height={17}
                    priority
                    className="pt-1"
                  />
                  <p className="text-gray-300">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <Image
                    src={checked}
                    alt="Vercel Logo"
                    width={17}
                    height={17}
                    priority
                    className="pt-1"
                  />
                  <p className="text-gray-300">
                    You are licensed to use the item available at any free
                    source sites, for your project development
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button label="Read More" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={padlock}
            alt="Vercel Logo"
            width={548}
            height={718}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Privacy;
