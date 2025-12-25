import React, {useState} from 'react';
import {FaSquareInstagram} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
    const [buttonHover, setButtonHover] = useState({
        instagramLinkHovered: false,
        emailLinkHovered: false,
    });
    
    return (
        <div id={"contacts"} className={"appear w-3/5 scroll-mt-20 flex flex-col justify-start items-start gap-4"}>
            <span className={"text-3xl text-po"}>My Social Media</span>
            <div className={"relative w-full flex flex-col justify-center items-center gap-2"}>
                <div className={"contact-enter-line"}></div>
                <div className={"flex justify-around flex-wrap w-full gap-24"}>
                    <div className={"flex flex-wrap items-start justify-around"}>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/leandrotattooextreme/"
                           onMouseLeave={() => setButtonHover((prevState) => (
                               {...prevState, instagramLinkHovered: false}
                           ))}
                           onMouseEnter={() => setButtonHover((prevState) => (
                               {...prevState, instagramLinkHovered: true}
                           ))}>
                            <div className={"flex gap-5 reference-box-pw shadow-lg shadow-purple-600/70 hover:inset-shadow-sm inset-shadow-indigo-500"}>
                                <div>
                                    <FaSquareInstagram className={"w-14 h-14 fill-current"}
                                                       color={`${buttonHover.instagramLinkHovered ? "mediumpurple" : "black"}`}/>
                                </div>
                                <div className={"flex flex-col justify-around"}>
                            <span className={"text-black font-bold"}>
                                My Instagram:
                            </span>
                                    <span className={"text-gray-600 font-bold"}>
                                @leandrotattooextreme
                            </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={"flex flex-wrap items-start justify-around"}>
                        <a href="mailto:dan20152004@gmail.com" target="_blank" rel="noopener noreferrer"
                           onMouseLeave={() => setButtonHover((prevState) => (
                               {...prevState, emailLinkHovered: false}
                           ))}
                           onMouseEnter={() => setButtonHover((prevState) => (
                               {...prevState, emailLinkHovered: true}
                           ))}>
                            <div className={"flex gap-5 reference-box-rw shadow-lg shadow-red-800/70 hover:inset-shadow-sm inset-shadow-red-500"}
                            >
                                <div>
                                    <MdEmail className={"w-14 h-14 fill-current"}
                                             color={`${buttonHover.emailLinkHovered ? "darkred" : "black"}`}/>
                                </div>
                                <div className={"flex flex-col justify-around"}>
                                    <span className={"text-black font-bold"}>
                                        Email me at:
                                    </span>
                                    <span className={"text-gray-600 font-bold"}>
                                        leandro@tattooextreme.com
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;