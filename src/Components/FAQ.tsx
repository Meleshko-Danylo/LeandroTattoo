import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"

const FAQ = () => {
    return (
        <div id={"faq"} className={"w-3/5 scroll-mt-20 flex flex-col gap-4 items-start justify-start appear"}>
            <span className={"text-po text-3xl font-FingerPrint"}>Frequently Asked Questions</span>
            <div className={"w-full flex justify-start items-start gap-4 mb-10"}>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full font-Outfit"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className={"text-amber-50"}>How do I book an appointment ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-amber-50">
                            <p>
                                To book an appointment, you need to contact me directly via instagram, email or phone.
                                Our team will assist you in scheduling a convenient time that suits your availability.
                            </p>
                            <p>
                                Key features include advanced processing capabilities, and an
                                intuitive user interface designed for both beginners and experts.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className={"text-amber-50"}>Can I bring a friend to my session ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-amber-50">
                            <p>
                                We offer worldwide shipping through trusted courier partners.
                                Standard delivery takes 3-5 business days, while express shipping
                                ensures delivery within 1-2 business days.
                            </p>
                            <p>
                                All orders are carefully packaged and fully insured. Track your
                                shipment in real-time through our dedicated tracking portal.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className={"text-amber-50"}>How should I prepare for my appointment ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-amber-50">
                            <p>
                                We stand behind our products with a comprehensive 30-day return
                                policy. If you&apos;re not completely satisfied, simply return the
                                item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className={"text-amber-50"}>Product Information</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-amber-50">
                            <p>
                                Our flagship product combines cutting-edge technology with sleek
                                design. Built with premium materials, it offers unparalleled
                                performance and reliability.
                            </p>
                            <p>
                                Key features include advanced processing capabilities, and an
                                intuitive user interface designed for both beginners and experts.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className={"text-amber-50"}>Shipping Details</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-amber-50">
                            <p>
                                We offer worldwide shipping through trusted courier partners.
                                Standard delivery takes 3-5 business days, while express shipping
                                ensures delivery within 1-2 business days.
                            </p>
                            <p>
                                All orders are carefully packaged and fully insured. Track your
                                shipment in real-time through our dedicated tracking portal.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className={"text-amber-50"}>Return Policy</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-amber-50">
                            <p>
                                We stand behind our products with a comprehensive 30-day return
                                policy. If you&apos;re not completely satisfied, simply return the
                                item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;