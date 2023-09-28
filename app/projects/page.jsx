import React from "react";
import eeunizik from '../../public/ee-unizik.png';
import homedecor from '../../public/home-decor.png';
import homebuilder from '../../public/homebuilder.png';
import lorddube from '../../public/lorddube.png';
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => {
    const projectItems = [
        {
            ProjectImg: eeunizik,
            projectName: 'EE-UNIZIK',
            ProjectDescr: 'I built this Online learning learning for Electrical Engineering students in my school (UNIZIK) where they can download course outlines for each course and also dowload reading resources like handouts, exam past question and textbooks. They can also calculate their CGPA on the website.  Tech is all about giving back to the community so I deceided to give back  to the community with the skill that I have. Check it out using the link below ',
            projectStack: 'NodeJs, React, Firebase, Tailwindcss,Git,Router',
            ProjectGit: 'github.com/DesmondNzubechi/ee-nau',
            ProjectUrl: 'ee-unizik.com',
        },
        {
            ProjectImg: homedecor,
            projectName: 'HOME DECOR',
            ProjectDescr: 'Homedecor is a furniture ecommerce website where you can view different kind of furniture for your home and office. You can add items to the cart, you can also add favorite item to your wishlist. products in the cart are stored in the localstorage. You can also search for a specific product across the page. It also has checkout page for payment.',
            projectStack: ' React,Tailwindcss,Git,Router',
            ProjectGit: 'github.com/DesmondNzubechi/Home-decor',
            ProjectUrl: 'home-decor-by-nzubechukwu.vercel.app',
        },
        {
            ProjectImg: lorddube,
            projectName: 'Lorddube logistic energy',
            ProjectDescr: 'Lorddube Logistic Energy is website that I built for company located in Porthacourt Nigeria they specialize in selling of quality Oil and Gas tools . This website made it easy for their customer to access them online.',
            projectStack: ' React,Tailwindcss,Git,Router',
            ProjectGit: 'github.com/DesmondNzubechi/LORDDUBE-LORGISTIC-ENERGY.CO',
            ProjectUrl: 'lorddubelogisticsenergy.com',
        },
        {
            ProjectImg: homebuilder,
            projectName: 'HOMEBUILDER',
            ProjectDescr: 'This project is a real estate  website that I built with React, Tailwind CSS, and Firebase. I integrated Seamlessly search to explore properties based on location and budget, I integrated authentication using firebase, and  a dynamic admin dashboard for property listing, I also made the property listing available for anyone to test the features. Experience enhanced communication and discover the latest listings, making this project an invaluable addition to any real estate venture.',
            projectStack: ' React,Tailwindcss, firebase, Git,Router',
            ProjectGit: 'github.com/DesmondNzubechi/beautiful-home',
            ProjectUrl: 'buildhome.vercel.app',
        },
    ]
    return (
        <div className="py-[100px] bg-slate-50 px-10">
            <div>
                <h1 className="uppercase font-bold text-[30px]">My Projects</h1>
                <p>Take A Look At The Some Of The Project That I Built</p>
            </div>
            <div className="mt-[50px] flex items-center justify-center">
                <div className="flex flex-col gap-[100px] ">
                    {
                        projectItems.map((project, index) => {
                            return <div className="flex flex-col md:flex-row gap-5 p-5 rounded shadow" key={index}>
                                <div>
                                    <Image src={project.ProjectImg} alt={project.projectName} />
                                </div>
                                <div className="max-w-[600px] flex flex-col gap-2">
                                    <h1 className="font-semibold uppercase text-[25px]">{project.projectName}</h1>
                                    <p className="text-slate-700 text-[15px] text-wrap"> {project.ProjectDescr}</p>
                                    <p><strong className="text-[20px] capitalize">Tools used: </strong>{project.projectStack}</p>
                                    <div className="flex gap-3 items-center">
                                    <Link className="bg-blue-500 font-semibold capitalize text-slate-50 p-1 px-3 rounded text-[20px]" href={`https://${project.ProjectUrl}`}>Live link</Link>
                                        <Link className="flex items-center p-1 px-3 border text-[20px] rounded" href={`https://${project.ProjectGit}`}>code <AiFillGithub/></Link>
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