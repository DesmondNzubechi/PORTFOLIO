'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaXmark } from 'react-icons/fa6';
import Link from 'next/link';
import { BsGithub , BsLinkedin} from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const navs = ['about', 'projects', 'contact']
    const [showNav, setShowNav] = useState('right-[-1000px]')
    return (
        <nav className='fixed w-full bg-slate-50 overflow-x-hidden shadow-2xl flex flex-row justify-between py-[20px] px-[30px]'>
            <Link className='font-bold text-black uppercase text-[25px]' href='/'>Nzubechukwu</Link>
          
            <ul className={` font-fonty fixed ${showNav} w-[50%] md:w- top-0 justify-center md:static items-center bottom-0 md:px-0 md:py-0 py-[50px]  gap-[20px] px-[100px] flex flex-col md:flex-row  bg-slate-50 md:bg-0 rounded  shadow-xl md:shadow-none capitalize text-center `}>
       {navs.map(link => {
                    return <li><Link onClick={() => setShowNav('right-[-1000px]')} className={`link ${pathname == `/${link}`? 'font-bold' : ''} text-slate-900 text-[25px] `} href={link == 'home' ? '/' : link}>{ link}</Link></li>
       })}
                <hr />
                     <div className='flex md:hidden gap-3 items-center'>
          <BsGithub className='text-slate-900 text-[20px] ' />
          <BsLinkedin className='text-slate-900 rounded  text-[20px] '/>
          <AiFillTwitterCircle className='text-slate-900 text-[20px] '/>
        </div>
                </ul> 
               
            <div  className='relative z-10 flex md:hidden items-center '>
              { showNav == 'right-[-1000px]' ? <AiOutlineMenu onClick={() => setShowNav('right-0')} className='text-[40px] text-black hover:text-blue-500' /> :
                <FaXmark onClick={() => setShowNav('right-[-1000px]')} className='text-[40px] text-black hover:text-red-500'/>}
         </div>
       </nav>
    )
}

export default Navbar;