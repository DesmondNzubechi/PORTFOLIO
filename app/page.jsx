import Image from 'next/image';
import Link from 'next/link';
import myImage from '../public/nzubeb2r.png';
import { BsGithub , BsLinkedin} from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';


export default function Home() {
  return (
    <main className="flex min-h-screen md:flex-row gap-5 bg-slate-50  flex-col py-[100px] pt-[150px] items-center justify-around p-10">
      <div className='flex max-w-[500px] flex-col gap-5'>
        <h1 className='font-bold text-[30px] md:text-[40px] '>Desmond Nzubechukwu</h1>
        <p className='text-[20px] text-slate-500 md:text-[25px] font-[400]'>I Build User-Friendly And Accessible Products That Effectively Cater To The Needs Of The Target Audience.</p>
        <div className='flex gap-5 items-center'>
          <Link className='border p-3 rounded text-[20px] border-slate-500 text-slate-900 font-[500] hover:text-slate-50 hover:bg-slate-900' href='/'>Contact Me</Link>
          <Link className='border p-3 rounded text-[20px] border-blue-500 text-slate-50 font-[500] hover:text-slate-50 bg-blue-500' href=''>My Projects</Link>
        </div>
      </div>
      <Image className='bg-blue-500 transition shadow-2xl ease-in delay-100   rounded-full' alt='Nzubechukwu Desmond Abugu' src={myImage}></Image>
    </main>
  )
}
