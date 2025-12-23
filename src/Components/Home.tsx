import React, {useState} from 'react';
import {Button} from "@/Components/ui/button.tsx";
import { FaSquareInstagram } from "react-icons/fa6";
import tattoo_1_img from "../assets/tattoo_1.png";
import tattoo_2_img from "../assets/tattoo_2.png";
import tattoo_3_img from "../assets/tattoo_3.png";
import tattoo_4_img from "../assets/tattoo_4.png";
import tattoo_5_img from "../assets/tattoo_5.png";
import tattoo_6_img from "../assets/tattoo_6.png";
import tattoo_7_img from "../assets/tattoo_7.png";


const Home = () => {
    const [buttonHover, setButtonHover] = useState({
        instagramHovered: false,
    });
    return (
        <div className={"flex flex-col justify-center items-center mt-[5rem]"}>
            <div id={"title"} className={"pt-[4rem] max-w-[35vw] text-center flex flex-col gap-12"}>
                <span className={"text-[var(--color-muted))] text-6xl"}>
                    I'll help you find the right project for you
                </span>
                <div className={"flex justify-center items-center"}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/leandrotattooextreme/" 
                       className={"max-w-10 h-auto"} onMouseLeave={() => setButtonHover({instagramHovered: false})} 
                       onMouseEnter={() => setButtonHover({instagramHovered: true})}>
                        <FaSquareInstagram className={"w-12 h-12 fill-current"} 
                                           color={`${buttonHover.instagramHovered ? "var(--color-muted)" : "var(--color-sidebar-border)"}`}/>
                    </a>
                </div>
            </div>
            <div id={"set-of-images"} className={"flex w-screen justify-center items-center gap-5 overflow-hidden pb-4"}>
                <img src={tattoo_1_img} alt="tattoo" className={"min-w-[18vw] h-[50vh] img"}
                     style={{transform: "perspective(1000px) rotateY(25deg)"}}/>
                <img src={tattoo_2_img} alt="tattoo" className={"min-w-[16vw] h-[42vh] img"}
                     style={{transform: "perspective(1000px) rotateY(20deg)"}}/>
                <img src={tattoo_3_img} alt="tattoo" className={"min-w-[13vw] h-[36vh] img"}
                     style={{transform: "perspective(1000px) rotateY(15deg)"}}/>
                <img src={tattoo_4_img} alt="tattoo" className={"min-w-[12vw] h-[34vh] img"}/>
                <img src={tattoo_5_img} alt="tattoo" className={"min-w-[13vw] h-[36vh] img"} 
                     style={{transform: "perspective(1000px) rotateY(-15deg)"}}/>
                <img src={tattoo_6_img} alt="tattoo" className={"min-w-[16vw] h-[42vh] img"}
                     style={{transform: "perspective(1000px) rotateY(-20deg)"}}/>
                <img src={tattoo_7_img} alt="tattoo" className={"min-w-[18vw] h-[50vh] img"}
                     style={{transform: "perspective(1000px) rotateY(-25deg)"}}/>
            </div>
            <div>
                <Button className={"bg-red-600 hover:bg-red-700 rounded-3xl cursor-pointer scale-[1.2]"}>Book Appointment</Button>
            </div>
        </div>
    );
};

export default Home;