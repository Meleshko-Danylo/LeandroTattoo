import React from 'react';

const ProjectCard = ({img, date, feedback, className}: {img: string, date: string, feedback?: string, className?: string}) => {
    
    const getRandomRotation = ()=> {
        const symbol = Math.random() > .5 ? '-' : '';
        if (symbol === '-') {
            return `-${Math.floor(Math.random()* 5) + 1}deg`;
        } else {
            return `${Math.floor(Math.random()* 5) + 1}deg`;
        }
    }
    
    return (
        <div className={`appear relative w-[70vw] h-[55vh] lg:w-[25vw] lg:h-[70vh] 2xl:w-[20vw] 2xl:h-[60vh] flex flex-col justify-between items-start gap-2 rounded-3xl bg-[#dbd8e3] shadow-lg 2xl:pt-8 
        2xl:pb-8 2xl:pl-5 2xl:pr-5 p-3 inset-shadow-sm inset-shadow-indigo-500 font-FingerPrint ${className || ''}`}
             style={{transform: `rotate(${getRandomRotation()})`}}
        >
            <div className={`absolute -top-6 -right-6 2xl:-top-12 2xl:-right-12 text-ellipsis whitespace-normal overflow-hidden w-28 h-28 
            2xl:w-[40%] 2xl:min-h-[30%] shadow-xl/30 bg-chart-4 p-1 2xl:p-2 flex items-center justify-center`}
                style={{transform: `rotate(${getRandomRotation()})`}}
            >
                <span className={"text-[16px] 2xl:text-2xl font-bold text-center"}>
                    {feedback}
                </span>
            </div>
            <img className={"img w-full h-[90%]"} src={img} alt="tattoo"/>
            <span className={"text-sidebar-foreground ml-2 mt-2 text-2xl font-bold"}>{date}</span>
        </div>
    );
};

export default ProjectCard;