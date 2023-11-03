import AboutImg from '../../public/nzube.png';
import Image from 'next/image';
import Link from 'next/link';
import { TbBrandNextjs } from 'react-icons/tb';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoJavascript, BiLogoFirebase, BiLogoTailwindCss } from 'react-icons/bi';
import { FaReact, FaBootstrap } from 'react-icons/fa';

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
    <div className="text-slate-700 font-fonty max-w-[700px] flex flex-col gap-4 ">
    <p className="md:text-[18px] text-slate-700 font-[500]  text-[15px] ">My name is <strong className="uppercase text-slate-900 font-bold">Desmond Nzubechukwu Abugu</strong>, and I am  a <strong className='capitalize'>frontend developer</strong></p>
  {/* <p className="md:text-[18px] text-slate-700 text-[12px] ">In my journey as a web developer, I've led a collaborative effort to create an online learning platform  for Electrical Engineering students at my institution.  This platform provides students with easy access to their course outlines, downloadable learning resources, and a convenient CGPA calculator. It includes a dynamic blog that keeps students updated with the latest news and developments in the field of Electrical Engineering. Serving as the project manager, I oversaw the frontend development and ensured effective communication throughout the project's lifecycle.</p> */}
              <p className="md:text-[18px] text-slate-700 font-[500]  text-[15px] ">In my journey as a web developer, I've led a collaborative effort to create an online learning platform for Electrical Engineering students at my institution.</p> 
              <p className="md:text-[18px] text-slate-700 font-[500]  text-[15px] ">This platform provides students with easy access to their course outlines, downloadable learning resources, and a convenient CGPA calculator.</p> 
              <p className="md:text-[18px] text-slate-700 font-[500]  text-[15px] ">It includes a dynamic blog that keeps students updated with the latest news and developments in the field of Electrical Engineering. </p> 
              <p className="md:text-[18px] text-slate-700 font-[500]  text-[15px] ">Serving as the project manager, I oversaw the frontend development and ensured effective communication throughout the project's lifecycle.</p> 
 <Link className='border p-2 rounded text-[15px] md:text-[20px] w-fit border-blue-500 text-slate-50 font-[500] hover:text-slate-50 hover:bg-slate-900 bg-blue-500' href='/contact'>Contact Me</Link>
 </div>
  </div> 
        </div>
        <div data-aos='fade-up' data-aos-duration='1000' className='py-[50px] '>
        <h1 className="text-slate-900 md:text-[30px] text-center text-[25px] font-bold uppercase text-slate-900 mb-[40px] font-headerFont">My skills</h1> 
          <div className='grid gap-5 md:gap-[40px]  grid-cols-2 md:grid-cols-4'>
            <div className='flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  '>
              <AiFillHtml5 className='text-[100px] text-blue-500 '/>
              <h2 className='text-slate-900  font-semibold text-[20px]'>HTML</h2>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  '>
              <BiLogoCss3 className='text-[100px] text-blue-500 '/>
              <h2 className='text-slate-900  font-semibold text-[20px]'>CSS</h2>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  '>
              <FaBootstrap className='text-[100px] text-blue-500 '/>
              <h2 className='text-slate-900 font-semibold text-[20px]'>Bootstrap</h2>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  '>
              <BiLogoTailwindCss className='text-[100px] text-blue-500 '/>
              <h2 className='text-slate-900  font-semibold text-[20px]'>TailwindCSS</h2> 
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  '>
              <BiLogoJavascript className='text-[100px] text-blue-500 '/>
              <h2 className='text-slate-900  font-semibold text-[20px]'>Javascript</h2>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  '>
              <FaReact className='text-[100px] text-blue-500 '/>
              <h2 className='text-slate-900  font-semibold text-[20px]'>ReactJs</h2>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  '>
              <TbBrandNextjs className='text-[100px] text-blue-500 '/>
              <h2 className='text-slate-900  font-semibold text-[20px]'>NextJs</h2>
            </div>
            <div className='flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  '>
              <BiLogoFirebase className='text-[100px] text-blue-500 '/>
              <h2 className='text-slate-900  font-semibold text-[20px]'>Firebase</h2>
            </div>
                            {/* <span className='font-semibold shadow text-center p-1 rounded'>HTML</span>
                            <span className='font-semibold shadow text-center p-1 rounded'>CSS</span>
                            <span className='font-semibold shadow text-center p-1 rounded'>JavaScript</span>
                            <span className='font-semibold shadow text-center p-1 rounded'>ReactJS</span>
                            <span className='font-semibold shadow text-center p-1 rounded'>Nextjs</span>
                            <span className='font-semibold shadow text-center p-1 rounded'>Firebase</span>
                            <span className='font-semibold shadow text-center p-1 rounded'>TailwindCSS</span> */}
  </div>
        </div>
      </div>
      
    </div>
}

export default About;