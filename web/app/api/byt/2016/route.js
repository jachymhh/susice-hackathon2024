export async function GET() {
  const data = [
    {
      Kraj: "Hlavní město Praha",
      Q1: 57700,
      Q2: 60300,
      Q3: 61500,
      Q4: 62200,
      AVG: 60425,
    },
    {
      Kraj: "Středočeský kraj",
      Q1: 31500,
      Q2: 33400,
      Q3: 35500,
      Q4: 37600,
      AVG: 34500,
    },
    {
      Kraj: "Jihočeský kraj",
      Q1: 28300,
      Q2: 27900,
      Q3: 31700,
      Q4: 32600,
      AVG: 30125,
    },
    {
      Kraj: "Plzeňský kraj",
      Q1: 29500,
      Q2: 33800,
      Q3: 32100,
      Q4: 34800,
      AVG: 32550,
    },
    {
      Kraj: "Karlovarský kraj",
      Q1: 21300,
      Q2: 23600,
      Q3: 22100,
      Q4: 23500,
      AVG: 22625,
    },
    {
      Kraj: "Ústecký kraj",
      Q1: 10400,
      Q2: 11400,
      Q3: 10700,
      Q4: 11100,
      AVG: 10900,
    },
    {
      Kraj: "Liberecký kraj",
      Q1: 26200,
      Q2: 26100,
      Q3: 25000,
      Q4: 28700,
      AVG: 26500,
    },
    {
      Kraj: "Královéhradecký kraj",
      Q1: 31300,
      Q2: 32700,
      Q3: 37100,
      Q4: 35700,
      AVG: 34200,
    },
    {
      Kraj: "Pardubický kraj",
      Q1: 28900,
      Q2: 31700,
      Q3: 31900,
      Q4: 32900,
      AVG: 31350,
    },
    {
      Kraj: "Vysočina",
      Q1: 24700,
      Q2: 23900,
      Q3: 26500,
      Q4: 27900,
      AVG: 25750,
    },
    {
      Kraj: "Jihomoravský kraj",
      Q1: 42500,
      Q2: 46100,
      Q3: 46800,
      Q4: 49100,
      AVG: 46125,
    },
    {
      Kraj: "Olomoucký kraj",
      Q1: 31400,
      Q2: 33400,
      Q3: 32000,
      Q4: 34300,
      AVG: 32775,
    },
    {
      Kraj: "Zlínský kraj",
      Q1: 28800,
      Q2: 28200,
      Q3: 27500,
      Q4: 28000,
      AVG: 28125,
    },
    {
      Kraj: "Moravskoslezský kraj",
      Q1: 16200,
      Q2: 17300,
      Q3: 18400,
      Q4: 17600,
      AVG: 17375,
    },
  ];

  return Response.json({ data });
}
