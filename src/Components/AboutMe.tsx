import React from 'react';
import leandro_img from "../assets/leandro_img.png";
import { FaStarOfLife } from "react-icons/fa6";

const AboutMe = () => {
    return (
        <div id={"artist"} className={"w-[50vw] scroll-mt-20 appear"}>
            <div className={"flex flex-col items-center gap-20"}>
                <span className={"text-po text-6xl font-FingerPrint"}>Meet the artist!</span>
                <div className={"flex justify-start items-center gap-40  w-full"}>
                    <div className={""}>
                        <div className={"relative"}>
                            <img src={leandro_img} alt="" className={"min-w-[18vw] img"} style={{transform: "perspective(1000px) rotateY(5deg)"}}/>
                            <span className={"absolute text-amber-50 text-7xl bottom-2 right-2 text-po font-FingerPrint"}><b>Leandro</b></span>
                            <div className={"absolute text-base/5 p-[10px] bg-lg-po " +
                                "rounded-2xl -top-3 -right-5 w-26 min-h-18 shadow-lg shadow-indigo-400/50 rotate-8"}>
                                <span className={"text-amber-50 text-[1.6rem] font-Pompiere"}>
                                    <i>7+ <br/>years of experience</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={""}>
                        <div className={"flex gap-6 flex-col items-start"}>
                            <div className={"flex gap-3"}>
                                <div>
                                    <FaStarOfLife className={"h-5 w-5"} color={"#a2a8d3"}/>
                                </div>
                                <span className={"text-amber-50 text-[1.5rem] break-normal font-Pompiere"}>
                                    Tattoos give us the inspiration to be ourselves.
                                </span>
                            </div>
                            <div className={"flex gap-3"}>
                                <div>
                                    <FaStarOfLife className={"h-5 w-5"} color={"#a2a8d3"}/>
                                </div>
                                <span className={"text-[1.5rem] break-normal text-amber-50 font-Pompiere"}>
                                    For me, a tattoo is an art installation that 
                                    I get to wear all the time. It’s all about self-expression. 
                                    You get to wear your insides on your outsides.</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <div>
                                    <FaStarOfLife className={"h-5 w-5"} color={"#a2a8d3"}/>
                                </div>
                                <span className={"text-amber-50 text-[1.5rem] break-normal font-Pompiere"}>
                                    Tattoos exude pain and pleasure all at the same time.
                                </span>
                            </div>
                            <div className={"flex gap-3"}>
                                <div>
                                    <FaStarOfLife className={"h-5 w-5"} color={"#a2a8d3"}/>
                                </div>
                                <span className={"text-amber-50 text-[1.5rem] break-normal font-Pompiere"}>
                                    Tattoo not only helps you express yourself, but they also transform your thoughts,
                                    feelings, experiences, and passions into a beautiful piece of work on your body,
                                    making you even closer with who you are
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