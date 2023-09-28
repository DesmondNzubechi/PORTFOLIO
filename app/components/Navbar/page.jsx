import { AiOutlineMenu } from 'react-icons/ai';
import { FaXmark } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const navs = ['home', 'about', 'projects', 'contact']
    return (
        <header className='fixed bg-slate-50 shadow-xl flex flex-row justify-between py-[20px] px-[30px]'>
            <Link href='/'>Nzubechukwu</Link>
            <ul>
                {navs.map(link => {
                    return <li><Link href={link == 'home' ? '/' : link}>{ link}</Link></li>
})}
            </ul> 
            <div className='flex items-center gap-3 '>
                <AiOutlineMenu />
                <FaXmark/>
            </div>
       </header>
    )
}

export default Navbar;