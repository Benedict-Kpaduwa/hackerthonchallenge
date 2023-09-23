import Image from "next/image";
import React from "react";
import logo from "../assets/logo.svg"
import x from "../assets/x.svg"
import fb from "../assets/fb.svg"
import linkedin from "../assets/linkedin.svg"
import ig from "../assets/ig.svg"
import phone from "../assets/phone.svg"
import location from "../assets/location.svg"
import Link from "next/link";

const links = [
    {
      name: "TImeline",
      path: "#timeline",
    },
    {
      name: "Overview",
      path: "#overview",
    },
    {
      name: "FAQs",
      path: "#faq",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

const socials = [
  {
    label: "instagram",
    icon: ig,
  },
  {
    label: "x",
    icon: x,
  },
  {
    label: "facebook",
    icon: fb,
  },
  {
    label: "linkedin",
    icon: linkedin,
  },
];

const Footer = () => {
  return (
    <div className="bg-[#100B20] px-32 py-16 flex flex-col space-y-10 text-[12px]">
      <div className="flex lg:flex-row sm:flex-col items-start justify-between">

        <div className="flex flex-col space-y-8 text-gray-300 mb-5">
          <div>
            <Image
              src={logo}
              alt="Vercel Logo"
              width={143}
              height={37}
              priority
            />
            <p className="max-w-[450px]">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link className="cursor-pointer" href="#jc">Terms of use</Link>
            <div className="bg-tertiary h-[17px] w-[2px]"></div>
            <Link className="cursor-pointer" href="#privacy">Privacy Policy</Link>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-tertiary font-bold text-[14px] leading-6">Useful Links</p>
          <ul className="space-y-3">
            {links.map((link, index) => (
              <li key={index} className="cursor-pointer">
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4 items-center">
            <p className="text-tertiary font-bold text-[14px] leading-6">Follow Us</p>
            <div className="flex space-x-4">
              {socials.map((socialIcon, index) => (
                <Image
                  key={index}
                  src={socialIcon.icon}
                  alt={socialIcon.label}
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-tertiary font-bold text-[14px] leading-6">Contact Us</p>
          <div className="flex space-x-3 text-gray-300">
            <Image
              src={phone}
              alt="phone"
              width={12}
              height={12}
              priority
            />
            <p>+234 679 81819</p>
          </div>
          <div className="flex items-start space-x-3 text-gray-300 max-w-[150px]">
            <Image
              className="pt-1"
              src={location}
              alt="Vercel Logo"
              width={12}
              height={12}
              priority
            />
            <p>27,Alara Street Yaba 100012 Lagos State</p>
          </div>
        </div>
      </div>
      {/* Bottom Copyright */}
      <div className="flex items-center justify-center">
        <p>All rights reserved. © getlinked Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
