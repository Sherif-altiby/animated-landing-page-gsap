import Image from "next/image"
import { navLinks } from "../__constants"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
	 <div>
		<a href="#home" className="flex items-center gap-2">
		 <Image
                src="/images/logo.png"
                alt="logo"
                width={40}
                height={40}
         />
		 <p>Velvet Pour</p>
		</a>
		
		<ul>
		 {navLinks.map((link) => (
			<li key={link.id}>
			 <Link href={`#${link.id}`}>{link.title} </Link>
			</li>
		 ))}
		</ul>
	 </div>
	</nav>
  )
}

export default Navbar