import React from 'react';
import {Button} from "@/Components/ui/button.tsx";
import tattoo_1_img from "../assets/tattoo_1.png";
import tattoo_2_img from "../assets/tattoo_2.png";
import tattoo_3_img from "../assets/tattoo_3.png";
import tattoo_4_img from "../assets/tattoo_4.png";
import tattoo_5_img from "../assets/tattoo_5.png";
import tattoo_6_img from "../assets/tattoo_6.png";
import tattoo_7_img from "../assets/tattoo_7.png";
import {scrollToContacts} from "@/Components/Header.tsx";


const Home = () => {
    
    return (
        <div id={"home"} className={"flex flex-col max-w-full justify-center items-center mt-20 scroll-mt-20 appear"}>
            <div id={"title"} className={"pt-16 max-w-[80vw] lg:max-w-[55vw] text-center flex flex-col gap-12"}>
                <span className={"text-po text-5xl 2xl:text-7xl font-FingerPrint pb-5 pt-5 lg:pb-3 lg:pt-2 2xl:pb-5"}>
                    I'll help you find the right project for you
                </span>
            </div>
            <div id={"set-of-images"} className={"flex w-full justify-center items-center gap-5 overflow-hidden pb-4 lg:pb-0 2xl:pb-4"}>
                {window.innerWidth >= 1024 && (<img src={tattoo_1_img} alt="tattoo" className={"min-w-[20vw] h-[50vh] lg:min-w-[18vw] lg:h-[58vh] img"}
                                                    style={{transform: "perspective(1000px) rotateY(25deg)"}}/>)}
                <img src={tattoo_2_img} alt="tattoo" className={"min-w-[20vw] h-[42vh] lg:min-w-[16vw] lg:h-[50vh] img"}
                     style={{transform: "perspective(1000px) rotateY(20deg)"}}/>
                <img src={tattoo_3_img} alt="tattoo" className={"min-w-[18vw] h-[36vh] lg:min-w-[13vw] lg:h-[44vh] img"}
                     style={{transform: "perspective(1000px) rotateY(15deg)"}}/>
                <img src={tattoo_4_img} alt="tattoo" className={"min-w-[16vw] h-[34vh] lg:min-w-[12vw] lg:h-[42vh] img"}/>
                <img src={tattoo_5_img} alt="tattoo" className={"min-w-[18vw] h-[36vh] lg:min-w-[13vw] lg:h-[44vh] img"} 
                     style={{transform: "perspective(1000px) rotateY(-15deg)"}}/>
                <img src={tattoo_6_img} alt="tattoo" className={"min-w-[20vw] h-[42vh] lg:min-w-[16vw] lg:h-[50vh] img"}
                     style={{transform: "perspective(1000px) rotateY(-20deg)"}}/>
                {window.innerWidth >= 1024 && (<img src={tattoo_7_img} alt="tattoo" className={"min-w-[20vw] h-[50vh] lg:min-w-[18vw] lg:h-[58vh] img"}
                                                    style={{transform: "perspective(1000px) rotateY(-25deg)"}}/>)}
            </div>
            <div>
                <Button onClick={scrollToContacts} className={"bg-red-600 hover:bg-red-700 rounded-4xl " +
                    "cursor-pointer px-6 py-4 text-[14px] 2xl:px-8 2xl:py-6 2xl:text-[16px] font-Outfit"}>Contacts</Button>
            </div>
        </div>
    );
};

export default Home;