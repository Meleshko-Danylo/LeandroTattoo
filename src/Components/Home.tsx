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
import {useLanguageContext} from "@/App.tsx";


const Home = () => {
    const {t} = useLanguageContext();
    
    return (
        <div id={"home"} className={"flex flex-col max-w-full justify-center items-center mt-20 scroll-mt-20 appear"}>
            <div id={"title"} className={"pt-16 md:pt-8 max-w-[80vw] md:max-w-[85vw] lg:max-w-[70vw] xl:max-w-[55vw] xl:pt-12 2xl:pt-16 text-center"}>
                <h1 className={"text-po text-5xl md:text-[4.3rem] lg:text-[86px] xl:text-5xl leading-14 md:leading-20 lg:leading-25 xl:leading-16 2xl:leading-22 " +
                    "2xl:text-7xl font-FingerPrint pb-6 pt-5 md:pb-6 md:pt-5 lg:pb-10 xl:pb-3 lg:pt-12 xl:pt-2 2xl:pb-2 2xl:pt-7"}>
                    {t('home.title')}
                </h1>
            </div>
            <div id={"set-of-images"} className={"flex w-full justify-center items-center gap-5 xl:gap-3 2xl:gap-5 overflow-hidden pb-4 xl:pb-2 2xl:pb-4"}>
                {window.innerWidth >= 1280 && (<img src={tattoo_1_img} alt="image of a tattoo" className={"min-w-[20vw] h-[50vh] xl:min-w-[18vw] xl:h-[54vh] " +
                    "2xl:min-w-[18vw] 2xl:h-[58vh] img"}
                                                    style={{transform: "perspective(1000px) rotateY(25deg)"}}/>)}
                <img src={tattoo_2_img} alt="image of a tattoo" className={"min-w-[20vw] h-[42vh] md:min-w-[24vw] md:h-[53vh] lg:min-w-[24vw] lg:h-[54vh] xl:min-w-[16vw] xl:h-[46vh] " +
                    "2xl:min-w-[16vw] 2xl:h-[50vh] img"}
                     style={{transform: "perspective(1000px) rotateY(20deg)"}}/>
                <img src={tattoo_3_img} alt="image of a tattoo" className={"min-w-[18vw] h-[36vh] md:min-w-[20vw] md:h-[45vh] lg:min-w-[20vw] lg:h-[46vh] xl:min-w-[13vw] xl:h-[40vh] " +
                    "2xl:min-w-[13vw] 2xl:h-[44vh] img"}
                     style={{transform: "perspective(1000px) rotateY(15deg)"}}/>
                <img src={tattoo_4_img} alt="image of a tattoo" className={"min-w-[16vw] h-[34vh] md:min-w-[18vw] md:h-[40vh] lg:min-w-[18vw] lg:h-[40vh] xl:min-w-[12vw] xl:h-[38vh] " +
                    "2xl:min-w-[12vw] 2xl:h-[42vh] img"}/>
                <img src={tattoo_5_img} alt="tattoo" className={"min-w-[18vw] h-[36vh] md:min-w-[20vw] md:h-[45vh] lg:min-w-[20vw] lg:h-[46vh] xl:min-w-[13vw] xl:h-[40vh] " +
                    "2xl:min-w-[13vw] 2xl:h-[44vh] img"} 
                     style={{transform: "perspective(1000px) rotateY(-15deg)"}}/>
                <img src={tattoo_6_img} alt="image of a tattoo" className={"min-w-[20vw] h-[42vh] md:min-w-[24vw] md:h-[53vh] lg:min-w-[24vw] lg:h-[54vh] xl:min-w-[16vw] xl:h-[46vh] " +
                    "2xl:min-w-[16vw] 2xl:h-[50vh] img"}
                     style={{transform: "perspective(1000px) rotateY(-20deg)"}}/>
                {window.innerWidth >= 1280 && (<img src={tattoo_7_img} alt="image of a tattoo" className={"min-w-[20vw] h-[50vh] xl:min-w-[18vw] xl:h-[54vh] 2xl:min-w-[18vw] 2xl:h-[58vh] " +
                    "img"}
                                                    style={{transform: "perspective(1000px) rotateY(-25deg)"}}/>)}
            </div>
            <div>
                <Button onClick={scrollToContacts} className={"bg-red-600 hover:bg-red-700 rounded-4xl " +
                    "cursor-pointer px-6 py-4 md:px-8 md:py-5 text-[14px] md:text-[16px] lg:px-10 lg:py-7 lg:text-[26px] xl:px-6 xl:py-4 xl:text-[14px] 2xl:px-8 2xl:py-5 2xl:text-[16px] font-Outfit"}>{t('home.contacts')}</Button>
            </div>
        </div>
    );
};

export default Home;