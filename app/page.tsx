import Image from "next/image";
import Hero from "./component/main/hero";
import "./globals.css";
import Skills from "./component/main/skills";
import Encryption from "./component/main/encryption";
import Projects from "./component/main/Projects";

export default function Home() {
  return (
   <main className="h-full w-full ">
    <div className="flex flex-col gap-20 ">
      <Hero/>
      <Skills/>
      <Encryption/>
      <Projects/>
     
    </div>


   </main>
  );
}
