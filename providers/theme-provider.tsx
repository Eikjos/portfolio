"use client";

import { Header } from "@/components/templates/header";
import { ClientOnly } from "@/hooks/useClient";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <ClientOnly fallback={children}>
      <NextThemesProvider attribute="class" {...props}>
        <Header />
        {children}
      </NextThemesProvider>
    </ClientOnly>
  );
}
