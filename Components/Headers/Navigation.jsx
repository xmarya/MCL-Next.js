import Link from "next/link";

export default function Navigation() {
  
  return (
    <nav className=" text-2xl bg-gray-700 z-10">
      <ul className="flex gap-40 items-center">
        <li>
          <Link href="/beans" className=" text-foreground hover:text-accent-400 transition-colors">
            المحاصيل
          </Link>
        </li>
        <li>
          <Link href="/roasters" className="hover:text-accent-400 transition-colors">
            المحامص
          </Link>
        </li>
        <li>
          <Link href="/nearestRoasters" className="hover:text-accent-400 transition-colors">
          محامص قريبة
          </Link>
        </li>     
      </ul>
    </nav>
  );
}
