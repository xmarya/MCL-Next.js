import Link from "next/link";

export default function Navigation() {
  
  return (
    <nav >
      <ul>
        <li>
          <Link href="/">
            الرئيسية
          </Link>
        </li>
        <li>
          <Link href="/beans">
            المحاصيل
          </Link>
        </li>
        <li>
          <Link href="/roasters">
            المحامص
          </Link>
        </li>
        <li>
          <Link href="/nearestRoasters">
          محامص قريبة
          </Link>
        </li>     
      </ul>
    </nav>
  );
}
