import React from "react";
import bannerImage from "../assets/olpmpians BANNER.png";

const Banner = () => {
  return (
    <div className="relative w-full" style={{ height: `calc(100vh - 1px)` }}>
      {/* Banner Image */}
      <img
        src={bannerImage}
        alt="banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;
