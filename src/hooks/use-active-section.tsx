import { useEffect, useState } from "react";

export default function useActiveSectionListener(initialActive: string = "") {
  const [active, setActive] = useState<string>(initialActive);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const handleScroll = () => {
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - window.screen.height / 3) {
          setActive(section.getAttribute("id") ?? "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [active] as const;
}
