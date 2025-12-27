import { Button } from './ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import {useLanguageContext} from "@/App.tsx";

export const scrollToContacts = () =>{
    document.getElementById("contacts")?.scrollIntoView({behavior: "smooth", block: "start"});
}

const Header = () => {
    const {ln, setLn} = useLanguageContext();
    const scrollToTop = () => {
        window.scrollTo({top: 0,
            left: 0,
            behavior: "smooth",});
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
    
    return (
        <div id={"header"} className={"h-16 2xl:h-20 w-screen flex items-center justify-center fixed z-10 bg-gray-950"}>
            <div className={"h-full w-full 2xl:w-4/5"}>
                <div className={"flex justify-between items-center p-4 text-white h-full w-full " +
                    "rounded-2xl"}>
                    <div>
                        <Button onClick={scrollToTop} variant={"link"} className={"p-1 2xl:p-4 2xl:text-[16px] text-po " +
                            "text-[13px] font-Outfit cursor-pointer"}>Leandro Tattoo</Button>
                    </div>
                    <div className={"flex justify-between items-center h-full w-auto gap-3"}>
                        <Button onClick={scrollToArtist} variant={"link"} className={"p-1 2xl:p-4 text-[13px] 2xl:text-[16px] text-gw font-Outfit cursor-pointer"}>Artist</Button>
                        <Button onClick={scrollToWorks} variant={"link"} className={"p-1 2xl:p-4 text-[13px] 2xl:text-[16px] text-gw font-Outfit cursor-pointer"}>My works</Button>
                        <Button onClick={scrollToFaq} variant={"link"} className={"p-1 2xl:p-4 text-[13px] 2xl:text-[16px] text-gw font-Outfit cursor-pointer"}>
                            {window.innerWidth >= 1024 ? "Frequently Asked Questions" : "F.A.Q."}</Button>
                    </div>
                    <div>
                        <Button onClick={scrollToContacts} variant={"link"} className={"p-1 2xl:p-4 text-[13px] 2xl:text-[16px] cursor-pointer font-Outfit"}>
                            <span className={"text-gw"}>Contacts</span></Button>
                    </div>
                </div>
                <hr className={"w-full"}/>
            </div>
            <Select value={ln} onValueChange={setLn}>
                <SelectTrigger className="bg-gray-950 scale-[0.9] lg:scale-[1] w-22 2xl:w-28.75 text-[12px] 2xl:text-[16px] absolute top-18 right-1 2xl:top-[2.4vh] 2xl:right-[2vw] text-amber-50 font-Outfit">
                    <SelectValue placeholder="Language"/>
                </SelectTrigger>
                <SelectContent className={"dark bg-gray-950"}>
                    <SelectGroup className={`text-amber-50 font-Outfit`}>
                        <SelectItem value={"en"} className={"text-[12px] focus:bg-gray-900 2xl:text-[16px]"}>English</SelectItem>
                        <SelectItem value="it" className={"text-[12px] focus:bg-gray-900 2xl:text-[16px]"}>Italian</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default Header;