"use client";
import Link from "next/link";
import LoginForm from "../LoginForm";

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <div className="mt-4 text-center text-sm">
        {`Don't have an account?`}
        <Link
          href="/auth/signup"
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          Sign up
        </Link>
      </div>
    </>
  );
}
