import Contact01Page from "@/src/components/contact-01/contact-01";
import Footer05Page from "@/src/components/footer-05/footer-05";
// import { verify } from "crypto";

export default async function About() {
    const data = await fetch('https://api.codingthailand.com/api/version', {next: {revalidate: 3600}});
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