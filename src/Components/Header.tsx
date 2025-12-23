// import React from 'react';
import { Button } from './ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"

const Header = () => {
    return (
        <div className={"h-[5rem] w-full flex items-center justify-center fixed z-10 bg-gray-950"}>
            <div className={"h-full w-4/5"}>
                <div className={"flex justify-between items-center p-4 text-white h-full w-full " +
                    "rounded-2xl"}>
                    <div>
                        <Button variant={"link"} className={"text-[var(--color-muted)]"}>Leandro Tattoo</Button>
                    </div>
                    <div className={"flex justify-between items-center h-full w-auto gap-2"}>
                        <Button variant={"link"} className={"text-[var(--color-muted)]"}>My works</Button>
                        <Button variant={"link"} className={"text-[var(--color-muted)]"}>About</Button>
                        <Button variant={"link"} className={"text-[var(--color-muted)]"}>Frequently Asked Questions</Button>
                    </div>
                    <div>
                        <Button className={"bg-red-600 hover:bg-red-700 rounded-3xl cursor-pointer"}>Book Appointment</Button>
                    </div>
                </div>
                <hr className={"w-full"}/>
            </div>
            <Select>
                <SelectTrigger className="w-[115px] absolute top-[2.4vh] right-[2vw]">
                    <SelectValue placeholder="Language"/>
                </SelectTrigger>
                <SelectContent className={"dark"}>
                    <SelectGroup className={`text-[var(--color-muted)]`}>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="it">Italian</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default Header;