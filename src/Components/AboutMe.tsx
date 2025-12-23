import React from 'react';
import leandro_img from "../assets/leandro_img.png";
import { TbMichelinStarFilled } from "react-icons/tb";

const AboutMe = () => {
    return (
        <div className={"w-[50vw] flex justify-between"}>
            <div className={""}>
                <div className={"relative"}>
                    <img src={leandro_img} alt="" className={"rounded-2xl min-w-[18vw] img"} style={{transform: "perspective(1000px) rotateY(5deg)"}}/>
                    <span className={"absolute text-[var(--color-muted)] text-7xl bottom-2 right-2"}>Leandro</span>
                    <div className={"absolute p-1 text-base/5 " +
                        "rounded-2xl -top-3 -right-5 bg-[var(--color-sidebar-ring)] w-25 h-18 shadow-xl/50 rotate-8"}>
                        <span className={"text-[var(--color-primary)] text-[1.1rem]"}>
                            10+ years of experience
                        </span>
                    </div>
                </div>
            </div>
            <div className={"w-[50%]"}>
                <div className={"flex gap-5 flex-col items-end"}>
                    <div className={"flex gap-3"}>
                        <div>
                            <TbMichelinStarFilled className={"h-[2.2rem] w-[2.2rem]"} color={"var(--color-muted)"}/>
                        </div>
                        <span className={"text-[var(--color-muted)] text-[1.3rem] break-normal"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Ad aliquid eaque illum iste quo quos similique ut vero? 
                            Assumenda at consequuntur deserunt harum in maiores 
                            maxime minus reprehenderit, sunt totam!</span>
                    </div>
                    <div className={"flex gap-3"}>
                        <div>
                            <TbMichelinStarFilled className={"h-[2.2rem] w-[2.2rem]"} color={"var(--color-muted)"}/>
                        </div>
                        <span className={"text-[var(--color-muted)] text-[1.3rem] break-normal"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Ad aliquid eaque illum iste quo quos similique ut vero? 
                            Assumenda at consequuntur deserunt harum in maiores 
                            maxime minus reprehenderit, sunt totam!</span>
                    </div>
                    <div className={"flex gap-3"}>
                        <div>
                            <TbMichelinStarFilled className={"h-[2.2rem] w-[2.2rem]"} color={"var(--color-muted)"}/>
                        </div>
                        <span className={"text-[var(--color-muted)] text-[1.3rem] break-normal"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
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
    );
};

export default AboutMe;