"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Calendar, CreditCard, LogOut, Settings, User } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: "/dashboard", label: "Übersicht", icon: <User size={20} /> },
    { href: "/dashboard/abo", label: "Abo", icon: <CreditCard size={20} /> },
    { href: "/calendar", label: "Kalender", icon: <Calendar size={20} /> },
    { href: "/settings", label: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <nav className="mobile-nav">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href ? "active" : ""}
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
      <button
        onClick={() => {
          localStorage.removeItem("kuaawo_user");
          router.push("/login");
        }}
      >
        <LogOut size={20} />
        Logout
      </button>
    </nav>
  );
}
