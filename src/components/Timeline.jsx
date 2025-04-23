import React from "react";

const Timeline = () => {
  return (
    <>
    <div id="timeline" className="w-full h-25 border-topgrad clip-path-topslant relative">
        <div className="w-full h-24 clip-path-topslant bg-black/85 absolute bottom-0">
          <h1 className="fontsize-heading text-center text-white pt-10">Timeline</h1>
        </div>
    </div>
    <div className="w-full h-auto bg-black/85 flex justify-center border-b-4 border-purple-600">
        <img
            src='/images/comingsoon.png'
            alt ="Very cool timeline"
            className="pb-20 pt-10 w-120 h-auto"
        />
    </div>
    </>
  );
};

export default Timeline;