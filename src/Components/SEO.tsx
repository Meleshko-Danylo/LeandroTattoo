import { useLanguageContext } from '@/App';
import {useEffect} from "react";

const SEO = () => {
    const { ln, t } = useLanguageContext();
    
    const title = "Leandro Tattoo | Professional Tattoo Artist";
    const description = ln === 'it' 
        ? "Tatuatore professionista a Caltagirone e Catania. Specializzato in design personalizzati e tatuaggi artistici. Ti aiuterò a trovare il progetto giusto per te."
        : "Professional tattoo artist in Caltagirone and Catania. Specialist in custom designs and artistic tattoos. I'll help you find the right project for you.";
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Leandro Tattoo",
        "image": "https://leandro-tattoo.netlify.app/leandro-tattoo-logo.jpg",
        "@id": "https://leandro-tattoo.netlify.app/",
        "url": "https://leandro-tattoo.netlify.app/",
        "telephone": "",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Caltagirone",
            "addressRegion": "CT",
            "postalCode": "95041",
            "addressCountry": "IT"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.2382,
            "longitude": 14.5120
        },
        "sameAs": [
            "https://www.instagram.com/leandrotattooextreme/"
        ]
    };

    useEffect(() => {
        document.documentElement.lang = ln;
    }, [ln]);

    return (
        <article>
            <meta name="description" content={description} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </article>
    );
};

export default SEO;
