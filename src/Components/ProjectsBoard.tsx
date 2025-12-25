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

const ProjectsBoard = () => {
    return (
        <div id={"projects-board"} className={"w-[55vw] scroll-mt-20 flex flex-col gap-16 items-center"}>
            <span className={"appear text-po text-6xl"}>Meet the artist!</span>
            <div className={"flex flex-col gap-24 justify-start items-start pt-12 box-border w-full"}>
                <div className={"appear flex items-start justify-between w-full"}>
                    <ProjectCard img={tattoo_1_img} date={"20/10/2022"} feedback={"Great job! I'm in love with the result"}/>
                    <ProjectCard img={tattoo_2_img} date={"20/10/2022"} feedback={"Great job! I'm in love with the result"}/>
                </div>
                <div className={"appear flex items-start justify-center w-full"}>
                    <ProjectCard img={tattoo_3_img} date={"20/10/2022"} feedback={"Great job! I'm in love with the result"}/>
                </div>
                <div className={"appear flex items-start justify-between w-full"}>
                    <ProjectCard img={tattoo_4_img} date={"20/10/2022"} feedback={"Great job! I'm in love with the result"}/>
                    <ProjectCard img={tattoo_5_img} date={"20/10/2022"} feedback={"Great job! I'm in love with the result"}/>
                </div>
                <div className={"appear flex items-start justify-center w-full"}>
                    <ProjectCard img={tattoo_6_img} date={"20/10/2022"} feedback={"Great job! I'm in love with the result"}/>
                </div>
                <div className={"appear flex items-start justify-between w-full"}>
                    <ProjectCard img={tattoo_7_img} date={"20/10/2022"} feedback={"Great job! I'm in love with the result"}/>
                    <ProjectCard img={tattoo_8_img} date={"20/10/2022"} feedback={"Great job! I'm in love with the result"}/>
                </div>
            </div>
        </div>
    );
};

export default ProjectsBoard;