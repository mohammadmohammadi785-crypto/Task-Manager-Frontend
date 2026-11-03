"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  });
  if (!mount) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {theme === "dark" ? (
          <Moon size={18} />
        ) : theme === "light" ? (
          <Sun size={18} />
        ) : (
          <SunMoon size={18} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <div className="w-full flex justify-between">
            Dark
            <Moon size={18} />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <div className="w-full flex justify-between">
            Light
            <Sun size={18} />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <div className="w-full flex justify-between">
            System
            <SunMoon size={18} />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
