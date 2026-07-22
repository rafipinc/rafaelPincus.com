import { Bookkeeper } from "@/components/sections/bookkeeper";
import { ForwardDeployed } from "@/components/sections/forward-deployed";
import { Hero } from "@/components/sections/hero";
import { PubThursdays } from "@/components/sections/pub-thursdays";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Skills } from "@/components/sections/skills";
import { Suncorp } from "@/components/sections/suncorp";
import { getLiveStats } from "@/lib/live-stats";

// Regenerate the page every 6 hours so the production stats stay fresh.
export const revalidate = 21600;

export default async function Home() {
  const stats = await getLiveStats();
  return (
    <div className="mx-auto w-full max-w-[1120px] px-6 sm:px-10">
      <SiteHeader />
      <main>
        <Hero />
        <PubThursdays stats={stats} />
        <Bookkeeper />
        <Suncorp />
        <ForwardDeployed />
        <Skills />
      </main>
      <SiteFooter />
    </div>
  );
}
