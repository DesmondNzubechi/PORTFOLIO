"use client";
import React, { useEffect } from "react";
import eeunizik from "../../public/ee-unizik.png";
import homedecor from "../../public/home-decor.png";
import homebuilder from "../../public/homebuilder.png";
import lorddube from "../../public/lorddube.png";
import canoegroups from "../../public/canoegroups.png";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { GiLinkedRings } from "react-icons/gi";
import mySocial from "../../public/Mysocial.png";
import realEstate from "../../public/realestate.png";
import uevent from "../../public/uevent.png";
import lawFirm from "../../public/LawFirm.png";
import attendify from "../../public/attendify.png";
import Aos from "aos";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const projectItems = [
    {
      ProjectImg: attendify,
      projectName: "Attendify",
      ProjectDescr:
        "Attendify is a web-based attendance management system designed to modernize how students' attendance is tracked and recorded in academic environments. I developed this project to solve the challenges we face with paper attendance in my school. The idea is to manage attendance digitally, where students' attendance for each class is recorded online, stored safely, and can be downloaded anytime. With this system, the school management can also easily monitor students' attendance performance without dealing with lost papers.",
      projectStack: [
        "React",
        "NodeJs",
        "ExpressJs",
        "Typescript",
        "Tailwindcss",
      ],
      ProjectGit: "https://github.com/DesmondNzubechi/ATTENDIFY-BACKEND",
      ProjectUrl: "attendified.vercel.app/",
      label: "link to attendify",
    },
    {
      ProjectImg: lawFirm,
      projectName: "Your Favorite Immigration Law Firm",
      ProjectDescr:
        "I developed this website for an immigration law firm located in the united states that specializes in providing comprehensive immigration services. The site enhances their online visibility, builds trust with potential clients, and effectively showcases their expertise to a global audience.",
      projectStack: ["React", "Superbase", "Typescript", "Tailwindcss"],
      ProjectGit: "github.com/DesmondNzubechi",
      ProjectUrl: "yourfavoriteimmigrationlawfirm.com",
      label: "link to your facorite immigration law firm",
    },
    {
      ProjectImg: eeunizik,
      projectName: "EE-UNIZIK",
      ProjectDescr:
        "My colleague and I collaborated on developing an online learning platform for Electrical Engineering students at UNIZIK, where I served as the project manager and also personally developed the entire frontend. This innovative platform offers students access to course outlines, downloadable resources like handouts, exam past questions, and textbooks, along with a CGPA calculator for grade tracking students grade. Additionally, we maintain an informative blog section for updates in the field of electrical engineering.",
      projectStack: ["NodeJs", "React", "Firebase", "Tailwindcss"],
      ProjectGit: "github.com/DesmondNzubechi/Unizik-EE",
      ProjectUrl: "eeunizik.vercel.app",
      label: "link to ee-unizik",
    },
    {
      ProjectImg: uevent,
      projectName: "UEVENT MANAGEMENT",
      ProjectDescr:
        "UEVENT MANAGEMENT is an event booking system that helps users buy and sell event tickets easily. It lets people find events, purchase tickets, and manage their bookings quickly. The platform is simple to use, works on all devices, and ensures secure transactions for both event organizers and attendees.",
      projectStack: ["NodeJs", "NextJs", "Typescript", "Tailwindcss"],
      ProjectGit: "github.com/DesmondNzubechi/EVENT-MANAGEMENT-FRONTEND",
      ProjectUrl: "ueventmanagement.vercel.app/",
      label: "link to uevent management",
    },
    {
      ProjectImg: realEstate,
      projectName: "HOME FEATURES",
      ProjectDescr:
        "Home Features is a Real Estate Platform, designed to offer a seamless user experience for exploring property listings, managing user accounts, and interacting with blog content. It integrates with a backend API to provide real-time property data, account management features, and a responsive, mobile-friendly design.",
      projectStack: ["NodeJs", "NextJs", "Typescript", "Tailwindcss"],
      ProjectGit: "github.com/DesmondNzubechi/REAL-ESTATE-FRONTEND",
      ProjectUrl: "homefeatures-frontend.vercel.app/",
      label: "link to home features",
    },
    {
      ProjectImg: mySocial,
      projectName: "MySocial",
      ProjectDescr:
        "MYsocial is a project I made, a friendly social platform for chatting and building community. With instant messaging, chatting with friends or new people is simple. Share your thoughts, stories, and pictures to celebrate or talk about trends. Interact by liking, reposting, and commenting on posts from others, creating a lively community with shared interests. MYsocial is about meaningful connections, where you can explore, chat, and share in a welcoming space. It's all about making online socializing enjoyable and easy, evolving to make connecting with others a breeze.",
      projectStack: [" NextJs", "Typescript", "firebase", "Tailwindcss"],
      ProjectGit: "github.com/DesmondNzubechi/MY-SOCIAL",
      ProjectUrl: "myusocial.vercel.app",
      label: "link to my social",
    },
    {
      ProjectImg: homedecor,
      projectName: "HOME DECOR",
      ProjectDescr:
        "Homedecor is a dedicated e-commerce platform specializing in furniture, offering a diverse range suitable for both homes and offices. the website ensures a seamless shopping experience, enabling users to explore an extensive catalog of furniture items. Users can conveniently add items to their shopping cart and create a personalized wishlist. The cart utilizes local storage for efficient item management. Additionally, a powerful search feature assists users in locating specific products. Notably, the website features a robust authentication system, allowing only authenticated users to access the checkout process.",
      projectStack: [" React", "Firebase", "Tailwindcss"],
      ProjectGit: "github.com/DesmondNzubechi/Home-decor",
      ProjectUrl: "home-decor-by-nzubechukwu.vercel.app",
      label: "link to home-decor",
    },
    {
      ProjectImg: canoegroups,
      projectName: "CANOE GROUPS",
      ProjectDescr:
        "I built this website for a prominent US-based company specializing in project design, implementation, and execution across various scales within emerging markets. I created an administrative dashboard that enables the company's administrators the ability to post, update, and delete relevant information on the website. This functionality provided the company with the flexibility it needed to keep its online presence current and informative.",
      projectStack: [" React", "Tailwindcss", "firebase"],
      ProjectGit: "github.com/DesmondNzubechi/CANOEGROUPS",
      ProjectUrl: "canoegroups.com",
      label: "link to canoe groups",
    },
    {
      ProjectImg: lorddube,
      projectName: "Lorddube logistic energy",
      ProjectDescr:
        "I developed the Lorddube Logistic Energy website for a company based in Port Harcourt, Nigeria, specializing in the distribution of high-quality oil and gas tools. This website has been instrumental in providing an online platform for their customers to easily access their products and services, thereby enhancing their digital presence and customer reach.",
      projectStack: ["React", "Tailwindcss", "Git", "Router"],
      ProjectGit: "github.com/DesmondNzubechi/LORDDUBE-LORGISTIC-ENERGY.CO",
      ProjectUrl: "lorddubelogisticsenergy.com",
      label: "link to Lorddube logistics energy",
    },
    {
      ProjectImg: homedecor,
      projectName: "HOME DECOR",
      ProjectDescr:
        "Homedecor is a dedicated e-commerce platform specializing in furniture, offering a diverse range suitable for both homes and offices. the website ensures a seamless shopping experience, enabling users to explore an extensive catalog of furniture items. Users can conveniently add items to their shopping cart and create a personalized wishlist. The cart utilizes local storage for efficient item management. Additionally, a powerful search feature assists users in locating specific products. Notably, the website features a robust authentication system, allowing only authenticated users to access the checkout process.",
      projectStack: [" React", "Firebase", "Tailwindcss"],
      ProjectGit: "github.com/DesmondNzubechi/Home-decor",
      ProjectUrl: "home-decor-by-nzubechukwu.vercel.app",
      label: "link to home-decor",
    },
    // {
    //     ProjectImg: homebuilder,
    //     projectName: 'HOMEBUILDER',
    //     ProjectDescr: 'This project is a real estate  website that I built with React, Tailwind CSS, and Firebase. I integrated Seamlessly search to explore properties based on location and budget, I integrated authentication using firebase, and  a dynamic admin dashboard for property listing, I also made the property listing available for anyone to test the features. Experience enhanced communication and discover the latest listings, making this project an invaluable addition to any real estate venture.',
    //     projectStack:  [' React', 'Tailwindcss' , 'firebase'],
    //     ProjectGit: 'github.com/DesmondNzubechi/beautiful-home',
    //     ProjectUrl: 'buildhome.vercel.app',
    //     label: 'link to homebuilder'
    // },
  ];
  return (
    <div className="py-[100px] font-poppins pt-[150px] bg-slate-50 overflow-x-hidden px-[20px]">
      <div data-aos="fade-up" className="text-center">
        <h1 className="uppercase text-blue-500 font-bold font-headerFont text-[25px] md:text-[50px]">
          My Projects
        </h1>
        <p className="text-[15px] md:text-[25px] text-slate-700 font-semibold">
          Take A Look At The Some Of The Project That I Built
        </p>
      </div>
      <div className="mt-[50px] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-[50px] ">
          {projectItems.map((project, index) => {
            return (
              <div
                data-aos="fade-up"
                className="flex flex-col h-full justify-center  bg-white rounded-2xl  gap-2 p-5 rounded shadow-2xl"
                key={index}
              >
                <div>
                  <Image
                    className="shadow   rounded"
                    src={project.ProjectImg}
                    alt={project.projectName}
                  />
                </div>
                <div className=" flex flex-col gap-4">
                  <h1 className="font-bold uppercase text-slate-900 text-[25px]">
                    {project.projectName}
                  </h1>
                  <p className="text-slate-700  text-[12px] md:text-[15px] text-wrap">
                    {" "}
                    {project.ProjectDescr}
                  </p>
                  <b className="text-slate-900 mb-[-15px] ">TOOLS: </b>
                  <p className=" flex  flex-row gap-[2px] p-1 shadow  p-2 rounded items-center">
                    {" "}
                    {project.projectStack.map((stack) => {
                      return (
                        <span
                          className={`md:text-[15px] text-[12px] font-semibold text-slate-700   rounded w-full text-center  capitalize`}
                        >
                          {" "}
                          {stack}
                        </span>
                      );
                    })}{" "}
                  </p>
                  <div className="flex gap-3 items-center">
                    <Link
                      aria-label={project.label}
                      className="bg-blue-500 text-center flex items-center justify-center gap-2 w-full hover:bg-slate-900 capitalize text-slate-50 p-1 px-3 rounded text-[20px]"
                      href={`https://${project.ProjectUrl}`}
                    >
                      Live <GiLinkedRings />
                    </Link>
                    <Link
                      aria-label={project.label}
                      className="flex w-full justify-center gap-2 items-center hover:bg-slate-900 hover:text-slate-50 text-slate-900 p-1 px-3 border text-[20px] rounded"
                      href={`https://${project.ProjectGit}`}
                    >
                      code <AiFillGithub />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Link
        aria-label="link to more projects"
        className="flex my-[40px] font-bold capitalize justify-center gap-2 items-center hover:bg-slate-900 hover:text-slate-50 text-slate-900 p-1 px-3 border text-[20px] rounded"
        href="/more-projects"
      >
        View more projects
      </Link>
    </div>
  );
};

export default Projects;
