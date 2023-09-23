import Image from "next/image";
import React from "react";
import lady from "../assets/lady.svg"


const GuildLines = () => {
  return (
    <section>
      <div className="px-10 md:px-36 flex flex-col lg:grid grid-cols-2 lg:space-x-14 items-center py-16 lg:py-0">
        {/* Rules Text */}
        <div className="lg:pl-16 space-y-4 order-last lg:order-none text-center lg:text-start">
          <h3 className="bulb">
            Rules and <br /> <span className="text-[#D434FE]">Guidelines</span>
          </h3>
          <p className="max-w-[500px]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you &apos; re a
            coding genius, a design maverick, or a concept wizard, you &apos; ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that &apos; s what we
            &apos; re all about!
          </p>
        </div>
        {/* Rules Image */}
        <div className="">
          <Image
            src={lady}
            alt="lady"
            width={664}
            height={664}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default GuildLines;
