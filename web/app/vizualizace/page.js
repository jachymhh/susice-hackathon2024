import { BarMzdaRoky } from "@/components/bar1";
import { BarMzdaKraje } from "@/components/bar2";
import { BarPotrebaHypo } from "@/components/bar3";
import { BarPrumernaCena } from "@/components/bar4";
import { NavBar } from "@/components/nav";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>

      <BarMzdaRoky></BarMzdaRoky>
      <BarMzdaKraje></BarMzdaKraje>
      <BarPotrebaHypo></BarPotrebaHypo>
      <BarPrumernaCena></BarPrumernaCena>
    </div>
  );
}
