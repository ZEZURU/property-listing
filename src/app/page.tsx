import Link from "next/link";
import Hero from "./components/Hero";
import Sectionlist from "./components/Sectionlist";

export default function Home() {
  return (
    <>
    
    
    <Link href="/listings"></Link>
    
    <Hero />
    <Sectionlist />

    <h1> food </h1>
    </>
  );
}
