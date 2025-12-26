import React, {useState} from 'react';
import {FaSquareInstagram} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";

const ContactMe = () => {
    const [buttonHover, setButtonHover] = useState({
        instagramLinkHovered: false,
        emailLinkHovered: false,
        phoneNumberHovered: false
    });
    
    return (
        <div id={"contacts"} className={"appear w-3/5 scroll-mt-28 flex flex-col justify-start items-start gap-4 font-FingerPrint"}>
            <span className={"text-3xl text-po"}>My Social Media</span>
            <div className={"relative w-full flex flex-col justify-center items-center gap-2"}>
                <div className={"contact-enter-line"}></div>
                <div className={"flex justify-around flex-wrap w-full gap-15 pt-2"}>
                    <div className={"flex flex-wrap items-start justify-around"}>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/leandrotattooextreme/"
                           onMouseLeave={() => setButtonHover((prevState) => (
                               {...prevState, instagramLinkHovered: false}
                           ))}
                           onMouseEnter={() => setButtonHover((prevState) => (
                               {...prevState, instagramLinkHovered: true}
                           ))}
                        >
                            <div className={"flex reference-box-pw shadow-lg shadow-purple-600/70 hover:inset-shadow-sm inset-shadow-indigo-500"}>
                                <div>
                                    <FaSquareInstagram className={"w-14 h-14 fill-current"}
                                                       color={`${buttonHover.instagramLinkHovered ? "mediumpurple" : "black"}`}/>
                                </div>
                                <div className={"flex flex-col"}>
                                    <span className={"text-black font-bold text-start"}>
                                        My Instagram:
                                    </span>
                                            <span className={"text-gray-700 font-bold text-start"}>
                                        @leandrotattooextreme
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={"flex flex-wrap items-start justify-around"}>
                        <div onMouseLeave={() => setButtonHover((prevState) => (
                               {...prevState, emailLinkHovered: false}
                           ))}
                           onMouseEnter={() => setButtonHover((prevState) => (
                               {...prevState, emailLinkHovered: true}
                           ))}
                           onClick={() => navigator.clipboard.writeText("leandropoliti26june@gmail.com")}
                        >
                            <div className={"flex reference-box-rw shadow-lg shadow-red-800/70 hover:inset-shadow-sm inset-shadow-red-500"}
                            >
                                <div>
                                    <MdEmail className={"w-14 h-14 fill-current"}
                                             color={`${buttonHover.emailLinkHovered ? "darkred" : "black"}`}/>
                                </div>
                                <div className={"flex flex-col"}>
                                    <span className={"text-black font-bold text-start"}>
                                        Email me at:
                                    </span>
                                    <span className={"text-gray-700 font-bold text-start"}>
                                        leandropoliti26june@gmail.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-wrap items-start justify-around"}>
                        <div onMouseLeave={() => setButtonHover((prevState) => (
                               {...prevState, phoneNumberHovered: false}
                           ))}
                           onMouseEnter={() => setButtonHover((prevState) => (
                               {...prevState, phoneNumberHovered: true}
                           ))}
                           onClick={() => navigator.clipboard.writeText("+393773873337")}
                        >
                            <div className={"flex reference-box-gw shadow-lg shadow-green-300/70 hover:inset-shadow-sm inset-shadow-green-500"}
                            >
                                <div>
                                    <FaWhatsappSquare className={"w-14 h-14 fill-current"}
                                             color={`${buttonHover.phoneNumberHovered ? "#93e4c1" : "black"}`}/>
                                </div>
                                <div className={"flex flex-col"}>
                                    <span className={"text-black font-bold text-start"}>
                                        Contact me on WhatsApp:
                                    </span>
                                    <span className={"text-gray-700 font-bold text-start"}>
                                        +393773873337
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