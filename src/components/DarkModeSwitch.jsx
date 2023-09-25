"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbSun, TbMoonFilled } from "react-icons/tb";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <span className="text-2xl flex cursor-pointer">
      {mounted &&
        (currentTheme === "dark" ? (
          <TbSun className="text-white" onClick={() => setTheme("light")} />
        ) : (
          <TbMoonFilled onClick={() => setTheme("dark")} />
        ))}
    </span>
  );
}
