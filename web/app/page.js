import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart, LineChart, MapPin, TrendingUp, Users } from "lucide-react";
import { NavBar } from "@/components/nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Průzkumník Českých Ekonomických Trendů
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Vizualizujte a analyzujte vývoj mezd a cen nemovitostí v
                  jednotlivých českých regionech v průběhu času.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/vizualizace">
                  <Button>Objevte Data</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Klíčové Funkce
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle>Regionální Porovnání</CardTitle>
                </CardHeader>
                <CardContent>
                  Porovnejte ekonomické indikátory mezi různými regiony v ČR.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <LineChart className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle>Analýza Časových Řad</CardTitle>
                </CardHeader>
                <CardContent>
                  Analyzujte trendy ve vývoji mezd a nemovitostí v rozmezí
                  několika let.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <BarChart className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle>Interaktivní Vizualizace</CardTitle>
                </CardHeader>
                <CardContent>
                  Objevujte data skrze interaktivní grafy pro lepší poznatky.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Náš Tým
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle>Tomáš Opatrný</CardTitle>
                  <CardDescription>Datový Specialista</CardDescription>
                </CardHeader>
                <CardContent>
                  Odborné znalosti ve statistické analýze a normalizaci dat.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle>Jáchym Hašek</CardTitle>
                  <CardDescription>Full-stack Vývojář</CardDescription>
                </CardHeader>
                <CardContent>
                  Zkušený ve vytváření webových aplikací a práci s daty.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle>Antonín Marek</CardTitle>
                  <CardDescription>Datový Specialista</CardDescription>
                </CardHeader>
                <CardContent>
                  Odborné znalosti v analýze a interpretaci dat.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="data"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        ></section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Jste připraveni poznat statistiky o Českém nemovitostním trhu?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Vnořte se do naší interaktivní platformy, a objevte informace
                  o mzdách a cenách nemovitostí napříč Českými regiony.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/vizualizace">
                  <Button size="lg">Pojďme na to!</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t justify-between">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Tomáš Opatrný, Antonín Marek, Jáchym Hašek - VOŠ a SPŠE Plzeň
        </p>
        <div className="flex items-center gap-2">
          <Link
            className="text-xs text-blue-500 hover:underline"
            href="https://github.com/jachymhh/susice-hackathon2024/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </Link>
        </div>
      </footer>
    </div>
  );
}
