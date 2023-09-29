import AboutImg from '../../public/nzube.png';
import Image from 'next/image';
const About = () => {
    return <div className="min-h-[100vh] bg-slate-50">
   <div className="px-[30px] pb-[50px] to-blue-900 pt-[150px] min-h-[100vh] ">
<div className="flex flex-col lg:flex-row justify-around items-start gap-5">
<div data-aos='fade-up' data-aos-duration='1000' className="    rounded ">
                     <Image src={AboutImg} alt="Nzubechukwu" className="rounded bg-blue-500 rounded-xl "  srcset="" />
                   {/* <h1 className="text-slate-50 md:text-[30px] text-[25px]  font-myfont">About Me</h1>*/}
       </div>
  <div data-aos='fade-up' data-aos-duration='1000' className=" flex flex-col gap-5">
    <h1 className="text-slate-900 md:text-[30px] text-[25px] font-bold uppercase text-slate-900  font-headerFont">About Me</h1>
    <div className="text-slate-700 font-fonty max-w-[700px] flex flex-col gap-2 ">
    <p className="md:text-[17px] text-slate-700 text-[15px] ">Hi, my name is <strong className="uppercase text-slate-900 font-bold">Desmond Nzubechukwu Abugu</strong> , and I am a frontend web developer with expertise in <strong>JavaScript, ReactJS, Nextjs, Firebase, and TailwindCSS</strong> . With my experience in the tech industry, I have had the opportunity to work on a couple of projects, both simple websites and complex web applications.</p>
  <p className="md:text-[17px] text-[15px] ">I am passionate about creating seamless user experiences and strive to ensure that all of my products are accessible to all users, regardless of their technical abilities.</p>
 { /*<p className="md:text-[17px] text-[15px] ">In my career journey I have had the opportunity to collaborate with cross-functional teams, including designers, backend developers, and project managers, to deliver high-quality products on time and within budget. I am a strong communicator and collaborator, and enjoy working in fast-paced and dynamic environments.</p>
  <p className="md:text-[17px] text-[15px] ">When I'm not coding, you can find me exploring the latest frontend development trends and technologies, attending meetup, and experimenting with new projects. I am constantly seeking out opportunities to learn and grow as a developer and am excited about the future of web development and the endless possibilities it holds.</p>*/}
 {// <p className="md:text-[17px] text-[15px] ">Overall, I am a dedicated and experienced frontend web developer with a passion for creating user-friendly and visually stunning web applications. My expertise in HTML, CSS, JavaScript, ReactJS, and TailwindCSS allows me to bring complex ideas to life with efficiency and precision.</p>
  }</div>
  </div>
</div>
        </div>
    </div>
}

export default About;