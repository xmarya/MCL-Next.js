import { getCurrentUser } from "@/API/apiUsers";
import Link from "next/link";

export default async function Navigation() {
  const {image} = await getCurrentUser();
  
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/beans" className="hover:text-accent-400 transition-colors">
            Beans
          </Link>
        </li>
        <li>
          <Link href="/roasters" className="hover:text-accent-400 transition-colors">
            Roasters
          </Link>
        </li>
        <li>
          <Link href="/nearestRoasters" className="hover:text-accent-400 transition-colors">
          Nearest Roasters
          </Link>
        </li>       
        <li>
          {image ?
            <Link
            href="/dashboard"
            className="flex items-center gap-4 hover:text-accent-400 transition-colors">
            {/*<img className="h-8 w-8 rounded-full" referrerPolicy="no-referrer" src={session.user.image} alt={session.user.name} /> */}
            <span>لوحة التحكم</span>
          </Link>
          : <Link
            href="/login"
            className="hover:text-accent-400 transition-colors">
            تسجيل الدخول
          </Link>}
        </li>
         
      </ul>
    </nav>
  );
}
