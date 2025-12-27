import React from 'react';
import leandro_img from "../assets/leandro_img.png";
import { FaStarOfLife } from "react-icons/fa6";

const AboutMe = () => {
    return (
        <div id={"artist"} className={"lg:w-[65vw] 2xl:w-[55vw] scroll-mt-72 lg:scroll-mt-40 2xl:scroll-mt-20 appear"}>
            <div className={"flex flex-col items-center gap-12 lg:gap-14 2xl:gap-20"}>
                <span className={"text-po min-w-screen text-center 2xl:min-w-1/5 text-6xl font-FingerPrint"}>Meet the artist!</span>
                <div className={"flex flex-col lg:flex-row justify-start 2xl:justify-center items-center lg:gap-16 gap-12 2xl:gap-32 w-full"}>
                    <div className={"relative lg:self-start"}>
                        <img src={leandro_img} alt="" className={"lg:min-w-[25vw] lg:max-w-[60vw] lg:min-h-[80vh] 2xl:min-w-[20vw] 2xl:max-w-[60vw] 2xl:min-h-[60vh] min-w-[70vw] max-w-[80vw] h-[55vh] img"}
                             style={{transform: "perspective(1000px) rotateY(5deg)"}}/>
                        <span className={"absolute text-amber-50 text-5xl 2xl:text-7xl bottom-2 right-2 text-po font-FingerPrint"}><b>Leandro</b></span>
                        <div className={"absolute text-base/5 p-2.5 bg-lg-po " +
                            "rounded-2xl -top-3 -right-5 w-26 min-h-22 shadow-lg shadow-indigo-400/50 rotate-8"}>
                                <span className={"text-amber-50 text-[1.5rem] font-Pompiere"}>
                                    <i>6+ <br/>years of experience</i>
                                </span>
                        </div>
                    </div>
                    <div className={""}>
                        <div className={"flex gap-6 flex-col items-start max-w-[80vw] 2xl:min-w-3/5"}>
                            <div className={"flex gap-3"}>
                                <div>
                                    <FaStarOfLife className={"h-5 w-5"} color={"#a2a8d3"}/>
                                </div>
                                <span className={"text-amber-50 text-[1.2rem] lg:text-[1.5rem] 2xl:text-[1.7rem] break-normal font-Pompiere"}>
                                    I am passionate about art and I try to become an artist. My goal is to create something different to look 
                                    at and that can convey sensations. After completing the school of arts I started working in an aeronautical 
                                    company as a mechanic and painter, in the afternoon I dedicated myself to airbrushing in my studio for five years 
                                    until I decided to travel to challenge myself, study and work abroad . After having done a lot of different work 
                                    experiences and none of them satisfied me I realized that I had to 
                                    work with my passion painting and drawing. for any painting or airbrushing work on all surfaces, do not hesitate to contact me.
                                </span>
                            </div>
                            <div className={"flex gap-3"}>
                                <div>
                                    <FaStarOfLife className={"h-5 w-5"} color={"#a2a8d3"}/>
                                </div>
                                <span className={"text-[1.2rem] lg:text-[1.5rem] 2xl:text-[1.7rem] break-normal text-amber-50 font-Pompiere"}>
                                    For me, a tattoo is an art installation that 
                                    I get to wear all the time. It’s all about self-expression. 
                                    You get to wear your insides on your outsides.</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <div>
                                    <FaStarOfLife className={"h-5 w-5"} color={"#a2a8d3"}/>
                                </div>
                                <span className={"text-amber-50 text-[1.2rem] lg:text-[1.5rem] 2xl:text-[1.7rem] break-normal font-Pompiere"}>
                                    Tattoos exude pain and pleasure all at the same time.
                                </span>
                            </div>
                        </div>
                        <div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;