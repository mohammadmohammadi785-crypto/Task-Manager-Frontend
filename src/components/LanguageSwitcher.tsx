"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  function changeLang(lang: string) {
    document.cookie = `locale=${lang};max-age=2596000;path=/`;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Languages />
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
