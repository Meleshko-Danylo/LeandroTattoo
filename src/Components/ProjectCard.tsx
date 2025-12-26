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
        <div className={`relative w-[20vw] h-[50vh] flex flex-col justify-between items-start gap-2 rounded-3xl bg-[#dbd8e3] shadow-lg pt-8 
        pb-8 pl-5 pr-5 inset-shadow-sm inset-shadow-indigo-500 font-FingerPrint ${className || ''}`}
             style={{transform: `rotate(${getRandomRotation()})`}}
        >
            <div className={`absolute -top-12 -right-12 w-[40%] min-h-[30%] shadow-xl/30 bg-chart-4 p-2`}
                style={{transform: `rotate(${getRandomRotation()})`}}
            >
                <span className={"text-sidebar-foreground text-2xl font-bold"}>
                    {feedback}
                </span>
            </div>
            <img className={"img w-full h-[90%]"} src={img} alt="tattoo"/>
            <span className={"text-sidebar-foreground ml-2 mt-2 text-2xl font-bold"}>{date}</span>
        </div>
    );
};

export default ProjectCard;