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

const ProjectsBoard = () => {
    return (
        <div id={"projects-board"} className={"pb-6 2xl:pb-0 2xl:overflow-visible w-screen lg:w-[85vw] 2xl:w-[55vw] " +
            "scroll-mt-20 lg:scroll-mt-2 2xl:scroll-mt-20 flex flex-col gap-6 2xl:gap-16 " +
            "items-center pl-6 pr-6 pt-20"}>
            <span className={"appear text-po text-center text-6xl font-FingerPrint"}>My works</span>
            <div className={"flex flex-col gap-24 lg:gap-20 2xl:gap-24 justify-start items-start pt-12 box-border w-full"}>
                <div className={"flex gap-24 lg:gap-0 flex-col lg:flex-row items-center lg:items-start lg:justify-around 2xl:justify-between w-full"}>
                    <ProjectCard img={tattoo_1_img} date={"27/6/2024"} feedback={"Even better than I imagined!"}/>
                    <ProjectCard img={tattoo_2_img} date={"8/8/2021"} feedback={"Lovely done! Thank you!"}/>
                </div>
                <div className={"flex items-start justify-center w-full"}>
                    <ProjectCard img={tattoo_3_img} date={"19/6/2025"} feedback={"Thank you very much!"}/>
                </div>
                <div className={"flex gap-24 lg:gap-0 flex-col lg:flex-row items-center lg:items-start lg:justify-around 2xl:justify-between w-full"}>
                    <ProjectCard img={tattoo_4_img} date={"12/4/2025"} feedback={"Amazing work! Thank you!"}/>
                    <ProjectCard img={tattoo_5_img} date={"23/10/2023"} feedback={"Awesome!"}/>
                </div>
                <div className={"flex items-start justify-center w-full"}>
                    <ProjectCard img={tattoo_6_img} date={"14/9/2023"} feedback={"Great job! I'm in love with the result"}/>
                </div>
                <div className={"flex gap-24 lg:gap-0 flex-col lg:flex-row items-center lg:items-start lg:justify-around 2xl:justify-between w-full"}>
                    <ProjectCard img={tattoo_7_img} date={"21/6/2023"} feedback={"Awesome work! Thank you!"}/>
                    <ProjectCard img={tattoo_8_img} date={"17/8/2023"} feedback={"Stunning design! Thank you!"}/>
                </div>
                <div className={"flex items-start justify-center w-full"}>
                    <ProjectCard img={tattoo_9_img} date={"29/4/2025"} feedback={"So lovely! Thank you!"}/>
                </div>
                <div className={"flex gap-24 lg:gap-0 flex-col lg:flex-row items-center lg:items-start lg:justify-around 2xl:justify-between w-full"}>
                    <ProjectCard img={tattoo_10_img} date={"26/10/2025"} feedback={"I'm in love with this!"}/>
                    <ProjectCard img={tattoo_11_img} date={"21/8/2024"} feedback={"Thank you so much!"}/>
                </div>
                <div className={"flex items-start justify-center w-full"}>
                    <ProjectCard img={tattoo_12_img} date={"17/9/2023"} feedback={"Perfectly done!"}/>
                </div>
                <div className={"flex gap-24 lg:gap-0 flex-col lg:flex-row items-center lg:items-start lg:justify-around 2xl:justify-between w-full"}>
                    <ProjectCard img={tattoo_13_img} date={"19/6/2023"} feedback={"Thank you for your work!"}/>
                    <ProjectCard img={tattoo_14_img} date={"2/4/2023"} feedback={"Great job"}/>
                </div>
                <div className={"flex items-start justify-center w-full"}>
                    <ProjectCard img={tattoo_15_img} date={"5/2/2023"} feedback={"Just like I imagined it!"}/>
                </div>
            </div>
        </div>
    );
};

export default ProjectsBoard;