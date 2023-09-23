"use client";
import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import Underline from './Underline';
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

const Navbar = () => {
    const [show, setShow] = useState(false)
  return (
    <div className='bg-bgcolor relative'>
        <div className='bg-bgcolor flex flex-col pt-2 pb-5 sm:hidden lg:block md:hidden'>
            <div className='bg-bgcolor flex flex-row justify-around items-center pt-12 pb-5'>
                <div>
                    <Link href="/">
                    <Image
                        src={logo}
                        alt="getlinked"
                        width={171}
                        height={44}
                    />
                </Link>
                </div>
                <div className="hidden lg:flex items-center justify-between space-x-24">
                <ul className="flex space-x-16">
                    {links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path}>{link.name}</Link>
                    </li>
                    ))}
                </ul>
                <Link href="/new">
                        <Button label="Register"/>
                    </Link>
                
                </div>
            </div>
            <Underline/>
        </div>
        <div className='sm:block lg:hidden md:block w-full'>
            <div className='bg-bgcolor flex flex-row justify-around items-center pt-12 pb-5'>
                <Image
                    src={logo}
                    alt="getlinked"
                    width={171}
                    height={44}
                />
                <div onClick={()=>setShow(!show)} className=''>
                    <Image
                        src={hamburg}
                        alt="getlinked"
                        width={19}
                        height={14}
                        className='ml-24 cursor-pointer'
                    />
                </div>

            </div>
            <Underline/>
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