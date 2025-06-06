import React from "react";

const Sponsors = ({sponsors}) => {
  const SponsorSet = sponsors.map((sponsor) => (
    <div
      key={sponsor.id}
      className="sponsor-logo transition-all duration-300 hover:scale-110"
    >
      <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
      <img
        src={sponsor.logo}
        alt={`${sponsor.name} logo`}
        className="w-35 hover:grayscale-0 transition-all duration-300"
      />
      </a>
    </div>
  ))

  return (
    <div id='sponsors' className="w-full h-64 border-bottomgrad border-t-4 border-purple-600 clip-path-bottomslant">
      <div className="w-full h-62 clip-path-bottomslant bg-black/85">
        <h2 className="text-center py-8 text-white fontsize-heading">Our Sponsors</h2>

        <div className="flex flex-wrap justify-center items-center gap-5"> {SponsorSet} </div>
      </div>
    </div>
  );
};

export default Sponsors;