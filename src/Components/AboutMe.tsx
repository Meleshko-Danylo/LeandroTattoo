import React from 'react';
import leandro_img from "../assets/leandro_img.png";
import { FaStarOfLife } from "react-icons/fa6";
import {useLanguageContext} from "@/App.tsx";

const AboutMe = () => {
    const {t} = useLanguageContext();
    
    return (
        <div id={"artist"} className={"xl:w-[70vw] 2xl:w-[65vw] scroll-mt-122 md:scroll-mt-192 lg:scroll-mt-268 xl:scroll-mt-106 2xl:scroll-mt-40 appear"}>
            <div className={"flex flex-col items-center gap-10 md:gap-12 lg:gap-16 xl:gap-14 2xl:gap-14"}>
                <h2 className={"text-po min-w-screen text-center 2xl:min-w-1/5 text-7xl md:text-[126px] lg:text-[148px] xl:text-[140px] 2xl:text-[148px] font-BlackKnight"}>{t('about.title')}</h2>
                <div className={"flex flex-col xl:flex-row justify-start 2xl:justify-center items-center md:gap-16 lg:gap-20 xl:gap-16 gap-12 2xl:gap-20 w-full"}>
                    <div className={"relative xl:self-start"}>
                        <img src={leandro_img} alt="Leandro, professional tattoo artist and painter" className={"xl:min-w-[30vw] xl:max-w-[60vw] xl:min-h-[90vh] 2xl:min-w-[22vw] " +
                            "2xl:max-w-[60vw] 2xl:min-h-[72vh] min-w-[70vw] max-w-[80vw] h-[55vh] md:min-w-[60vw] md:min-h-[65vh] lg:min-w-[58vw] lg:max-w-[62vw] lg:h-[56vh] img"}
                             style={{transform: "perspective(1000px) rotateY(5deg)"}}/>
                        <div className={"absolute -bottom-1 right-3 md:right-5"} style={{transform: "rotate(-3deg)"}}>
                            <span style={{transform: "skewX(-10deg)"}} className={"text-8xl md:text-[140px] lg:text-[180px] xl:text-8xl 2xl:text-[132px] " +
                                "text-po font-BlackKnight tracking-wide"}><b>{t('about.name')}</b></span>
                        </div>
                        <div className={"absolute text-base/5 md:leading-8 lg:leading-9 2xl:leading-9 md:w-38 md:h-30 lg:w-52 lg:h-38 xl:w-28 xl:h-auto 2xl:w-40 2xl:h-32 md:flex md:justify-center md:items-center xl:text-base/5 p-1.5 2xl:p-2 bg-lg-po " +
                            "rounded-2xl -top-3 -right-5 lg:-top-5 lg:-right-7 w-26 min-h-20 shadow-lg shadow-indigo-400/50 rotate-8"}>
                                <span className={"text-amber-50 text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[1.1rem] 2xl:text-[1.6rem] font-FingerPrint whitespace-pre-wrap"}>
                                    <i>{t('about.experience')}</i>
                                </span>
                        </div>
                    </div>
                    <div className={""}>
                        <div className={"flex gap-6 text-amber-50 flex-col items-start max-w-[90vw] md:max-w-[80vw] 2xl:min-w-3/5 font-FingerPrint"}>
                            <div className={"flex gap-3"}>
                                <div>
                                    <FaStarOfLife className={"h-5 w-5"} color={"#be3144"}/>
                                </div>
                                <span className={"text-[1rem] md:text-[1.4rem] lg:text-[2rem] xl:text-[1.2rem] 2xl:text-[1.4rem] break-normal"}>
                                    {t('about.bio')}
                                </span>
                            </div>
                            <div className={"flex gap-3"}>
                                <div>
                                    <FaStarOfLife className={"h-5 w-5"} color={"#be3144"}/>
                                </div>
                                <span className={"text-[1rem] md:text-[1.4rem] lg:text-[2rem] xl:text-[1.2rem] 2xl:text-[1.4rem] break-normal text-amber-50"}>
                                    {t('about.quote1')}</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <div>
                                    <FaStarOfLife className={"h-5 w-5"} color={"#be3144"}/>
                                </div>
                                <span className={"text-amber-50 text-[1rem] md:text-[1.4rem] lg:text-[2rem] xl:text-[1.2rem] 2xl:text-[1.4rem] break-normal"}>
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