import React from "react";

type ListProps = {
  children: React.ReactNode;
};

export default function List({ children }: ListProps) {
  return (
    <ul className="flex flex-col gap-[10px] my-6 ml-6 list-disc">{children}</ul>
  );
}
