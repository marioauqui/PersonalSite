"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Load saved theme or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.remove("light-theme", "dark-theme");
      document.documentElement.classList.add(`${stored}-theme`);
    } else {
      // default dark theme
      document.documentElement.classList.add("dark-theme");
      setTheme("dark");
    }
  }, []);

  // Toggle handler
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove("light-theme", "dark-theme");
    document.documentElement.classList.add(`${newTheme}-theme`);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="px-3 py-1.5 rounded-xl border text-sm hover:opacity-80 transition"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? "🌞 Light" : "🌚 Dark"}
    </button>
  );
}
