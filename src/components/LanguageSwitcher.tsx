"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LucideLanguages } from "lucide-react";

export default function LanguageSwitcher() {
  function changeLang(lang: string) {
    document.cookie = `locale=${lang};max-age=2596000;path=/`;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <LucideLanguages />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => changeLang("fa")}>
          دری
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLang("en")}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
