import Landing from '@/components/Landing';
import Events from '@/components/Events';
import Sponsors from '@/components/Sponsors';
import Timeline from '@/components/Timeline';
import About from '@/components/About';

const Home = () => {
  const techevents = ['INNOVA', 'LOGIQ', 'Sudoku', 'Paper Presentation', 'Aptitude'];
  const cultevents = ['Extempore', 'Debate', 'Recitation', 'Drawing', 'Chess'];

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
        <Events heading='Technical Events' contents={techevents} rotation={345} />
        <Events heading='Cultural Events' contents={cultevents} rotation={15} />
        <Timeline />
        <About />
      </div>
    </>
  );
}

export default Home;