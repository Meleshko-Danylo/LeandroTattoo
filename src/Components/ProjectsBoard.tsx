import React from 'react';
import ProjectCard from "@/Components/ProjectCard.tsx";
import tattoo_1_img from "../assets/tattoo_1.png";
import tattoo_2_img from "../assets/tattoo_2.png";
import tattoo_3_img from "../assets/tattoo_3.png";
import tattoo_4_img from "../assets/tattoo_4.png";
import tattoo_5_img from "../assets/tattoo_5.png";
import tattoo_6_img from "../assets/tattoo_6.png";
import tattoo_7_img from "../assets/tattoo_7.png";
import tattoo_8_img from "../assets/tattoo_8.png";
import tattoo_9_img from "../assets/tattoo_9.png";
import tattoo_10_img from "../assets/tattoo_10.png";
import tattoo_11_img from "../assets/tattoo_11.png";
import tattoo_12_img from "../assets/tattoo_12.png";
import tattoo_13_img from "../assets/tattoo_13.png";
import tattoo_14_img from "../assets/tattoo_14.png";
import tattoo_15_img from "../assets/tattoo_15.png";
import {useLanguageContext} from "@/App.tsx";

const ProjectsBoard = () => {
    const {t} = useLanguageContext();
    
    return (
        <div id={"projects-board"} className={"pb-6 2xl:pb-0 2xl:overflow-visible w-screen xl:w-[85vw] 2xl:w-[55vw] " +
            "scroll-mt-12 md:scroll-mt-24 xl:scroll-mt-1 2xl:scroll-mt-16 flex flex-col gap-6 lg:gap-20 xl:gap-6 2xl:gap-16 " +
            "items-center pl-6 pr-6 pt-20"}>
            <h2 className={"appear text-po text-center text-6xl md:text-7xl lg:text-9xl xl:text-6xl 2xl:text-7xl font-FingerPrint"}>{t('projects.title')}</h2>
            <div className={"flex flex-col gap-24 lg:gap-36 xl:gap-20 2xl:gap-24 justify-start items-start pt-12 box-border w-full"}>
                <div className={"flex gap-24 xl:gap-0 flex-col xl:flex-row items-center xl:items-start xl:justify-around 2xl:justify-between w-full"}>
                    <ProjectCard img={tattoo_1_img} date={"27/6/2024"} feedback={t('projects.feedback.f1')}/>
                    <ProjectCard img={tattoo_2_img} date={"8/8/2021"} feedback={t('projects.feedback.f2')}/>
                </div>
                <div className={"flex items-start justify-center w-full"}>
                    <ProjectCard img={tattoo_3_img} date={"19/6/2025"} feedback={t('projects.feedback.f3')}/>
                </div>
                <div className={"flex gap-24 xl:gap-0 flex-col xl:flex-row items-center xl:items-start xl:justify-around 2xl:justify-between w-full"}>
                    <ProjectCard img={tattoo_4_img} date={"12/4/2025"} feedback={t('projects.feedback.f4')}/>
                    <ProjectCard img={tattoo_5_img} date={"23/10/2023"} feedback={t('projects.feedback.f5')}/>
                </div>
                <div className={"flex items-start justify-center w-full"}>
                    <ProjectCard img={tattoo_6_img} date={"14/9/2023"} feedback={t('projects.feedback.f6')}/>
                </div>
                <div className={"flex gap-24 xl:gap-0 flex-col xl:flex-row items-center xl:items-start xl:justify-around 2xl:justify-between w-full"}>
                    <ProjectCard img={tattoo_7_img} date={"21/6/2023"} feedback={t('projects.feedback.f7')}/>
                    <ProjectCard img={tattoo_8_img} date={"17/8/2023"} feedback={t('projects.feedback.f8')}/>
                </div>
                <div className={"flex items-start justify-center w-full"}>
                    <ProjectCard img={tattoo_9_img} date={"29/4/2025"} feedback={t('projects.feedback.f9')}/>
                </div>
                <div className={"flex gap-24 xl:gap-0 flex-col xl:flex-row items-center xl:items-start xl:justify-around 2xl:justify-between w-full"}>
                    <ProjectCard img={tattoo_10_img} date={"26/10/2025"} feedback={t('projects.feedback.f10')}/>
                    <ProjectCard img={tattoo_11_img} date={"21/8/2024"} feedback={t('projects.feedback.f11')}/>
                </div>
                <div className={"flex items-start justify-center w-full"}>
                    <ProjectCard img={tattoo_12_img} date={"17/9/2023"} feedback={t('projects.feedback.f12')}/>
                </div>
                <div className={"flex gap-24 xl:gap-0 flex-col xl:flex-row items-center xl:items-start xl:justify-around 2xl:justify-between w-full"}>
                    <ProjectCard img={tattoo_13_img} date={"19/6/2023"} feedback={t('projects.feedback.f13')}/>
                    <ProjectCard img={tattoo_14_img} date={"2/4/2023"} feedback={t('projects.feedback.f14')}/>
                </div>
                <div className={"flex items-start justify-center w-full"}>
                    <ProjectCard img={tattoo_15_img} date={"5/2/2023"} feedback={t('projects.feedback.f15')}/>
                </div>
            </div>
        </div>
    );
};

export default ProjectsBoard;