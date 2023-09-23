import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import Underline from './../components/Underline';
import chain from "../assets/chain.svg"
import person from "../assets/person.svg"
import ball from "../assets/ball.svg"
import curvedline from "../assets/curvedline.svg"
import countdown from "../assets/countdown.svg"

const Header = () => {
  return (
    <section className="px-10 lg:px-0 mt-5">
      <div className='flex flex-col w-full sm:hidden lg:block md:block'>
        <div className='flex flex-row w-full'>
          <div className='title w-full'>
            <div className='flex flex-col space-y-48'>
              <div className='flex flex-col space-y-12'>
                <Image
                  src={chain}
                  alt="getlinked"
                  width={722}
                  height={236}
                />
                <span className='text-xl font-medium w-2/3'>
                  Participate in getlinked tech Hackathon 2023 stand
                  a chance to win a Big prize
                </span>
                <div>
                  <button className='register-btn'>
                    Register
                  </button>
                </div>
              </div>
              <Image
                src={countdown}
                alt="getlinked"
                width={291}
                height={85}
              />
            </div>
          </div>
          <div className='flex flex-col items-end justify-end space-y-14'>
            <div className='flex flex-col items-end justify-end'>
              <span className='text-4xl font-bold text-white thin-line w-full'>Igniting a Revolution in HR Innovation</span>
              <Image
                src={curvedline}
                alt="getlinked"
                width={253}
                height={11.04}
              />
            </div>
            <div className='relative'>
              <Image
                src={person}
                alt="getlinked"
                width={828}
                height={715}
              />
              <Image
                src={ball}
                alt="getlinked"
                width={828}
                height={715}
                className="absolute -top-14 left-8"
              />
            </div>
          </div>
        </div>

      </div>
      {/*Mobile View for person */}
      <div className='flex flex-col w-full sm:block md:hidden lg:hidden'>
        <div className='flex flex-col w-full'>
          <div className='w-full'>
            <div className='flex flex-col items-end justify-end w-full mb-10'>
              <span className='font-bold text-white thin-line w-full'>Igniting a Revolution in HR Innovation</span>
              <Image
                src={curvedline}
                alt="getlinked"
                width={253}
                height={11.04}
              />
            </div>
            <div className='flex flex-col space-y-24'>
              <div className='flex flex-col space-y-12'>
                <Image
                  src={chain}
                  alt="getlinked"
                  width={722}
                  height={236}
                />
                <span className='text-xl font-medium w-2/3'>
                  Participate in getlinked tech Hackathon 2023 stand
                  a chance to win a Big prize
                </span>
                <div>
                  <button className='register-btn'>
                    Register
                  </button>
                </div>
              </div>
              <Image
                src={countdown}
                alt="getlinked"
                width={291}
                height={85}
              />
            </div>
          </div>
          <div className='flex flex-col items-center justify-center space-y-14 mt-12'>
            <div className='relative'>
              <Image
                src={person}
                alt="getlinked"
                width={828}
                height={715}
              />
              <Image
                src={ball}
                alt="getlinked"
                width={828}
                height={715}
                className="absolute -top-14 left-8"
              />
            </div>
          </div>
        </div>

      </div>
     
    </section>
  );
};

export default Header;
