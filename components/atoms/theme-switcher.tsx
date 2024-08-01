"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or return a placeholder like <div>Loading...</div>
  }

  const isLightTheme = theme === "light" || resolvedTheme === "light";

  return isLightTheme ? (
    <Sun
      className="h-[1.2rem] w-[1.2rem] transition-all text-primary cursor-pointer"
      onClick={() => setTheme("dark")}
    />
  ) : (
    <Moon
      className="h-[1.2rem] w-[1.2rem] transition-all text-primary cursor-pointer"
      onClick={() => setTheme("light")}
    />
  );
};

export { ThemeSwitcher };
