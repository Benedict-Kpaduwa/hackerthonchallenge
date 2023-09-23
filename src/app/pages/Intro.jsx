import React from "react";
import Image from "next/image";
import bulb from "../assets/bulb.svg"

const Intro = () => {
  return (
    <section>
      <div className="px-10 md:px-36 py-14 lg:grid grid-cols-2 space-y-16 lg:space-y-0 lg:space-x-14 items-center">
        <div className="lg:pl-16 flex justify-center">
          <div className="w-[264px] h-[257px] lg:w-[450px] lg:h-[437px] relative">
            <Image
              src={bulb}
              alt="A bright idea"
              fill
              priority
              className="w-full"
            />
          </div>
        </div>
        {/* About text */}
        <div className="space-y-4 text-center lg:text-start">
          <h3 className="bulb">
            Introduction to getlinked <br />{" "}
            <span className="text-[#D434FE]">tech Hackathon 1.0</span>
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
      </div>
 
    </section>
  );
};

export default Intro;
