import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./__components/Navbar";
import Hero from "./__components/Hero";
import Cocktails from "./__components/Cocktails";
import About from "./__components/About";
import Art from "./__components/Art";
import Menu from "./__components/Menu";
import Contact from "./__components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {
  return (
    <div>
        <main>
             <Navbar />
             <Hero />
             <Cocktails />
             <About />
             <Art />
             <Menu />
             <Contact />
        </main>
    </div>
  );
}
