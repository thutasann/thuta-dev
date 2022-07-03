import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Thuta Sann - Frontend Developer, Blockchain Developer",
    description: `I've been developing REACTJS websites for about 4 years. I'm now digging into WEB3.0 Development`,
    image: "/thutasann.jpeg",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" type="image/x-icon" href="/thutasann.jpeg"></link>
        <meta name="robots" content="follow, index" />
        <meta name="google-site-verification" content="lt2KD97W6zCJHumr4ckLHj-3cMOvWcJl30mKEJiglz8" />
        <meta name="keywords" content="Thuta Sann, Web Developer, BlockChain Developer, UI/UX Designer, Song Composer, FullStack Developer, Content Manager" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://thutasann.vercel.app/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://thutasann.vercel.app/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Thuta Sann" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thutasann3" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
