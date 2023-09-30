import React from "react";
import eeunizik from '../../public/ee-unizik.png';
import homedecor from '../../public/home-decor.png';
import homebuilder from '../../public/homebuilder.png';
import lorddube from '../../public/lorddube.png';
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from 'react-icons/ai';
import { GiLinkedRings } from 'react-icons/gi';

const Projects = () => {
    const projectItems = [
        {
            ProjectImg: eeunizik,
            projectName: 'EE-UNIZIK',
            ProjectDescr: 'My colleague and I collaborated on developing an online learning platform for Electrical Engineering students at UNIZIK, where I served as the project manager and also personally developed the entire frontend. This innovative platform offers students access to course outlines, downloadable resources like handouts, exam past questions, and textbooks, along with a CGPA calculator for grade tracking students grade. Additionally, we maintain an informative blog section for updates in the field of electrical engineering.',
            projectStack: [ 'NodeJs', 'React',  'Firebase', 'Tailwindcss'],
            ProjectGit: 'github.com/DesmondNzubechi/ee-nau',
            ProjectUrl: 'ee-unizik.com',
        },
        {
            ProjectImg: homedecor,
            projectName: 'HOME DECOR',
            ProjectDescr: 'Homedecor is a dedicated e-commerce platform specializing in furniture, offering a diverse range suitable for both homes and offices. the website ensures a seamless shopping experience, enabling users to explore an extensive catalog of furniture items. Users can conveniently add items to their shopping cart and create a personalized wishlist. The cart utilizes local storage for efficient item management. Additionally, a powerful search feature assists users in locating specific products. Notably, the website features a robust authentication system, allowing only authenticated users to access the checkout process.',
            projectStack: [' React','Firebase', 'Tailwindcss'],
            ProjectGit: 'github.com/DesmondNzubechi/Home-decor',
            ProjectUrl: 'home-decor-by-nzubechukwu.vercel.app',
        },
        {
            ProjectImg: lorddube,
            projectName: 'Lorddube logistic energy',
            ProjectDescr: 'I developed the Lorddube Logistic Energy website for a company based in Port Harcourt, Nigeria, specializing in the distribution of high-quality oil and gas tools. This website has been instrumental in providing an online platform for their customers to easily access their products and services, thereby enhancing their digital presence and customer reach.',
            projectStack: [ 'React', 'Tailwindcss', 'Git', 'Router'],
            ProjectGit: 'github.com/DesmondNzubechi/LORDDUBE-LORGISTIC-ENERGY.CO',
            ProjectUrl: 'lorddubelogisticsenergy.com',
        },
        {
            ProjectImg: homebuilder,
            projectName: 'HOMEBUILDER',
            ProjectDescr: 'This project is a real estate  website that I built with React, Tailwind CSS, and Firebase. I integrated Seamlessly search to explore properties based on location and budget, I integrated authentication using firebase, and  a dynamic admin dashboard for property listing, I also made the property listing available for anyone to test the features. Experience enhanced communication and discover the latest listings, making this project an invaluable addition to any real estate venture.',
            projectStack:  [' React', 'Tailwindcss' , 'firebase'],
            ProjectGit: 'github.com/DesmondNzubechi/beautiful-home',
            ProjectUrl: 'buildhome.vercel.app',
        },
    ]
    return (
       
        <div className="py-[100px] font-poppins pt-[150px] bg-slate-50 overflow-x-hidden px-[20px]">
            <div className="text-center">
                <h1 className="uppercase text-blue-500 font-bold font-headerFont text-[25px] md:text-[50px]">My Projects</h1>
                <p className="text-[15px] md:text-[25px] text-slate-700 font-semibold">Take A Look At The Some Of The Project That I Built</p>
            </div>
            <div className="mt-[50px] flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-[50px] ">
                    {
                        projectItems.map((project, index) => {
                            return <div className="flex flex-col h-full justify-center  bg-white rounded-2xl  gap-2 p-5 rounded shadow-2xl" key={index}>
                                <div>
                                    <Image className="shadow   rounded" src={project.ProjectImg} alt={project.projectName} />
                                </div>
                                <div className=" flex flex-col gap-4">
                                    <h1 className="font-bold uppercase text-slate-900 text-[25px]">{project.projectName}</h1>
                                    <p className="text-slate-700  text-[12px] md:text-[15px] text-wrap"> {project.ProjectDescr}</p>
                                    <p className=" flex gap-2 p-1 shadow  p-2 rounded items-center"> <b className="text-slate-900">TOOLS:</b>  {project.projectStack.map(stack => {
                                        return <span className={`md:text-[15px] text-[12px] font-semibold text-slate-700   rounded w-full text-center  capitalize`}> {stack}</span>
                                    })} </p>
                                    <div className="flex gap-3 items-center">
                                    <Link className="bg-blue-500 text-center flex items-center justify-center gap-2 w-full hover:bg-slate-900 capitalize text-slate-50 p-1 px-3 rounded text-[20px]" href={`https://${project.ProjectUrl}`}>Live <GiLinkedRings /></Link>
                                        <Link className="flex w-full justify-center gap-2 items-center hover:bg-slate-900 hover:text-slate-50 text-slate-900 p-1 px-3 border text-[20px] rounded" href={`https://${project.ProjectGit}`}>code <AiFillGithub/></Link>
                                   </div>
                                </div>
                            </div>
                        } )
}
                </div>
            </div>
            </div>
            
    )
}

export default Projects;