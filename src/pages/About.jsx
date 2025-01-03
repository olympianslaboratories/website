import React from "react";
import imge1 from "../assets/products/olpmpians and pharma 3D-1.png"
import imge2 from "../assets/products/olpmpians and pharma 3D-2.png"
import imge3 from "../assets/products/olpmpians and pharma 3D-3.png"

const AboutUsSection = () => {
  return (
    <section className="bg-white px-4 mt-40">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Olympians Laboratories</h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our journey is a testament to our pursuit of a healthier tomorrow, as we are steadfast in our mission to ensure progressive and advanced healthcare solutions for patients in need. Our commitment is to enhance the quality of living while building an engaging, enriching, and empowering culture at Olympians.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Images */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {/* Large Image */}
            <div className="col-span-2 row-span-1 rounded-lg overflow-hidden">
              <img
                src={imge1}
                alt="image1"
                className="w-full object-cover"
              />
            </div>
            {/* Two Smaller Images */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={imge2}
                alt="image2"
                className="w-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={imge3}
                alt="image3"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center text-center md:text-left mb-40">
            <div className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25v19.5m9.75-9.75H2.25"
                />
              </svg>
            </div>
            <p className="text-gray-600 mb-6">
            Olympians Laboratories was established with a singular purpose: to manufacture and deliver affordable yet high-quality pharmaceutical products. Our mission is to empower healthcare systems worldwide by offering cost-effective alternatives to expensive proprietary drugs, particularly for developing markets where affordability is a critical concern.
<br/>
Our product portfolio includes oncology injections, anti-allergy medications, steroids, hormones, and a range of vitamin preparations, with several new pharmaceutical and proprietary innovations in development.
<br/>
At Olympians Laboratories, we prioritize excellence in manufacturing and quality assurance. All products are crafted in state-of-the-art facilities equipped with fully automated operations, ensuring consistency and precision. Our stringent quality control measures surpass standard GMP regulations, encompassing every stage of production—from raw material approval to product packaging and long-term stability testing.
<br/>
Through continuous inspections and technological advancements, we remain committed to delivering exceptional healthcare solutions that enhance the quality and accessibility of medical treatment worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
