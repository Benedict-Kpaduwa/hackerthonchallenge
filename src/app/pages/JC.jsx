import Image from "next/image";
import React from "react";
import people from "../assets/people.svg"
import Button from "../components/Button";
const attributes = [
  {
    heading: "Innovation and Creativity",
    content: `Evaluate the uniqueness and creativity of the
solution. Consider whether it addresses a real-world problem in a novel 
way or introduces innovative features`,
  },
  {
    heading: "Functionality",
    content: `Assess how well the solution works. Does it perform its 
intended functions effectively and without major issues? Judges would
consider the completeness and robustness of the solution.`,
  },
  {
    heading: "Technical Complexity",
    content: `Evaluate the technical sophistication of the solution. 
Judges would consider the complexity of the code, the use of advanced 
technologies or algorithms, and the scalability of the solution.`,
  },
  {
    heading: "Adherence to Hackathon Rules",
    content: `Judges will Ensure that the team adhered 
to the rules and guidelines of the hackathon, including deadlines, use of 
specific technologies or APIs, and any other competition-specific requirements.`,
  },
];
const JC = () => {
  return (
    <section className="min-h-screen">
      <div className="px-10 md:px-36 py-14 lg:grid grid-cols-2 lg:space-x-14 items-center">
        {/* Judging image */}
        <div className="pl-16">
          <Image
            src={people}
            alt="Vercel Logo"
            width={710}
            height={662}
            priority
          />
        </div>
        {/* Criteria points */}
        <div className="space-y-10 text-center lg:text-start">
          <div className="space-y-3">
            <h3 className="bulb">
              Judging Criteria <br />{" "}
              <span className="text-[#D434FE]">Key attributes</span>
            </h3>
            <div className="max-w-[500px] space-y-3">
              {attributes.map((attribute, index) => (
                <div key={index}>
                  <p>
                    <span className="font-bold text-[16px] text-[#FF26B9]">
                      {attribute.heading}
                    </span>
                    : {attribute.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Button label="Read More" />
        </div>
      </div>
    </section>
  );
};

export default JC;
