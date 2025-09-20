"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-stone-50 text-center px-4">
      <h1 className="text-4xl font-bold text-stone-900 mb-4">Unauthorized</h1>
      <p className="text-stone-600 mb-6">
        You do not have permission to access this page.
      </p>
      <Link href="/">
        <Button className="bg-amber-600 hover:bg-amber-700 text-white">
          Go Home
        </Button>
      </Link>
    </div>
  );
}
