import { Bookkeeper } from "@/components/sections/bookkeeper";
import { Hero } from "@/components/sections/hero";
import { Pipeline } from "@/components/sections/pipeline";
import { PubThursdays } from "@/components/sections/pub-thursdays";
import { SiteFooter } from "@/components/sections/site-footer";
import { Suncorp } from "@/components/sections/suncorp";

export default function Home() {
  return (
    <>
      <main className="mx-auto w-full max-w-3xl px-6">
        <Hero />
        <PubThursdays />
        <Pipeline />
        <Bookkeeper />
        <Suncorp />
      </main>
      <SiteFooter />
    </>
  );
}
