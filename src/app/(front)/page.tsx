import App from "next/app";
import AppWelcome from "./components/AppWelcome";
import Hero02 from "@/src/components/hero-02/hero-02";
import Footer05Page from "@/src/components/footer-05/footer-05";

export default function Home() {
  return (
    <>
      <Hero02 />
      <Footer05Page />  
    </>
  );
};