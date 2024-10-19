export async function GET() {
  const data = [
    {
      Kraj: "Praha",
      Q1: 116800,
      Q2: 114500,
      Q3: 114300,
      Q4: 112900,
      AVG: 114625,
    },
    {
      Kraj: "Středočeský kraj",
      Q1: 75900,
      Q2: 74400,
      Q3: 76600,
      Q4: 75200,
      AVG: 75525,
    },
    {
      Kraj: "Jihočeský kraj",
      Q1: 65300,
      Q2: 62400,
      Q3: 73600,
      Q4: 79000,
      AVG: 70075,
    },
    {
      Kraj: "Plzeňský kraj",
      Q1: 63000,
      Q2: 65300,
      Q3: 61800,
      Q4: 61400,
      AVG: 62875,
    },
    {
      Kraj: "Karlovarský kraj",
      Q1: 46400,
      Q2: 43300,
      Q3: 42500,
      Q4: 41700,
      AVG: 43475,
    },
    {
      Kraj: "Ústecký kraj",
      Q1: 34100,
      Q2: 33800,
      Q3: 32700,
      Q4: 31700,
      AVG: 33075,
    },
    {
      Kraj: "Liberecký kraj",
      Q1: 60000,
      Q2: 62300,
      Q3: 68500,
      Q4: 70200,
      AVG: 65250,
    },
    {
      Kraj: "Královehradecký kraj",
      Q1: 67000,
      Q2: 64500,
      Q3: 64300,
      Q4: 62700,
      AVG: 64625,
    },
    {
      Kraj: "Pardubický kraj",
      Q1: 60600,
      Q2: 67000,
      Q3: 74800,
      Q4: 78500,
      AVG: 70225,
    },
    {
      Kraj: "Vysočina",
      Q1: 53400,
      Q2: 57400,
      Q3: 63200,
      Q4: 69100,
      AVG: 60775,
    },
    {
      Kraj: "Jihomoravský kraj",
      Q1: 93200,
      Q2: 94300,
      Q3: 96700,
      Q4: 98300,
      AVG: 95625,
    },
    {
      Kraj: "Olomoucký kraj",
      Q1: 64700,
      Q2: 66200,
      Q3: 69900,
      Q4: 72300,
      AVG: 68275,
    },
    {
      Kraj: "Zlínský kraj",
      Q1: 65300,
      Q2: 59700,
      Q3: 61500,
      Q4: 63300,
      AVG: 62450,
    },
    {
      Kraj: "Moravskoslezský kraj",
      Q1: 39000,
      Q2: 41700,
      Q3: 43700,
      Q4: 45800,
      AVG: 42550,
    },
  ];

  return Response.json({ data });
}
