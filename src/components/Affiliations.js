import React from "react";
import company1 from "../assets/companies/company1.png";
import company2 from "../assets/companies/company2.png";
import company3 from "../assets/companies/company3.png";
import company4 from "../assets/companies/company4.png";
import company5 from "../assets/companies/company5.png";
import Image from "next/image";

const Affiliations = () => {
  return (
    <div>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 inter text-lg mb-8">
            Join 4,000+ companies already growing
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <Image
              src={company1}
              alt="OdeaoLabs Logo"
              width={1000}
              height={1000}
              className="w-[200px]"
            />
            <Image
              src={company2}
              alt="Kintsugi Logo"
              width={1000}
              height={1000}
              className="w-[200px]"
            />
            <Image
              src={company3}
              alt="Stacked Lab Logo"
              width={1000}
              height={1000}
              className="w-[200px]"
            />
            <Image
              src={company4}
              alt="Magnolia Logo"
              width={1000}
              height={1000}
              className="w-[200px]"
            />
            <Image
              src={company5}
              alt="WarpSpeed Logo"
              width={1000}
              height={1000}
              className="w-[200px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Affiliations;
