import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Body() {
  return (
    <>
      <div className="container-fluid  pt-10 md:pt-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-xs md:text-sm font-semibold">
            Mês dia, ano
          </div>
          <h2 className="mt-6 md:mt-10 scroll-m-20 pb-2 text-2xl md:text-4xl font-extrabold tracking-tight transition-colors first:mt-0">
            O título do seu artigo 
          </h2>
          <p className="text-sm text-muted-foreground leading-6 tracking-normal md:text-base font-semibold md:text-[14px] md:px-8 lg:px-16 xl:px-48 mt-4 md:mt-6">
            Aqui você pode adicioner um descrição do seu artigo. Fale um pouco
            sobre o que se trata, assim, só lendo essa descrição, será possível
            ter uma pequena ideia.
          </p>
          <div className="mt-4 md:mt-8">
            <Link
              href=""
              className="flex flex-row gap-2 items-center justify-center"
            >
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span
                  className="text-xs md:text-sm font-medium leading-none"
                  title="Um título que o represente"
                >
                  Seu Nome
                </span>

                <span className="text-xs md:text-sm text-muted-foreground">
                  @seunomedeusuário
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
