import Landing from '@/components/Landing';
import Events from '@/components/Events';
import Sponsors from '@/components/Sponsors';
import Timeline from '@/components/Timeline';
import About from '@/components/About';

const Home = () => {
  const logicstratevents = ['INNOVA', 'LOGIQ', 'THINKFAST', 'CHESS', 'DEBATTLE'];
  const createinnovateevents = ['UNSCRIPTED', 'CAPTURA', 'ELOQUENCE', 'COLOURSPLASH'];

  const sponsors = [
    { id: 1, name: "Geogo", logo: "images/geogo.png", website: "https://geogo.in/" },
    { id: 2, name: "Oerlikon Textile", logo: "https://cdn.brandfetch.io/idd7INCOuX/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", website: "https://oerlikon.com/" },
    { id: 3, name: "Unstop", logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/blue/Unstop-Logo-Blue.svg", website: "https://unstop.com/" },
    // { id: 4, name: "Sponsor 4", logo: "images/comingsoon.png" },
  ];

  return (
    <>
      <Landing />
      <div className="bg-[url('/images/BG.png')] h-auto w-full bg-cover relative overflow-x-hidden">
        <Sponsors sponsors={sponsors} />
        <Events heading='Logic & Strategy' contents={logicstratevents} rotation={345} />
        <Events heading='Creation & Innovation' contents={createinnovateevents} rotation={15} />
        <Timeline />
        <About />
      </div>
    </>
  );
}

export default Home;