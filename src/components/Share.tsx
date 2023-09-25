import React from "react";
import Link from "next/link";
import { BiLink } from "react-icons/bi";

export default function Share() {
  const copyToClipboard = () => {
    const url = window.location.href;
    const tempInput = document.createElement("input");
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Copiado!");
  };

  return (
    <div className="flex flex-row items-center justify-between mt-14">
      <div className="sm:mb-3">
        <p className="text-muted-foreground  tracking-normal  font-semibold">
          Partilhe o artigo
        </p>
      </div>
      <div className="flex flex-row gap-6 sm:mb-3">
        <Link href="" onClick={copyToClipboard}>
          <BiLink size={22} />
        </Link>
      </div>
    </div>
  );
}
