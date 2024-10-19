export async function GET() {
  const data = [
    {
      kraj: "kraj",
      prum: "prum",
      med: "med",
    },
    {
      kraj: "\u010cesk\u00e1 republika",
      prum: 40777,
      med: 35169,
    },
    {
      kraj: "Praha",
      prum: 50494,
      med: 41096,
    },
    {
      kraj: "St\u0159edo\u010desk\u00fd kraj",
      prum: 40585,
      med: 35983,
    },
    {
      kraj: "Jiho\u010desk\u00fd kraj",
      prum: 37715,
      med: 33347,
    },
    {
      kraj: "Plze\u0148sk\u00fd kraj",
      prum: 39400,
      med: 35593,
    },
    {
      kraj: "Karlovarsk\u00fd kraj",
      prum: 35611,
      med: 31961,
    },
    {
      kraj: "\u00dasteck\u00fd kraj",
      prum: 38027,
      med: 34044,
    },
    {
      kraj: "Libereck\u00fd kraj",
      prum: 37855,
      med: 33894,
    },
    {
      kraj: "Kr\u00e1lov\u00e9hradeck\u00fd kraj",
      prum: 38772,
      med: 34772,
    },
    {
      kraj: "Pardubick\u00fd kraj",
      prum: 36642,
      med: 33315,
    },
    {
      kraj: "Kraj Vyso\u010dina",
      prum: 37693,
      med: 34179,
    },
    {
      kraj: "Jihomoravsk\u00fd kraj",
      prum: 40308,
      med: 35118,
    },
    {
      kraj: "Olomouck\u00fd kraj",
      prum: 37074,
      med: 33135,
    },
    {
      kraj: "Zl\u00ednsk\u00fd kraj",
      prum: 36641,
      med: 32913,
    },
    {
      kraj: "Moravskoslezsk\u00fd kraj",
      prum: 37265,
      med: 33611,
    },
  ];

  return Response.json({ data });
}
