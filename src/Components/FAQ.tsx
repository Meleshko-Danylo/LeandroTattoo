import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"
import {useLanguageContext} from "@/App.tsx";

const FAQ = () => {
    const {t} = useLanguageContext();
    
    return (
        <div id={"faq"} className={"w-[90vw] 2xl:w-3/5 scroll-mt-20 flex flex-col gap-4 items-start justify-start appear"}>
            <h3 className={"text-po text-3xl lg:text-6xl xl:text-3xl leading-12 xl:leading-14 2xl:leading-20 2xl:text-5xl font-FingerPrint"}>{t('faq.title')}</h3>
            <div className={"w-full flex justify-start items-start gap-4 mb-10"}>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full font-Outfit"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className={"text-amber-50 lg:text-[26px] xl:text-[22px]"}>{t('faq.q1')}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance lg:text-[22px] xl:text-[18px] text-amber-50">
                            <p>
                                {t('faq.a1')}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className={"text-amber-50 lg:text-[26px] xl:text-[22px]"}>{t('faq.q2')}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance lg:text-[22px] xl:text-[18px] text-amber-50">
                            <p>
                                {t('faq.a2')}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className={"text-amber-50 lg:text-[26px] xl:text-[22px]"}>{t('faq.q3')}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance lg:text-[22px] xl:text-[18px] text-amber-50">
                            <p>
                                {t('faq.a3')}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full font-Outfit"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className={"text-amber-50 lg:text-[26px] xl:text-[22px]"}>{t('faq.q4')}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance lg:text-[22px] xl:text-[18px] text-amber-50">
                            <p>
                                {t('faq.a4')}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className={"text-amber-50 lg:text-[26px] xl:text-[22px]"}>{t('faq.q5')}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance lg:text-[22px] xl:text-[18px] text-amber-50">
                            <p>
                                {t('faq.a5')}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className={"text-amber-50 lg:text-[26px] xl:text-[22px]"}>{t('faq.q6')}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance lg:text-[22px] xl:text-[18px] text-amber-50">
                            <p>
                                {t('faq.a6')}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;