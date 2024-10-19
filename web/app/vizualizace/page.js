import { BarMzdaRoky } from "@/components/bar1";
import { BarMzdaKraje } from "@/components/bar2";
import { BarPotrebaHypo } from "@/components/bar3";
import MapCR from "@/components/mapa";
import { PomerovaKrivka } from "@/components/pomer";
import { Velkygraf } from "@/components/velkygraf";
import { BarPrumernaCena } from "@/components/bar4";
import { BarPotrebnaCastka } from "@/components/bar5";
import Link from "next/link";
import { ModeToggle } from "@/components/themebtn";
import { TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center" href="/">
          <TrendingUp className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">NEMO</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/vizualizace"
          >
            Vizualiazce
          </Link>
          <ModeToggle />
        </nav>
      </header>
      {/*srovnani mzda, cena a dohromady */}
      <BarMzdaRoky></BarMzdaRoky>
      <BarPotrebaHypo></BarPotrebaHypo>
      <BarMzdaKraje></BarMzdaKraje>
      <BarPrumernaCena></BarPrumernaCena>
    </div>
  );
}
