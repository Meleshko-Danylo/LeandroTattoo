import React from 'react';
import {Button} from "@/Components/ui/button.tsx";
import tattoo_1_img from "../assets/tattoo_1.png";
import tattoo_2_img from "../assets/tattoo_2.png";
import tattoo_3_img from "../assets/tattoo_3.png";
import tattoo_4_img from "../assets/tattoo_4.png";
import tattoo_5_img from "../assets/tattoo_5.png";
import tattoo_6_img from "../assets/tattoo_6.png";
import tattoo_7_img from "../assets/tattoo_7.png";
import logo from "../assets/leandro-tattoo-logo.png"
import {scrollToContacts} from "@/Components/Header.tsx";
import {useLanguageContext} from "@/App.tsx";


const Home = () => {
    const {t} = useLanguageContext();
    
    return (
        <div id={"home"} className={"relative flex flex-col max-w-full justify-center items-center mt-20 scroll-mt-20 appear"}>
            <div id={"title"} className={"pt-18 md:pt-24 max-w-[80vw] md:max-w-[85vw] lg:max-w-[70vw] xl:max-w-[55vw] xl:pt-14 2xl:pt-18 text-center"}>
                <h1 className={"text-po text-8xl md:text-[120px] lg:text-[140px] xl:text-8xl leading-16 md:leading-22 lg:leading-25 xl:leading-16 2xl:leading-22 " +
                    "2xl:text-9xl font-BlackKnight pb-12 pt-2 md:pb-16 md:pt-5 lg:pb-16 xl:pb-3 lg:pt-12 xl:pt-2 2xl:pb-4 2xl:pt-7"}>
                    {t('home.title')}
                </h1>
            </div>
            <div id={"set-of-images"} className={"flex w-full justify-center items-center gap-5 md:gap-3 lg:gap-4 xl:gap-1 2xl:gap-3 overflow-hidden pb-10 xl:pb-3 2xl:pb-4"}>
                {window.innerWidth >= 1280 && (<img src={tattoo_1_img} alt="Custom artistic tattoo design" className={"min-w-[20vw] h-[50vh] xl:min-w-[18vw] xl:h-[54vh] " +
                    "2xl:min-w-[18vw] 2xl:h-[58vh] img"}
                                                    style={{transform: "perspective(1000px) rotateY(25deg)"}}/>)}
                {window.innerWidth >= 640 && (<img src={tattoo_2_img} alt="Professional tattoo work in Caltagirone" className={"min-w-[20vw] h-[42vh] md:min-w-[24vw] md:h-[48vh] lg:min-w-[24vw] lg:h-[52vh] xl:min-w-[16vw] xl:h-[48vh] " +
                    "2xl:min-w-[16vw] 2xl:h-[50vh] img"}
                                                   style={{transform: "perspective(1000px) rotateY(20deg)"}}/>)}
                {window.innerWidth >= 640 && (<img src={tattoo_3_img} alt="Artistic body art by Leandro" className={"min-w-[28vw] h-[36vh] md:min-w-[24vw] md:h-[40vh] lg:min-w-[24vw] lg:h-[44vh] xl:min-w-[13vw] xl:h-[42vh] " +
                    "2xl:min-w-[13vw] 2xl:h-[44vh] img"}
                                                   style={{transform: "perspective(1000px) rotateY(15deg)"}}/>)}
                <img src={logo} alt="Detailed tattoo project" className={"min-w-[26vw] max-w-[75vw] h-[40vh] md:min-w-[20vw] md:h-[34vh] lg:min-w-[20vw] lg:h-[38vh] xl:min-w-[12vw] xl:h-[38vh] " +
                    "2xl:min-w-[12vw] 2xl:h-[42vh] img"}/>
                {window.innerWidth >= 640 && (<img src={tattoo_5_img} alt="Custom tattoo artist work" className={"min-w-[28vw] h-[36vh] md:min-w-[24vw] md:h-[40vh] lg:min-w-[24vw] lg:h-[44vh] xl:min-w-[13vw] xl:h-[42vh] " +
                    "2xl:min-w-[13vw] 2xl:h-[44vh] img"}
                                                   style={{transform: "perspective(1000px) rotateY(-15deg)"}}/>)}
                {window.innerWidth >= 640 && (<img src={tattoo_6_img} alt="Professional tattooing in Catania" className={"min-w-[20vw] h-[42vh] md:min-w-[24vw] md:h-[48vh] lg:min-w-[24vw] lg:h-[52vh] xl:min-w-[16vw] xl:h-[48vh] " +
                    "2xl:min-w-[16vw] 2xl:h-[50vh] img"}
                                                   style={{transform: "perspective(1000px) rotateY(-20deg)"}}/>)}
                {window.innerWidth >= 1280 && (<img src={tattoo_7_img} alt="Artistic tattoo gallery piece" className={"min-w-[20vw] h-[50vh] xl:min-w-[18vw] xl:h-[54vh] 2xl:min-w-[18vw] 2xl:h-[58vh] " +
                    "img"}
                                                    style={{transform: "perspective(1000px) rotateY(-25deg)"}}/>)}
            </div>
            <div>
                <Button onClick={scrollToContacts} className={"bg-red-600 hover:bg-red-700 rounded-4xl xl:absolute xl:-bottom-4 xl:right-[46%] 2xl:right-[47%] " +
                    "cursor-pointer px-6 py-4 md:px-8 md:py-5 text-[14px] md:text-[16px] lg:px-10 lg:py-7 lg:text-[26px] xl:px-6 xl:py-4 xl:text-[14px] 2xl:px-8 2xl:py-5 2xl:text-[16px] font-Outfit"}>{t('home.contacts')}</Button>
            </div>
        </div>
    );
};

export default Home;