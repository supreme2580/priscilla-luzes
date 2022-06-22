import Head from "next/head";
import Bio from "../components/Bio";
import Hero from "../components/Hero";
import SmallHero from "../components/SmallHero";

export default function Home() {
  return (
    <div className="w-full bg-zinc-800">
    <Head>
      <title>Priscilla Luzes</title>
      <link rel="icon" href="favicon.ico" />
    </Head>
      <div className="sm:hidden"><SmallHero /></div>
      <div className="hidden sm:block"><Hero /></div>
      <div className="mt-10"><Bio /></div>
    </div>
  )
}
