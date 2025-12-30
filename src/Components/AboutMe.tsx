import React from 'react';
import leandro_img from "../assets/leandro_img.png";
import { FaStarOfLife } from "react-icons/fa6";
import {useLanguageContext} from "@/App.tsx";

const AboutMe = () => {
    const {t} = useLanguageContext();
    
    return (
        <div id={"artist"} className={"xl:w-[65vw] 2xl:w-[55vw] scroll-mt-142 md:scroll-mt-108 lg:scroll-mt-198 xl:scroll-mt-72 2xl:scroll-mt-20 appear"}>
            <div className={"flex flex-col items-center gap-10 lg:gap-16 xl:gap-14 2xl:gap-20"}>
                <h2 className={"text-po min-w-screen text-center 2xl:min-w-1/5 text-6xl md:text-7xl lg:text-9xl xl:text-6xl 2xl:text-7xl font-FingerPrint"}>{t('about.title')}</h2>
                <div className={"flex flex-col xl:flex-row justify-start 2xl:justify-center items-center lg:gap-16 xl:gap-16 gap-12 2xl:gap-32 w-full"}>
                    <div className={"relative xl:self-start"}>
                        <img src={leandro_img} alt="Leandro, professional tattoo artist and painter" className={"xl:min-w-[25vw] xl:max-w-[60vw] xl:min-h-[80vh] 2xl:min-w-[20vw] " +
                            "2xl:max-w-[60vw] 2xl:min-h-[60vh] min-w-[70vw] max-w-[80vw] h-[55vh] md:min-w-[60vw] lg:min-w-[54vw] lg:max-w-[60vw] lg:h-[55vh] img"}
                             style={{transform: "perspective(1000px) rotateY(5deg)"}}/>
                        <span className={"absolute text-amber-50 text-6xl md:text-7xl lg:text-8xl xl:text-6xl 2xl:text-7xl bottom-2 right-2 text-po font-FingerPrint"}><b>{t('about.name')}</b></span>
                        <div className={"absolute text-base/5 lg:leading-8 lg:w-40 lg:h-32 xl:w-28 xl:h-auto lg:flex lg:justify-center lg:items-center xl:text-base/5 p-2.5 bg-lg-po " +
                            "rounded-2xl -top-3 -right-5 w-26 min-h-22 shadow-lg shadow-indigo-400/50 rotate-8"}>
                                <span className={"text-amber-50 text-[1.5rem] md:text-[1.6rem] lg:text-[2.5rem] xl:text-[1.5rem] font-Pompiere whitespace-pre-wrap"}>
                                    <i>{t('about.experience')}</i>
                                </span>
                        </div>
                    </div>
                    <div className={""}>
                        <div className={"flex gap-6 flex-col items-start max-w-[80vw] 2xl:min-w-3/5"}>
                            <div className={"flex gap-3"}>
                                <div>
                                    <FaStarOfLife className={"h-5 w-5"} color={"#a2a8d3"}/>
                                </div>
                                <span className={"text-amber-50 text-[1.2rem] md:text-[1.5rem] lg:text-[2.2rem] xl:text-[1.5rem] 2xl:text-[1.7rem] break-normal font-Pompiere"}>
                                    {t('about.bio')}
                                </span>
                            </div>
                            <div className={"flex gap-3"}>
                                <div>
                                    <FaStarOfLife className={"h-5 w-5"} color={"#a2a8d3"}/>
                                </div>
                                <span className={"text-[1.2rem] md:text-[1.5rem] lg:text-[2.2rem] xl:text-[1.5rem] 2xl:text-[1.7rem] break-normal text-amber-50 font-Pompiere"}>
                                    {t('about.quote1')}</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <div>
                                    <FaStarOfLife className={"h-5 w-5"} color={"#a2a8d3"}/>
                                </div>
                                <span className={"text-amber-50 text-[1.2rem] md:text-[1.5rem] lg:text-[2.2rem] xl:text-[1.5rem] 2xl:text-[1.7rem] break-normal font-Pompiere"}>
                                    {t('about.quote2')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;