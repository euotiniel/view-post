import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="hidden md:flex justify-between">
      <div>
        <Link href="/" title="Good Read">
          <span className="scroll-m-20 text-lg font-semibold tracking-tight">
            good.read
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <span className="leading-7 [&:not(:first-child)]:mt-6 text-sm text-muted-foreground"></span>
      </div>
    </header>
  );
}
