import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <section className="container mt-20 md:mt-32 lg:mt-32px  px-1 md:px-1 lg:px-48 flex flex-col gap-3">
      {children}
    </section>
  );
}
