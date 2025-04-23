import React from 'react';

const About = () => {
  return (
    <>
    <div id='about' className="p-6 my-8">
      <div className="rounded-xl flex flex-col bg-white/10 backdrop-blur-lg border-2 border-white/40 shadow-lg">

        <div className="w-full p-6 flex items-center justify-center">
          <h2 className="fontsize-heading text-white">About Us</h2>
        </div>

        <div className=" flex flex-col font-montserrat text-white">
          {/* <img src='example.png' alt='very cool and totally not empty image' className='h-50 w-600 m-6'/> */}
          <p className='p-10 text-justify'  style={{fontSize: 'clamp(0.7rem, 1.2vw, 1rem)'}}>Texatech is where the forefront of technology meets the pulse of creativity at the GCETTS campus. It's a cutting-edge festival packed with innovative demonstrations, hackathons, and workshops designed to ignite curiosity and fuel invention. This electrifying event goes beyond just showcasing talent—it's an interface for collaboration, exploration, and transformation. Participants experience the thrill of robotics, AI advancements, and immersive tech while engaging in interactive challenges that simulate real-world problem-solving. Texatech isn't just a cultural fest; it's a platform where tech enthusiasts come to prototype their ideas, power their ambitions, and push the boundaries of what's possible.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
