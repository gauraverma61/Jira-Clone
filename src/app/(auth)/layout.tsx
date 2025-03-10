"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <main className=" bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <div className=" flex gap-2 items-center"></div>
          <Button asChild variant="secondary">
            <Link href={pathname == "/sign-in" ? "sign-up" : "sign-in"}>
              {pathname == "/sign-in" ? "Sign Up" : "Log In"}
            </Link>
          </Button>
        </nav>
        <div className=" flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
