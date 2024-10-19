import { BarMzdaRoky } from "@/components/bar1";
import { BarMzdaKraje } from "@/components/bar2";
import { BarPotrebaHypo } from "@/components/bar3";
import MapCR from "@/components/mapa";
import { PomerovaKrivka } from "@/components/pomer";
import { Velkygraf } from "@/components/velkygraf";
import { BarPrumernaCena } from "@/components/bar4";

export default function Home() {
  return (
    <div>
      {/*srovnani mzda, cena a dohromady */}
      <Velkygraf></Velkygraf>
      <BarMzdaRoky></BarMzdaRoky>
      <BarPotrebaHypo></BarPotrebaHypo>
      <BarMzdaKraje></BarMzdaKraje>
      <BarPrumernaCena></BarPrumernaCena>
      <PomerovaKrivka></PomerovaKrivka>
    </div>
  );
}
