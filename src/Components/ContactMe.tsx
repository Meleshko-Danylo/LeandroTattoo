import React from 'react';
import {FaSquareInstagram} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { toast } from 'react-toastify';
import { HiMapPin } from "react-icons/hi2";
import {useLanguageContext} from "@/App.tsx";

const ContactMe = () => {
    const {t} = useLanguageContext();
    const notify = (message:string) => toast(message);
    const notifyCopied = (message:string) => notify(`${message} ${t('contacts.copied')}`);
    
    return (
        <div id={"contacts"} className={"appear w-[90vw] 2xl:w-3/5 scroll-mt-20 xl:scroll-mt-36 2xl:-scroll-mt-20 flex flex-col justify-start items-start gap-4 font-FingerPrint"}>
            <h3 className={"text-5xl md:text-[90px] lg:text-8xl xl:text-7xl 2xl:text-[88px] text-po font-BlackKnight"}>{t('contacts.title')}</h3>
            <div className={"relative w-full flex flex-col justify-center items-center gap-2"}>
                <div className={"contact-enter-line"}></div>
                <div className={"flex flex-col 2xl:flex-row justify-around 2xl:flex-wrap w-full gap-y-6 2xl:gap-x-16 pt-2"}>
                    <div className={"fa-instagram-container flex 2xl:flex-wrap items-start 2xl:justify-around"}>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/leandrotattooextreme/">
                            <div className={"flex reference-box-pw md:text-[20px] lg:text-2xl xl:text-[18px]"}>
                                <FaSquareInstagram className={"fa-instagram w-11 h-11 md:w-14 md:h-14 fill-current"}/>
                                <div className={"flex flex-col"}>
                                    <span className={"text-black font-bold text-start"}>
                                        {t('contacts.instagram')}
                                    </span>
                                            <span className={"text-gray-700 font-bold text-start"}>
                                        @leandrotattooextreme
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={"fa-email-container flex flex-wrap items-start 2xl:justify-around"}>
                        <div onClick={() => {
                            navigator.clipboard.writeText("leandropoliti26june@gmail.com");
                            notifyCopied("leandropoliti26june@gmail.com");
                        }}>
                            <div className={"flex reference-box-rw md:text-[20px] lg:text-2xl xl:text-[18px]"}
                            >
                                <MdEmail className={"fa-email min-w-11 h-11 md:w-14 md:h-14 fill-current"}/>
                                <div className={"flex flex-col"}>
                                    <span className={"text-black font-bold text-start"}>
                                        {t('contacts.email')}
                                    </span>
                                    <span className={"text-gray-700 font-bold text-start"}>
                                        leandropoliti26june@gmail.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"fa-whatsUp-container flex flex-wrap items-start 2xl:justify-around"}>
                        <div onClick={() => {
                            navigator.clipboard.writeText("+393773873337");
                            notifyCopied("+393773873337");
                        }}>
                            <div className={"flex reference-box-gw md:text-[20px] lg:text-2xl xl:text-[18px]"}
                            >
                                <FaWhatsappSquare className={"fa-whatsUp w-11 h-11 md:w-14 md:h-14 fill-current"}/>
                                <div className={"flex flex-col"}>
                                    <span className={"text-black font-bold text-start"}>
                                        {t('contacts.whatsapp')}
                                    </span>
                                    <span className={"text-gray-700 font-bold text-start"}>
                                        +393773873337
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"fa-place-container flex flex-wrap items-start 2xl:justify-around"}>
                        <div>
                            <div className={"flex reference-box-gw-2 md:text-[20px] lg:text-2xl xl:text-[18px]"}
                            >
                                <HiMapPin className={"fa-place w-11 h-11 md:w-14 md:h-14 fill-current"}/>
                                <div className={"flex flex-col"}>
                                    <span className={"text-black font-bold text-start"}>
                                        {t('contacts.location')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;