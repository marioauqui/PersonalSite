"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until mounted to avoid SSR/CSR mismatch
  useEffect(() => setMounted(true), []);

  // Render a neutral button during SSR / before mount
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="px-3 py-1.5 rounded-xl border text-sm hover:opacity-80 transition"
      >
        Theme
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="px-3 py-1.5 rounded-xl border text-sm hover:opacity-80 transition"
      title={isDark ? "Switch to light" : "Switch to dark"}
    >
      {isDark ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}
