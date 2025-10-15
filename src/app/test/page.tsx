// src/app/test/page.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="px-4 py-2 rounded-lg border border-black dark:border-white"
    >
      Toggle to {isDark ? "Light" : "Dark"} Mode
    </button>
  );
}

export default function TestPage() {
  return (
    <div
      className="
        min-h-screen flex flex-col items-center justify-center gap-8 
        bg-white text-black 
        dark:bg-black dark:text-white
        transition-colors duration-300
      "
    >
      <h1 className="text-4xl font-bold">Theme Test Page</h1>
      <p>Click the button to toggle the theme.</p>
      <ThemeToggle />
    </div>
  );
}