"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton, Tooltip } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import React from "react";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Tooltip content="Switch theme">
      <IconButton
        variant="ghost"
        className="cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </IconButton>
    </Tooltip>
  );
};
