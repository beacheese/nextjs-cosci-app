import Contact01Page from "@/components/contact-01/contact-01";
import Footer05Page from "@/components/footer-05/footer-05";
import { verify } from "crypto";

export default async function About() {
    const data = await fetch('https://api.codingthailand.com/api/version');
    const apiInfo = await data.json();
    return (
        <>
            {
                apiInfo && <Contact01Page version={apiInfo.data.version} />
            }
            <Footer05Page />
        </>
    );
};