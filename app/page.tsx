import { Hero } from "@/components/sections/hero";
import { Pipeline } from "@/components/sections/pipeline";
import { PubThursdays } from "@/components/sections/pub-thursdays";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Skills } from "@/components/sections/skills";
import { Suncorp } from "@/components/sections/suncorp";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1120px] px-6 sm:px-10">
      <SiteHeader />
      <main>
        <Hero />
        <PubThursdays />
        <Pipeline />
        <Skills />
        <Suncorp />
      </main>
      <SiteFooter />
    </div>
  );
}
