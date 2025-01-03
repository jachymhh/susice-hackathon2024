export async function GET() {
  const data = [
    {
      Kraj: "Hlavní město Praha",
      Q1: 76500,
      Q2: 71800,
      Q3: 76500,
      Q4: 77400,
      AVG: 75550,
    },
    {
      Kraj: "Středočeský kraj",
      Q1: 43500,
      Q2: 45500,
      Q3: 47100,
      Q4: 47000,
      AVG: 45775,
    },
    {
      Kraj: "Jihočeský kraj",
      Q1: 37500,
      Q2: 34800,
      Q3: 36700,
      Q4: 38600,
      AVG: 36900,
    },
    {
      Kraj: "Plzeňský kraj",
      Q1: 39200,
      Q2: 38000,
      Q3: 39300,
      Q4: 40100,
      AVG: 39150,
    },
    {
      Kraj: "Karlovarský kraj",
      Q1: 23600,
      Q2: 26700,
      Q3: 26500,
      Q4: 26600,
      AVG: 25850,
    },
    {
      Kraj: "Ústecký kraj",
      Q1: 14700,
      Q2: 15300,
      Q3: 15300,
      Q4: 16300,
      AVG: 15400,
    },
    {
      Kraj: "Liberecký kraj",
      Q1: 32600,
      Q2: 34300,
      Q3: 34300,
      Q4: 35700,
      AVG: 34225,
    },
    {
      Kraj: "Královehradecký kraj",
      Q1: 39200,
      Q2: 42300,
      Q3: 39800,
      Q4: 45300,
      AVG: 41650,
    },
    {
      Kraj: "Pardubický kraj",
      Q1: 36800,
      Q2: 37300,
      Q3: 39100,
      Q4: 38500,
      AVG: 37925,
    },
    {
      Kraj: "Vysočina",
      Q1: 33100,
      Q2: 33800,
      Q3: 32400,
      Q4: 34000,
      AVG: 33325,
    },
    {
      Kraj: "Jihomoravský kraj",
      Q1: 54200,
      Q2: 53500,
      Q3: 55800,
      Q4: 56600,
      AVG: 55025,
    },
    {
      Kraj: "Olomoucký kraj",
      Q1: 37400,
      Q2: 37900,
      Q3: 40200,
      Q4: 40900,
      AVG: 39100,
    },
    {
      Kraj: "Zlínský kraj",
      Q1: 31800,
      Q2: 37000,
      Q3: 34900,
      Q4: 35800,
      AVG: 34875,
    },
    {
      Kraj: "Moravskoslezský kraj",
      Q1: 25300,
      Q2: 22100,
      Q3: 22200,
      Q4: 23600,
      AVG: 23300,
    },
  ];

  return Response.json({ data });
}
