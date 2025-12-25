import { Button } from './ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import {useState} from "react";

const Header = () => {
    const [ln, setLn] = useState<string>("en");

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    
    const scrollToArtist = () =>{
        document.getElementById("artist")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    
    const scrollToWorks = () =>{
        document.getElementById("projects-board")?.scrollIntoView({behavior: "smooth", block: "start"});
    }
    
    const scrollToFaq = () =>{
        document.getElementById("faq")?.scrollIntoView({behavior: "smooth", block: "start"});
    }

    const scrollToContacts = () =>{
        document.getElementById("contacts")?.scrollIntoView({behavior: "smooth", block: "start"});
    }
    
    return (
        <div id={"header"} className={"h-20 w-full flex items-center justify-center fixed z-10 bg-gray-950"}>
            <div className={"h-full w-4/5"}>
                <div className={"flex justify-between items-center p-4 text-white h-full w-full " +
                    "rounded-2xl"}>
                    <div>
                        <Button onClick={scrollToTop} variant={"link"} className={"text-amber-50"}>Leandro Tattoo</Button>
                    </div>
                    <div className={"flex justify-between items-center h-full w-auto gap-2"}>
                        <Button onClick={scrollToArtist} variant={"link"} className={"text-amber-50"}>Artist</Button>
                        <Button onClick={scrollToWorks} variant={"link"} className={"text-amber-50"}>My works</Button>
                        <Button onClick={scrollToFaq} variant={"link"} className={"text-amber-50"}>Frequently Asked Questions</Button>
                    </div>
                    <div>
                        <Button onClick={scrollToContacts} className={"bg-red-600 hover:bg-red-700 rounded-3xl cursor-pointer"}>Contact me</Button>
                    </div>
                </div>
                <hr className={"w-full"}/>
            </div>
            <Select value={ln} onValueChange={setLn}>
                <SelectTrigger className="w-28.75 absolute top-[2.4vh] right-[2vw] text-amber-50">
                    <SelectValue placeholder="Language"/>
                </SelectTrigger>
                <SelectContent className={"dark"}>
                    <SelectGroup className={`text-amber-50`}>
                        <SelectItem value={"en"}>English</SelectItem>
                        <SelectItem value="it">Italian</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default Header;