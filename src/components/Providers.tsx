"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class">
      <Theme
        accentColor="yellow"
        grayColor="gray"
      >
        {children}
      </Theme>
    </NextThemesProvider>
  );
}
