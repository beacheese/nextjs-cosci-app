import Features05Page from "@/src/components/features-05/features-05";
import Footer05Page from "@/src/components/footer-05/footer-05";

export default async function Course() {
    const data = await fetch('https://api.codingthailand.com/api/course', {cache: 'no-store'});
    const courses = await data.json();
    return (
        <>
            {
                courses && <Features05Page courses={courses.data} />
            }
            <Footer05Page />
        </>
    );
};
