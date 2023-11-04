'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaXmark } from 'react-icons/fa6';
import Link from 'next/link';
import { BsGithub , BsLinkedin} from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname(); 
    const navs = ['about', 'projects', 'contact']
  const [showNav, setShowNav] = useState('right-[-1000px]')
    return ( 
        <nav className='fixed z-[100] w-full bg-slate-50 overflow-x-hidden shadow-2xl flex flex-row justify-between py-[20px] z-[100] px-[30px]'>
            <Link className='font-headerFont  font-bold text-black uppercase text-[25px]' href='/'>Nzubechukwu</Link>
          
            <ul className={` font-fonty fixed ${showNav} w-[50%] md:w- top-0 justify-center  md:static items-center bottom-0 md:px-0 md:py-0 py-[50px]  gap-[20px] px-[100px] md:px-[20px] flex flex-col md:flex-row  bg-slate-50 md:bg-0 rounded  shadow-xl md:shadow-none capitalize text-center transition duration-1000 ease-in ... `}>
       {navs.map(link => {
                    return <li><Link onClick={() => setShowNav('right-[-1000px]')} className={`link ${pathname == `/${link}`? 'font-bold' : ''} text-slate-900 text-[25px] `} href={link == 'home' ? '/' : link}>{ link}</Link></li>
       })}
                <hr />
                     <div className='flex md:hidden gap-3 items-center'>
                     <Link className='flex flex-row gap-2 items-center' href='https://github.com/DesmondNzubechi'>   <BsGithub className='text-slate-900 hover:text-blue-500  bg-white shadow-2xl p-1 text-[30px] rounded-full ' /> </Link>
                     <Link className='flex flex-row gap-2 items-center' href='https://linkedin.com/in/desmond-nzubechukwu-388954222/'> <BsLinkedin className='text-slate-900 hover:text-blue-500 rounded  bg-white shadow-2xl p-1 text-[30px] rounded-full '/></Link>
                     <Link className='flex flex-row gap-2 items-center' href='https://twitter.com/Nzubechukwudev'> <AiFillTwitterCircle className='text-slate-900 hover:text-blue-500 bg-white shadow-2xl p-1 text-[30px] rounded-full '/></Link>
        </div>
                </ul> 
               
            <div  className='relative z-10 flex md:hidden items-center '>
              { showNav == 'right-[-1000px]' ? <AiOutlineMenu onClick={() => setShowNav('right-0')} className='text-[30px] text-black hover:text-blue-500' /> :
                <FaXmark onClick={() => setShowNav('right-[-1000px]')} className='text-[30px] text-black hover:text-red-500'/>}
         </div>
       </nav>
    )
}

export default Navbar;