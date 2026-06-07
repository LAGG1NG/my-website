"use client";

import { useEffect, useState } from "react";

/**
 * 手动切换明暗主题的按钮。
 * 主题会保存到 localStorage，并通过 html.dark 触发 Tailwind 的 dark: 样式。
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;

    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="text-sm font-medium text-stone-500 underline-offset-4 transition-colors hover:text-stone-950 hover:underline dark:text-stone-400 dark:hover:text-stone-100"
      aria-label="切换明暗主题"
    >
      <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
      <span>{isDark ? "亮色" : "暗色"}</span>
    </button>
  );
}
