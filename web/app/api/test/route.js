export async function GET() {
  const data = [
    { kraj: "Praha", Median_mzda_celkem: 40000 },
    { kraj: "Středočeský", Median_mzda_celkem: 35000 },
    { kraj: "Jihočeský", Median_mzda_celkem: 32000 },
    { kraj: "Plzeňský", Median_mzda_celkem: 33000 },
    { kraj: "Karlovarský", Median_mzda_celkem: 30000 },
    { kraj: "Ústecký", Median_mzda_celkem: 31000 },
    { kraj: "Liberecký", Median_mzda_celkem: 34000 },
    { kraj: "Královéhradecký", Median_mzda_celkem: 33000 },
    { kraj: "Pardubický", Median_mzda_celkem: 32000 },
    { kraj: "Vysočina", Median_mzda_celkem: 31000 },
    { kraj: "Jihomoravský", Median_mzda_celkem: 35000 },
    { kraj: "Olomoucký", Median_mzda_celkem: 34000 },
    { kraj: "Zlínský", Median_mzda_celkem: 33000 },
    { kraj: "Moravskoslezský", Median_mzda_celkem: 30000 },
  ];

  return Response.json({ data });
}
