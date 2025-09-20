"use client";
import { ToastProvider } from "@/components/providers/toast-provider";
import { SessionProvider } from "next-auth/react";
import * as React from "react";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
        {children}
        <ToastProvider />
    </SessionProvider>
  );
}
