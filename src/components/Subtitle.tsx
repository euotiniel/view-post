import React from "react";

type SubtitleProps = {
  children: React.ReactNode;
};

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <h2 className="mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 pb-2n font-extrabold text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  );
}
