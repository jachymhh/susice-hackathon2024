export async function GET() {
  const data = [
    {
      Kraj: "Hlavní město Praha",
      Q1: 88100,
      Q2: 88700,
      Q3: 94300,
      Q4: 98100,
      AVG: 92300,
    },
    {
      Kraj: "Středočeský kraj",
      Q1: 54200,
      Q2: 57600,
      Q3: 59100,
      Q4: 61800,
      AVG: 58175,
    },
    {
      Kraj: "Jihočeský kraj",
      Q1: 48800,
      Q2: 47500,
      Q3: 49400,
      Q4: 47300,
      AVG: 48250,
    },
    {
      Kraj: "Plzeňský kraj",
      Q1: 44700,
      Q2: 51200,
      Q3: 48300,
      Q4: 52200,
      AVG: 49100,
    },
    {
      Kraj: "Karlovarský kraj",
      Q1: 28900,
      Q2: 28100,
      Q3: 27600,
      Q4: 32100,
      AVG: 29175,
    },
    {
      Kraj: "Ústecký kraj",
      Q1: 21000,
      Q2: 21200,
      Q3: 22800,
      Q4: 24800,
      AVG: 22450,
    },
    {
      Kraj: "Liberecký kraj",
      Q1: 40900,
      Q2: 45300,
      Q3: 48700,
      Q4: 46300,
      AVG: 45300,
    },
    {
      Kraj: "Královehradecký kraj",
      Q1: 44900,
      Q2: 49300,
      Q3: 50200,
      Q4: 53700,
      AVG: 49525,
    },
    {
      Kraj: "Pardubický kraj",
      Q1: 42900,
      Q2: 44200,
      Q3: 47900,
      Q4: 50000,
      AVG: 46250,
    },
    {
      Kraj: "Vysočina",
      Q1: 38700,
      Q2: 39100,
      Q3: 41400,
      Q4: 41700,
      AVG: 40225,
    },
    {
      Kraj: "Jihomoravský kraj",
      Q1: 65400,
      Q2: 68500,
      Q3: 71500,
      Q4: 75700,
      AVG: 70275,
    },
    {
      Kraj: "Olomoucký kraj",
      Q1: 43900,
      Q2: 47900,
      Q3: 48100,
      Q4: 50300,
      AVG: 47550,
    },
    {
      Kraj: "Zlínský kraj",
      Q1: 42900,
      Q2: 43300,
      Q3: 44600,
      Q4: 42600,
      AVG: 43350,
    },
    {
      Kraj: "Moravskoslezský kraj",
      Q1: 26200,
      Q2: 27900,
      Q3: 29600,
      Q4: 32100,
      AVG: 28950,
    },
  ];

  return Response.json({ data });
}
