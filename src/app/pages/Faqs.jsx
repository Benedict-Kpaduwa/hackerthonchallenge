"use client";
import Image from "next/image";
import thinker from "../assets/thinker.svg"
import { useState } from "react";


const faqItems = [
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus mauris, dictum tempor malesuada non, posuere ut velit.",
  },
  {
    question: "What happens if I need help during the hackathon?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus mauris, dictum tempor malesuada non, posuere ut velit.",
  },
  {
    question: "What happens if I don't have an idea for a project?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus mauris, dictum tempor malesuada non, posuere ut velit.",
  },
  {
    question: "Can I join a team or do I have to come with one?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus mauris, dictum tempor malesuada non, posuere ut velit.",
  },
  {
    question: "What happens after the hackathon ends",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus mauris, dictum tempor malesuada non, posuere ut velit.",
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus mauris, dictum tempor malesuada non, posuere ut velit.",
  },
  // Add more FAQ items here
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <section>
      <div className="px-10 md:px-32 lg:grid grid-cols-2 items-center pb-10 text-center lg:text-start py-16 lg:py-0 space-y-16 lg:space-y-0">
        <div className="lg:pl-16 space-y-10 lg:space-y-4">
          <h3 className="bulb">
            Frequently Asked
            <br /> <span className="text-[#D434FE]">Question</span>
          </h3>
          <p className="lg:max-w-[350px]">
            <span className="text-gray-300">
              We got answers to the questions that you might want to ask about{" "}
            </span>
            getlinked Hackathon 1.0
          </p>
          <div className="lg:max-w-md">
      {faqItems.map((item, index) => (
        <div
          className="border-b border-[#D434FE] rounded mb-2 overflow-hidden"
          key={index}
        >
          <p
            className="cursor-pointer flex justify-between items-center py-2 text-gray-300"
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span className="faq-icon text-[#D434FE]">+</span>
          </p>
          {activeIndex === index && (
            <p className="p-4 text-start text-gray-300">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
        </div>
        <div className="min-w-[45vw]">
          <Image
            src={thinker}
            alt="Vercel Logo"
            width={664}
            height={664}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
