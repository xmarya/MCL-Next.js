import { getCurrentUser } from "@/API/apiUsers";
import Link from "next/link";

export default async function Navigation() {
  const {image} = await getCurrentUser();
  
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/cabins" className="hover:text-accent-400 transition-colors">
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-400 transition-colors">
            About
          </Link>
        </li>
        
        <li>
          {image ?
            <Link
            href="/account"
            className="flex items-center gap-4 hover:text-accent-400 transition-colors">
            {/*<img className="h-8 w-8 rounded-full" referrerPolicy="no-referrer" src={session.user.image} alt={session.user.name} /> */}
            <span>Guest area</span>
          </Link>
          : <Link
            href="/account"
            className="hover:text-accent-400 transition-colors">
            Guest area
          </Link>}
        </li>
         
      </ul>
    </nav>
  );
}
