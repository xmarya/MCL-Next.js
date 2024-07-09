"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
      name: 'Dashboard',
      href: '/dashboard',
    //   icon: <HomeIcon className='h-5 w-5 text-primary-600' />,
    },
    {
      name: 'Update Password',
      href: '/dashboard/updatePassword',
    //   icon: <UpdatePassword className='h-5 w-5 text-primary-600' />,
    },
    {
      name: 'Delete Account',
      href: '/dashboard/deleteAccount',
    //   icon: <UserIcon className='h-5 w-5 text-primary-600' />,
    },
  ];

export default function SideNavigation() {
    const pathname = usePathname(); // this gets the URL of the current route. 
    return (
        <nav className='border-r border-primary-900'>
            <ul className='flex flex-col gap-2 h-full text-lg'>
                {navLinks.map((link) => (
                <li key={link.name}>
                    <Link
                    className={`${pathname === link.href ? "bg-primary-900" : ""} py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200`}
                    href={link.href}
                    >
                    {link?.icon}
                    <span>{link.name}</span>
                    </Link>
                </li>
                ))}

                <li className='mt-auto'>
                {/* <SignOutButton /> */}
                </li>
            </ul>
        </nav>
    )
}

