export async function GET() {
  const data = [
    {
      kraj: "kraj",
      prum: "prum",
      med: "med",
    },
    {
      kraj: "\u010cesk\u00e1 republika",
      prum: 29056,
      med: 24982,
    },
    {
      kraj: "Praha",
      prum: 37387,
      med: 29906,
    },
    {
      kraj: "St\u0159edo\u010desk\u00fd kraj",
      prum: 29170,
      med: 25490,
    },
    {
      kraj: "Jiho\u010desk\u00fd kraj",
      prum: 26537,
      med: 24018,
    },
    {
      kraj: "Plze\u0148sk\u00fd kraj",
      prum: 28182,
      med: 25388,
    },
    {
      kraj: "Karlovarsk\u00fd kraj",
      prum: 24893,
      med: 22735,
    },
    {
      kraj: "\u00dasteck\u00fd kraj",
      prum: 26538,
      med: 24004,
    },
    {
      kraj: "Libereck\u00fd kraj",
      prum: 27126,
      med: 24764,
    },
    {
      kraj: "Kr\u00e1lov\u00e9hradeck\u00fd kraj",
      prum: 26578,
      med: 23914,
    },
    {
      kraj: "Pardubick\u00fd kraj",
      prum: 26087,
      med: 23543,
    },
    {
      kraj: "Kraj Vyso\u010dina",
      prum: 26629,
      med: 23953,
    },
    {
      kraj: "Jihomoravsk\u00fd kraj",
      prum: 28319,
      med: 24675,
    },
    {
      kraj: "Olomouck\u00fd kraj",
      prum: 25643,
      med: 23205,
    },
    {
      kraj: "Zl\u00ednsk\u00fd kraj",
      prum: 25953,
      med: 23242,
    },
    {
      kraj: "Moravskoslezsk\u00fd kraj",
      prum: 26388,
      med: 24071,
    },
  ];

  return Response.json({ data });
}
