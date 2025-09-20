"use client";

import { Toaster as SonnerToaster } from "sonner";
import { useTheme } from "next-themes";

export function ToastProvider() {
  const { theme } = useTheme();

  return (
    <SonnerToaster
      position="top-right"
      theme={theme as "light" | "dark" | "system"}
      className="toaster group"
      toastOptions={{
        style: {
          background: "var(--background)",
          color: "var(--foreground)",
          border: "1px solid var(--border)",
        },
        classNames: {
          toast: "rounded-lg border shadow-lg",
          description: "text-muted-foreground",
          actionButton: "bg-primary text-primary-foreground",
          cancelButton: "bg-muted text-muted-foreground",
          error:
            "!bg-destructive !text-destructive-foreground !border-destructive",
          success: "!bg-success !text-success-foreground !border-success",
          warning: "!bg-warning !text-warning-foreground !border-warning",
          info: "!bg-info !text-info-foreground !border-info",
        },
      }}
    />
  );
}
