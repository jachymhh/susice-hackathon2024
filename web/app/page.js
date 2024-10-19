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
import { ModeToggle } from "@/components/themebtn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center" href="#">
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

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Czech Economic Trends Explorer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Visualize and analyze the development of wages and real estate
                  prices across Czech regions over time.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Explore Data</Button>
                <Button variant="outline">Learn More</Button>
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
              Key Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle>Regional Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  Compare economic indicators across different regions of the
                  Czech Republic.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <LineChart className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle>Time Series Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  Analyze trends in wages and real estate prices over multiple
                  years.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <BarChart className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle>Interactive Visualizations</CardTitle>
                </CardHeader>
                <CardContent>
                  Explore data through interactive charts and graphs for better
                  insights.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Our Team
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle>Jana Nováková</CardTitle>
                  <CardDescription>Data Scientist</CardDescription>
                </CardHeader>
                <CardContent>
                  Expertise in statistical analysis and machine learning
                  algorithms.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle>Petr Svoboda</CardTitle>
                  <CardDescription>Full-stack Developer</CardDescription>
                </CardHeader>
                <CardContent>
                  Skilled in building responsive web applications and data
                  visualizations.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle>Martina Dvořáková</CardTitle>
                  <CardDescription>Economic Analyst</CardDescription>
                </CardHeader>
                <CardContent>
                  Specialized in interpreting economic trends and providing
                  insights.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="data"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Data Insights
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Wage Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Wage Trends Chart"
                    className="aspect-video overflow-hidden rounded-lg object-cover object-center mx-auto"
                    height="400"
                    src="/placeholder.svg?height=400&width=600"
                    width="600"
                  />
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Real Estate Prices</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Real Estate Prices Chart"
                    className="aspect-video overflow-hidden rounded-lg object-cover object-center mx-auto"
                    height="400"
                    src="/placeholder.svg?height=400&width=600"
                    width="600"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to explore Czech economic trends?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Dive into our interactive platform and discover insights about
                  wages and real estate prices across Czech regions.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t justify-between">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 CzechEcoTrends. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
