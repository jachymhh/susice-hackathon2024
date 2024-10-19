export async function GET() {
  const data = [
    {
      kraj: "kraj",
      prum: "prum",
      med: "med",
    },
    {
      kraj: "\u010cesk\u00e1 republika",
      prum: 33684,
      med: 29184,
    },
    {
      kraj: "Praha",
      prum: 42502,
      med: 34338,
    },
    {
      kraj: "St\u0159edo\u010desk\u00fd kraj",
      prum: 34390,
      med: 30048,
    },
    {
      kraj: "Jiho\u010desk\u00fd kraj",
      prum: 30620,
      med: 27909,
    },
    {
      kraj: "Plze\u0148sk\u00fd kraj",
      prum: 33020,
      med: 30055,
    },
    {
      kraj: "Karlovarsk\u00fd kraj",
      prum: 29236,
      med: 26774,
    },
    {
      kraj: "\u00dasteck\u00fd kraj",
      prum: 30802,
      med: 27901,
    },
    {
      kraj: "Libereck\u00fd kraj",
      prum: 31615,
      med: 28882,
    },
    {
      kraj: "Kr\u00e1lov\u00e9hradeck\u00fd kraj",
      prum: 31373,
      med: 28348,
    },
    {
      kraj: "Pardubick\u00fd kraj",
      prum: 30358,
      med: 27851,
    },
    {
      kraj: "Kraj Vyso\u010dina",
      prum: 31002,
      med: 28211,
    },
    {
      kraj: "Jihomoravsk\u00fd kraj",
      prum: 32639,
      med: 28728,
    },
    {
      kraj: "Olomouck\u00fd kraj",
      prum: 30073,
      med: 27253,
    },
    {
      kraj: "Zl\u00ednsk\u00fd kraj",
      prum: 30317,
      med: 27398,
    },
    {
      kraj: "Moravskoslezsk\u00fd kraj",
      prum: 30364,
      med: 27653,
    },
  ];

  return Response.json({ data });
}
