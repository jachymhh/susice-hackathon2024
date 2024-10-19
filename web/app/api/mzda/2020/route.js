export async function GET() {
  const data = [
    {
      kraj: "kraj",
      prum: "prum",
      med: "med",
    },
    {
      kraj: "\u010cesk\u00e1 republika",
      prum: 38628,
      med: 33195,
    },
    {
      kraj: "Praha",
      prum: 47602,
      med: 38732,
    },
    {
      kraj: "St\u0159edo\u010desk\u00fd kraj",
      prum: 39104,
      med: 34518,
    },
    {
      kraj: "Jiho\u010desk\u00fd kraj",
      prum: 35301,
      med: 31508,
    },
    {
      kraj: "Plze\u0148sk\u00fd kraj",
      prum: 37613,
      med: 33961,
    },
    {
      kraj: "Karlovarsk\u00fd kraj",
      prum: 33534,
      med: 30314,
    },
    {
      kraj: "\u00dasteck\u00fd kraj",
      prum: 36088,
      med: 32404,
    },
    {
      kraj: "Libereck\u00fd kraj",
      prum: 36127,
      med: 32590,
    },
    {
      kraj: "Kr\u00e1lov\u00e9hradeck\u00fd kraj",
      prum: 36693,
      med: 32880,
    },
    {
      kraj: "Pardubick\u00fd kraj",
      prum: 34814,
      med: 31734,
    },
    {
      kraj: "Kraj Vyso\u010dina",
      prum: 35694,
      med: 32354,
    },
    {
      kraj: "Jihomoravsk\u00fd kraj",
      prum: 37687,
      med: 32837,
    },
    {
      kraj: "Olomouck\u00fd kraj",
      prum: 35049,
      med: 31571,
    },
    {
      kraj: "Zl\u00ednsk\u00fd kraj",
      prum: 34928,
      med: 30999,
    },
    {
      kraj: "Moravskoslezsk\u00fd kraj",
      prum: 35260,
      med: 31924,
    },
  ];
  return Response.json({ data });
}
