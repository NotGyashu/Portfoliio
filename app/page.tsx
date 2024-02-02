"use client"
import Image from "next/image";
import Hero from "./component/main/hero";
import "./globals.css";
import Skills from "./component/main/skills";
import Encryption from "./component/main/pentograph";
import Projects from "./component/main/Projects";
import Link from "next/link";
import Pentograph from "./component/main/pentograph";

export default function Home() {
  

  return (
    <main className="h-full w-full overflow-x-hidden ">
      <div className="flex flex-col gap-3 global-color">
       
         <Hero />
       
        
          <Skills />
      
     
          <Pentograph /> 
     
        
          <Projects />
      
      </div>
    </main>
  );
}
