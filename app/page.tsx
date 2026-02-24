import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./__components/Navbar";
import Hero from "./__components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {
  return (
    <div>
        <main>
             <Navbar />
             <Hero />
             <div className="h-screen bg-black" ></div>
        </main>
    </div>
  );
}
