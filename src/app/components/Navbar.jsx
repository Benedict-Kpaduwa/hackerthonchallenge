"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import hamburg from "../assets/hamburg.svg"
import close from "../assets/close.svg"
import closex from "../assets/closex.svg"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const links = [
    {
      name: "Timeline",
      path: "/#timeline",
    },
    {
      name: "Overview",
      path: "/#overview",
    },
    {
      name: "FAQs",
      path: "/#faq",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

const Navbar = ({
    additionalStyle,
    contactStyle,
    regBtn,
    setOpenMobileNav
  }) => {
    const [show, setShow] = useState(false)
  return (
    <div
    className={`lg:px-24 px-8 lg:pl-32 pl-8 md:pt-14 py-6 md:pb-6 lightBorderBottom flex justify-between backdrop-blur-xl relative z-10 ${additionalStyle}`}
  >
    <Link href="/">
      <div className="font-[ClashDisplay] font-bold md:text-4xl text-xl">
        get<span className="textPurple">linked</span>
      </div>
    </Link>

    <div className="md:flex hidden justify-between border-1 lg:gap-24 gap-4">
      <ul className="flex items-center lg:gap-10 gap-7">
        <Link href="/#timeline">
        <li>Timeline</li>
        </Link>
        <Link href="/#overview">
        <li>Overview</li>
        </Link>
        
        <Link href="/#faq">
        <li>FAQs</li>
        </Link>
        
        <Link href="/contact">
          <li className={`${contactStyle}`}>Contact</li>
        </Link>
      </ul>
      <div onClick={() => router.push("/new")}>
        <div className='pl-10 pt-8'>
            <Link href="/new">
                <Button label="Register"/>
            </Link>
        </div>
      </div>
      <div onClick={()=>setShow(!show)} className='sm:block lg:hidden md:hidden'>
        <Image
            src={hamburg}
            alt="getlinked"
            width={19}
            height={14}
            className='ml-24 cursor-pointer'
        />
    </div>
    </div>
     {
          show && 
          <div className='flex flex-col bg-bgcolor w-[348px] h-[492px] absolute top-0 right-0 space-y-10'>
              <div className='relative flex items-end w-full justify-end p-10'>
                  <Image
                      src={close}
                      alt="getlinked"
                      width={23}
                      height={23}
                      className='ml-24 cursor-pointer'
                  />
                  <Image
                      src={closex}
                      alt="getlinked"
                      width={11}
                      height={11}
                      className='ml-24 cursor-pointer absolute top-11 right-12'
                      onClick={()=>setShow(false)}
                  />
              </div>
              <div>
              <ul className="flex flex-col space-y-10">
                  {links.map((link, index) => (
                  <li key={index} className='pl-10 inter'>
                      <Link href={link.path}>{link.name}</Link>
                  </li>
                  ))}
              </ul>
              <div className='pl-10 pt-8'>
                  <Link href="/new">
                      <Button label="Register"/>
                  </Link>
              </div>
              </div>
          </div>
      }
  </div>
  )
}

export default Navbar