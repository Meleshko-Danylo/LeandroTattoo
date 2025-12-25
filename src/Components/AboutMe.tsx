import React from 'react';
import leandro_img from "../assets/leandro_img.png";
import { TbMichelinStarFilled } from "react-icons/tb";

const AboutMe = () => {
    return (
        <div id={"artist"} className={"w-[50vw] scroll-mt-20 appear"}>
            <div className={"flex flex-col items-center gap-20"}>
                <span className={"text-po text-6xl"}>Meet the artist!</span>
                <div className={"flex justify-between w-full"}>
                    <div className={""}>
                        <div className={"relative"}>
                            <img src={leandro_img} alt="" className={"rounded-2xl min-w-[18vw] img"} style={{transform: "perspective(1000px) rotateY(5deg)"}}/>
                            <span className={"absolute text-amber-50 text-7xl bottom-2 right-2 text-po"}>Leandro</span>
                            <div className={"absolute text-base/5 p-[10px] bg-lg-po " +
                                "rounded-2xl -top-3 -right-5 w-26 min-h-18 shadow-lg shadow-indigo-400/50 rotate-8"}>
                        <span className={"text-amber-50 text-[1.1rem]"}>
                            7+ <br/>years of experience
                        </span>
                            </div>
                        </div>
                    </div>
                    <div className={"w-[50%]"}>
                        <div className={"flex gap-5 flex-col items-end"}>
                            <div className={"flex gap-3"}>
                                <div>
                                    <TbMichelinStarFilled className={"h-[2.2rem] w-[2.2rem]"} color={"#a2a8d3"}/>
                                </div>
                                <span className={"text-amber-50 text-[1.3rem] break-normal"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Ad aliquid eaque illum iste quo quos similique ut vero? 
                            Assumenda at consequuntur deserunt harum in maiores 
                            maxime minus reprehenderit, sunt totam!</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <div>
                                    <TbMichelinStarFilled className={"h-[2.2rem] w-[2.2rem]"} color={"#a2a8d3"}/>
                                </div>
                                <span className={"text-[1.3rem] break-normal text-amber-50"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Ad aliquid eaque illum iste quo quos similique ut vero? 
                            Assumenda at consequuntur deserunt harum in maiores 
                            maxime minus reprehenderit, sunt totam!</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <div>
                                    <TbMichelinStarFilled className={"h-[2.2rem] w-[2.2rem]"} color={"#a2a8d3"}/>
                                </div>
                                <span className={"text-amber-50 text-[1.3rem] break-normal"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Ad aliquid eaque illum iste quo quos similique ut vero? 
                            Assumenda at consequuntur deserunt harum in maiores 
                            maxime minus reprehenderit, sunt totam!</span>
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