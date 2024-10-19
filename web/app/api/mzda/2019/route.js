export async function GET() {
  const data = [
    {
      kraj: "kraj",
      prum: "prum",
      med: "med",
    },
    {
      kraj: "\u010cesk\u00e1 republika",
      prum: 36380,
      med: 30730,
    },
    {
      kraj: "Praha",
      prum: 45888,
      med: 37719,
    },
    {
      kraj: "St\u0159edo\u010desk\u00fd kraj",
      prum: 37151,
      med: 34843,
    },
    {
      kraj: "Jiho\u010desk\u00fd kraj",
      prum: 32821,
      med: 29534,
    },
    {
      kraj: "Plze\u0148sk\u00fd kraj",
      prum: 35264,
      med: 31966,
    },
    {
      kraj: "Karlovarsk\u00fd kraj",
      prum: 31710,
      med: 28675,
    },
    {
      kraj: "\u00dasteck\u00fd kraj",
      prum: 33375,
      med: 30341,
    },
    {
      kraj: "Libereck\u00fd kraj",
      prum: 34169,
      med: 30889,
    },
    {
      kraj: "Kr\u00e1lov\u00e9hradeck\u00fd kraj",
      prum: 34357,
      med: 30865,
    },
    {
      kraj: "Pardubick\u00fd kraj",
      prum: 32612,
      med: 29819,
    },
    {
      kraj: "Kraj Vyso\u010dina",
      prum: 33422,
      med: 30231,
    },
    {
      kraj: "Jihomoravsk\u00fd kraj",
      prum: 35439,
      med: 30967,
    },
    {
      kraj: "Olomouck\u00fd kraj",
      prum: 32695,
      med: 29491,
    },
    {
      kraj: "Zl\u00ednsk\u00fd kraj",
      prum: 32759,
      med: 29170,
    },
    {
      kraj: "Moravskoslezsk\u00fd kraj",
      prum: 32826,
      med: 29828,
    },
  ];

  return Response.json({ data });
}
