export type TranslationSchema = {
    header: {
        artist: string;
        works: string;
        faq: string;
        faqShort: string;
        contacts: string;
    };
    home: {
        title: string;
        contacts: string;
    };
    about: {
        title: string;
        name: string;
        experience: string;
        bio: string;
        quote1: string;
        quote2: string;
    };
    projects: {
        title: string;
        feedback: Record<string, string>;
    };
    contacts: {
        title: string;
        instagram: string;
        email: string;
        whatsapp: string;
        location: string;
        copied: string;
    };
    faq: {
        title: string;
        q1: string;
        a1: string;
        q2: string;
        a2: string;
        q3: string;
        a3: string;
        q4: string;
        a4: string;
        q5: string;
        a5: string;
        q6: string;
        a6: string;
    };
};

export type DotPath<T> =  {
    [K in keyof T & string]:
    T[K] extends string
        ? K
        : `${K}.${DotPath<T[K]>}`;
}[keyof T & string];

export const translations: Record<string, TranslationSchema> = {
    en: {
        header: {
            artist: "Artist",
            works: "My works",
            faq: "Frequently Asked Questions",
            faqShort: "F.A.Q.",
            contacts: "Contacts"
        },
        home: {
            title: "I'll help you find the right project for you",
            contacts: "Contacts"
        },
        about: {
            title: "Meet the artist!",
            name: "Leandro",
            experience: "5+\nyears of experience",
            bio: "I am passionate about art and my goal is to create something different to look at and that can convey sensations. After completing the school of arts I started working in an aeronautical company as a mechanic and painter, in the afternoon I dedicated myself to airbrushing in my studio for five years until I decided to travel to challenge myself, study and work abroad . After having done a lot of different work experiences and none of them satisfied me I realized that I had to work with my passion painting and drawing. for any painting or airbrushing work on all surfaces, do not hesitate to contact me.",
            quote1: "For me, a tattoo is an art installation that I get to wear all the time. It’s all about self-expression. You get to wear your insides on your outsides.",
            quote2: "Tattoos exude pain and pleasure all at the same time."
        },
        projects: {
            title: "My works",
            feedback: {
                f1: "Even better than I imagined!",
                f2: "Lovely done! Thank you!",
                f3: "Thank you very much!",
                f4: "Amazing work! Thank you!",
                f5: "Awesome!",
                f6: "Great job! I'm in love with the result",
                f7: "Awesome work! Thank you!",
                f8: "Stunning design! Thank you!",
                f9: "So lovely! Thank you!",
                f10: "I'm in love with this!",
                f11: "Thank you so much!",
                f12: "Perfectly done!",
                f13: "Thank you for your work!",
                f14: "Great job",
                f15: "Just like I imagined it!"
            }
        },
        contacts: {
            title: "My Social Media",
            instagram: "My Instagram:",
            email: "Email me at:",
            whatsapp: "Contact me on WhatsApp:",
            location: "Working in Caltagirone (CT) 95041",
            copied: "copied!"
        },
        faq: {
            title: "Frequently Asked Questions",
            q1: "How do I book an appointment ?",
            a1: "To book an appointment, you need to contact me directly via instagram, email or whatsapp. Together we will schedule a convenient time that suits your availability.",
            q2: "Can I bring a friend to my session ?",
            a2: "Yes, you can bring a friend, but we recommend coming alone to ensure the best focus for the artist.",
            q3: "How should I prepare for my appointment ?",
            a3: "Make sure to be well-rested, hydrated, and have eaten a good meal. Wear comfortable clothing that allows easy access to the area being tattooed.",
            q4: "What is the cost of a tattoo ?",
            a4: "The price varies depending on the complexity of the design and the size of the piece. Please contact me for a personalized and reasonable estimate based on your specific needs.",
            q5: "How do I care my new tattoo ?",
            a5: "gently washing with mild soap, patting dry with a paper towel, and applying a thin layer of fragrance-free lotion or ointment to keep it moisturized, while avoiding sun, soaking (baths/pools), scratching, tight clothes, and heavy exercise, until the wound has healed completely. This helps to prevent infection and fading, ensuring healing",
            q6: "How long does it take for a tattoo to heal ?",
            a6: "A tattoo usually takes about 1-2 weeks to look fully healed, but takes another few weeks to be truly healed at all layers of the skin."
        }
    },
    it: {
        header: {
            artist: "Artista",
            works: "I miei lavori",
            faq: "Domande frequenti",
            faqShort: "F.A.Q.",
            contacts: "Contatti"
        },
        home: {
            title: "Ti aiuterò a trovare il progetto giusto per te",
            contacts: "Contatti"
        },
        about: {
            title: "Incontra l'artista!",
            name: "Leandro",
            experience: "5+\nanni di esperienza",
            bio: "Sono appassionato di arte e il mio obiettivo è creare qualcosa di diverso da guardare e che possa trasmettere sensazioni. Dopo aver completato la scuola d'arte ho iniziato a lavorare in un'azienda aeronautica come meccanico e verniciatore, nel pomeriggio mi sono dedicato all'aerografia nel mio studio per cinque anni finché non ho deciso di viaggiare per mettermi alla prova, studiare e lavorare all'estero. Dopo aver fatto molte esperienze lavorative diverse e nessuna di queste mi ha soddisfatto, ho capito che dovevo lavorare con la mia passione: dipingere e disegnare. Per qualsiasi lavoro di pittura o aerografia su tutte le superfici, non esitate a contattarmi.",
            quote1: "Per me, un tatuaggio è un'installazione artistica che posso indossare tutto il tempo. È tutta una questione di espressione di sé. Indossi il tuo interno all'esterno.",
            quote2: "I tatuaggi trasudano dolore e piacere allo stesso tempo."
        },
        projects: {
            title: "I miei lavori",
            feedback: {
                f1: "Ancora meglio di quanto immaginassi!",
                f2: "Lavoro fantastico! Grazie!",
                f3: "Grazie mille!",
                f4: "Lavoro incredibile! Grazie!",
                f5: "Eccezionale!",
                f6: "Ottimo lavoro! Amo il risultato",
                f7: "Lavoro fantastico! Grazie!",
                f8: "Design sbalorditivo! Grazie!",
                f9: "Così carino! Grazie!",
                f10: "Lo adoro!",
                f11: "Grazie mille!",
                f12: "Eseguito perfettamente!",
                f13: "Grazie per il tuo lavoro!",
                f14: "Ottimo lavoro",
                f15: "Proprio come l'avevo immaginato!"
            }
        },
        contacts: {
            title: "I miei Social Media",
            instagram: "Il mio Instagram:",
            email: "Scrivimi a:",
            whatsapp: "Contattami su WhatsApp:",
            location: "Lavoro a Caltagirone (CT) 95041",
            copied: "copiato!"
        },
        faq: {
            title: "Domande frequenti",
            q1: "Come posso prenotare un appuntamento?",
            a1: "Per prenotare un appuntamento, è necessario contattarmi direttamente tramite Instagram, e-mail o WhatsApp. Insieme fisseremo un orario conveniente che si adatti alla tua disponibilità.",
            q2: "Posso portare un amico alla mia sessione?",
            a2: "Sì, puoi portare un amico, ma ti consigliamo di venire da solo per garantire la massima concentrazione dell'artista.",
            q3: "Come devo prepararmi per l'appuntamento?",
            a3: "Assicurati di essere ben riposato, idratato e di aver mangiato bene. Indossa abiti comodi che consentano un facile accesso alla zona da tatuare.",
            q4: "Quanto costa un tatuaggio?",
            a4: "Il prezzo varia a seconda della complessità del disegno e delle dimensioni del pezzo. Contattatemi per un preventivo personalizzato e ragionevole in base alle vostre esigenze specifiche.",
            q5: "Come mi prendo cura del mio nuovo tatuaggio?",
            a5: "lavare delicatamente con sapone neutro, asciugare tamponando con carta assorbente e applicare un sottile strato di lozione o pomata senza profumo per mantenerla idratata, evitando l'esposizione al sole, i bagni (vasca/piscina), il grattarsi, gli indumenti stretti e l'esercizio fisico intenso, fino alla completa guarigione della ferita. Questo aiuta a prevenire infezioni e scolorimento, garantendo la guarigione.",
            q6: "Quanto tempo ci vuole perché un tatuaggio guarisca?",
            a6: "Di solito ci vogliono circa 1-2 settimane perché un tatuaggio sembri completamente guarito, ma occorrono altre settimane perché sia veramente guarito a tutti gli strati della pelle."
        }
    }
};
