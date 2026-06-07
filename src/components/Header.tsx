import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

const Header: React.FC = () => {
  const navItems = useMemo(
    () => [
      { label: "Home", href: "/#home", id: "home" },
      { label: "Skills", href: "/#skills", id: "skills" },
      { label: "Experience", href: "/#experience", id: "experience" },
      { label: "Projects", href: "/#projects", id: "projects" },
      { label: "Contact", href: "/#contact", id: "contact" },
    ],
    [],
  );

  const [activeSectionId, setActiveSectionId] = useState<string>("home");

  useEffect(() => {
    const ids = navItems.map((i) => i.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const setFromHash = () => {
      const hashId = window.location.hash.replace("#", "");
      if (hashId && ids.includes(hashId)) setActiveSectionId(hashId);
    };

    setFromHash();
    window.addEventListener("hashchange", setFromHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0),
          )[0];
        const id = (visible?.target as HTMLElement | undefined)?.id;
        if (id) setActiveSectionId(id);
      },
      { root: null, rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.1, 0.2] },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("hashchange", setFromHash);
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [navItems]);

  return (
    <header className="bg-gray-800 z-10 text-white py-4 w-full sticky top-0">
      <nav className="container flex flex-col gap-4 md:flex-row items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Subhan Nizar</h1>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {navItems.map((item) => {
            const isActive = activeSectionId === item.id;
            const className = [
              "nav-link px-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800",
              isActive
                ? "nav-link-active text-white"
                : "text-white/80 hover:text-white",
            ].join(" ");

            return (
              <li key={item.id}>
                <Link href={item.href} className={className}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
