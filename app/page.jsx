import Image from 'next/image';
import Link from 'next/link';
import myImage from '../public/nzubeb2r.png';
import Projects from './projects/page';

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen lg:flex-row gap-5 bg-slate-50  flex-col py-[100px] pt-[150px] items-center font-poppins justify-around p-10">
      <div className='flex max-w-[700px] flex-col gap-5'>
        <h1 className='font-bold text-black text-[15px] font-headerFont uppercase md:text-[40px] '>Desmond Nzubechukwu</h1>
        <p className='text-[13px] text-slate-500 md:text-[25px] font-[400]'>I am a dedicated <strong className='text-slate-900'>Frontend Developer</strong> with a primary focus on delivering value and innovative solutions to businesses, organizations, and communities through the application of my skills and expertise.</p>
        <div className='flex gap-5 items-center'>
            <Link className='border p-2 rounded text-[15px] md:text-[20px] border-blue-500 text-slate-50 font-[500] hover:text-slate-50 hover:bg-slate-900 bg-blue-500' href='/projects'>My Projects</Link>
            <Link className='border p-2 rounded text-[15px] md:text-[20px] border-blue-500 text-slate-900 font-[500] hover:text-slate-50 hover:bg-slate-900' href='/about'>About Me</Link>
        </div>
      </div>
      <Image className='bg-blue-500 transition shadow-2xl ease-in delay-100   rounded-full' alt='Nzubechukwu Desmond Abugu' src={myImage}></Image>
      </main>
      <Projects/>
      </>
  )
}
