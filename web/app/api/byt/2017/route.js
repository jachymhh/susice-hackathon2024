export async function GET() {
  const data = [
    {
      Kraj: "Hlavní město Praha",
      Q1: 64200,
      Q2: 65700,
      Q3: 66900,
      Q4: 70800,
      AVG: 66900,
    },
    {
      Kraj: "Středočeský kraj",
      Q1: 37800,
      Q2: 39500,
      Q3: 40300,
      Q4: 41500,
      AVG: 39775,
    },
    {
      Kraj: "Jihočeský kraj",
      Q1: 31800,
      Q2: 33700,
      Q3: 36600,
      Q4: 37600,
      AVG: 34925,
    },
    {
      Kraj: "Plzeňský kraj",
      Q1: 34900,
      Q2: 35100,
      Q3: 36700,
      Q4: 36000,
      AVG: 35675,
    },
    {
      Kraj: "Karlovarský kraj",
      Q1: 22300,
      Q2: 22700,
      Q3: 24300,
      Q4: 24500,
      AVG: 23450,
    },
    {
      Kraj: "Ústecký kraj",
      Q1: 11900,
      Q2: 11800,
      Q3: 13100,
      Q4: 13800,
      AVG: 12650,
    },
    {
      Kraj: "Liberecký kraj",
      Q1: 27500,
      Q2: 28500,
      Q3: 29600,
      Q4: 31600,
      AVG: 29300,
    },
    {
      Kraj: "Královehradecký kraj",
      Q1: 36600,
      Q2: 36500,
      Q3: 40800,
      Q4: 39000,
      AVG: 38225,
    },
    {
      Kraj: "Pardubický kraj",
      Q1: 34400,
      Q2: 35500,
      Q3: 34500,
      Q4: 36200,
      AVG: 35150,
    },
    {
      Kraj: "Vysočina",
      Q1: 27800,
      Q2: 29000,
      Q3: 29400,
      Q4: 31600,
      AVG: 29450,
    },
    {
      Kraj: "Jihomoravský kraj",
      Q1: 49200,
      Q2: 50700,
      Q3: 52100,
      Q4: 52000,
      AVG: 51000,
    },
    {
      Kraj: "Olomoucký kraj",
      Q1: 33500,
      Q2: 33600,
      Q3: 36800,
      Q4: 39100,
      AVG: 35750,
    },
    {
      Kraj: "Zlínský kraj",
      Q1: 28500,
      Q2: 28900,
      Q3: 32900,
      Q4: 31800,
      AVG: 30525,
    },
    {
      Kraj: "Moravskoslezský kraj",
      Q1: 18600,
      Q2: 19600,
      Q3: 20700,
      Q4: 20700,
      AVG: 19900,
    },
  ];

  return Response.json({ data });
}
