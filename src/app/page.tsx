"use client";

import { MDXProvider } from '@mdx-js/react';
import MeuArtigo from '../article/artigo.mdx'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Info from "@/components/Info";

export default function View() {
  return (
    <div className="min-h-screen flex-col items-center justify-between xl:p-9 lg:xl:p-9 md:xl:p-9 sm:xl:p-9 p-5">
      <div className="container">
        <Header />
      </div>
      <Info />
      <MDXProvider components={{}}>
        <MeuArtigo />
      </MDXProvider>
      <Footer />
    </div>
  );
}
