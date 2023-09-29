import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
const Contact = () => {
    return <div className='py-[100px] flex font-poppins items-center justify-center bg-slate-50 min-h-[100vh] '>
        <div>
        <div className='text-center'>
            <h1 className='text-blue-500 text-[30px] md:text-[60px] font-bold uppercase font-headerFont mt-[40px]'>Contact me</h1>
            <p className='font-semibold text-slate-600 text-[20px] md:text-[30px]'>Hit me up! let's talk</p>
            </div>
            <div className='grid gap-5 my-[30px] grid-cols-2 '>
                <Link className='flex flex-row gap-2 items-center' href=''>
                <AiFillLinkedin className='text-blue-500 text-[30px] md:text-[50px] p-1 md:p-2 bg-white rounded-full shadow-2xl' />
                    <p className='text-slate-700 text-[20px]'>LinkedIn</p>
                </Link>
              <Link className='flex flex-row gap-2 items-center' href=''>
                <AiFillGithub className='text-blue-500 text-[30px] md:text-[50px] p-1 md:p-2 bg-white rounded-full shadow-2xl'/>
                    <p className='text-slate-700 text-[20px]'>GitHub</p>
                </Link>
              <Link className='flex flex-row gap-2 items-center' href=''>
                <AiFillTwitterCircle className='text-blue-500 text-[30px] md:text-[50px] p-1 md:p-2 bg-white rounded-full shadow-2xl'/>
                    <p className='text-slate-700 text-[20px]'>Twitter</p>
                </Link>
              <Link className='flex flex-row gap-2 items-center' href=''>
                <AiOutlineMail className='text-blue-500 text-[30px] md:text-[50px] p-1 md:p-2 bg-white rounded-full shadow-2xl'/>
                    <p className='text-slate-700 text-[20px]'>Email</p>
                </Link>
            </div>
        </div>
        </div>
}


export default Contact;