import Link from "next/link";
import { getCurrentUser } from "@/API/apiUsers";

export default async function QuickAccess() {
  const user = await getCurrentUser();

  return (
    <nav className="bg-orange-400">
      <ul>
        <li>
          {user?.image ?
            <Link
              href="/dashboard"
              className="flex items-center gap-4 hover:text-accent-400 transition-colors">
              <img
                className="h-8 w-8 rounded-full"
                referrerPolicy="no-referrer"
                src={user?.image}
                alt="الملف الشخصي"
              />
            </Link>
            :
            <div className="flex items-center gap-3">
              <Link
              href="/login"
              className="hover:text-accent-400 transition-colors">
              تسجيل الدخول
            </Link>
            <span>|</span>
              <Link
              href="/signup"
              className="hover:text-accent-400 transition-colors">
              مستخدم جديد
            </Link>
            </div>
            
          }
        </li>
      </ul>
    </nav>
  );
}
/* 
  الملف الشخصي
  مفضلاتي
  تقييماتي
  حروج
*/
