import AboutImg from '../../public/nzube.png';
import Image from 'next/image';
import Link from 'next/link';
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
    <p className="md:text-[18px] text-slate-700 text-[12px] ">My name is <strong className="uppercase text-slate-900 font-bold">Desmond Nzubechukwu Abugu</strong>, and I am  a <strong className='capitalize'>frontend developer</strong></p>
  
  <p className="md:text-[18px] text-slate-700 text-[12px] ">In my journey as a web developer, I've led a collaborative effort to create an online learning platform  for Electrical Engineering students at my institution.  This platform provides students with easy access to their course outlines, downloadable learning resources, and a convenient CGPA calculator. It includes a dynamic blog that keeps students updated with the latest news and developments in the field of Electrical Engineering. Serving as the project manager, I oversaw the frontend development and ensured effective communication throughout the project's lifecycle.</p>
  <h1 className="text-slate-900 md:text-[30px] text-[25px] font-bold uppercase text-slate-900  font-headerFont">My skills</h1> 
  <div className='grid gap-2 uppercase grid-cols-2 md:grid-cols-4'>
                            <span className='font-semibold shadow text-center p-1 rounded'>HTML</span>
                            <span className='font-semibold shadow text-center p-1 rounded'>CSS</span>
                            <span className='font-semibold shadow text-center p-1 rounded'>JavaScript</span>
                            <span className='font-semibold shadow text-center p-1 rounded'>ReactJS</span>
                            <span className='font-semibold shadow text-center p-1 rounded'>Nextjs</span>
                            <span className='font-semibold shadow text-center p-1 rounded'>Firebase</span>
                            <span className='font-semibold shadow text-center p-1 rounded'>TailwindCSS</span>
  </div>
 <Link className='border p-2 rounded text-[15px] md:text-[20px] w-fit border-blue-500 text-slate-50 font-[500] hover:text-slate-50 hover:bg-slate-900 bg-blue-500' href='/contact'>Contact Me</Link>
 </div>
  </div>
</div>
        </div>
    </div>
}

export default About;