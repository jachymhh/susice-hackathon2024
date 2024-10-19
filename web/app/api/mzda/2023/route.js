export async function GET() {
  const data = [
    {
      kraj: "kraj",
      prum: "prum",
      med: "med",
    },
    {
      kraj: "\u010cesk\u00e1 republika",
      prum: 45927,
      med: 39518,
    },
    {
      kraj: "Praha",
      prum: 57275,
      med: 46429,
    },
    {
      kraj: "St\u0159edo\u010desk\u00fd kraj",
      prum: 46035,
      med: 40426,
    },
    {
      kraj: "Jiho\u010desk\u00fd kraj",
      prum: 42028,
      med: 37542,
    },
    {
      kraj: "Plze\u0148sk\u00fd kraj",
      prum: 44099,
      med: 40100,
    },
    {
      kraj: "Karlovarsk\u00fd kraj",
      prum: 39746,
      med: 35622,
    },
    {
      kraj: "\u00dasteck\u00fd kraj",
      prum: 42013,
      med: 37801,
    },
    {
      kraj: "Libereck\u00fd kraj",
      prum: 42029,
      med: 38096,
    },
    {
      kraj: "Královehradecký kraj",
      prum: 43417,
      med: 38584,
    },
    {
      kraj: "Pardubick\u00fd kraj",
      prum: 41036,
      med: 37328,
    },
    {
      kraj: "Vyso\u010dina",
      prum: 41969,
      med: 37903,
    },
    {
      kraj: "Jihomoravsk\u00fd kraj",
      prum: 45316,
      med: 39594,
    },
    {
      kraj: "Olomouck\u00fd kraj",
      prum: 41084,
      med: 37143,
    },
    {
      kraj: "Zl\u00ednsk\u00fd kraj",
      prum: 41328,
      med: 37265,
    },
    {
      kraj: "Moravskoslezsk\u00fd kraj",
      prum: 41866,
      med: 38073,
    },
  ];

  return Response.json({ data });
}
