export async function GET() {
  const data = [
    {
      kraj: "kraj",
      prum: "prum",
      med: "med",
    },
    {
      kraj: "\u010cesk\u00e1 republika",
      prum: 31109,
      med: 26843,
    },
    {
      kraj: "Praha",
      prum: 39782,
      med: 31878,
    },
    {
      kraj: "St\u0159edo\u010desk\u00fd kraj",
      prum: 31457,
      med: 27709,
    },
    {
      kraj: "Jiho\u010desk\u00fd kraj",
      prum: 28093,
      med: 25457,
    },
    {
      kraj: "Plze\u0148sk\u00fd kraj",
      prum: 30700,
      med: 27879,
    },
    {
      kraj: "Karlovarsk\u00fd kraj",
      prum: 26999,
      med: 24832,
    },
    {
      kraj: "\u00dasteck\u00fd kraj",
      prum: 28369,
      med: 25639,
    },
    {
      kraj: "Libereck\u00fd kraj",
      prum: 29121,
      med: 26752,
    },
    {
      kraj: "Kr\u00e1lov\u00e9hradeck\u00fd kraj",
      prum: 28580,
      med: 25865,
    },
    {
      kraj: "Pardubick\u00fd kraj",
      prum: 28006,
      med: 25507,
    },
    {
      kraj: "Kraj Vyso\u010dina",
      prum: 28568,
      med: 25783,
    },
    {
      kraj: "Jihomoravsk\u00fd kraj",
      prum: 30311,
      med: 26559,
    },
    {
      kraj: "Olomouck\u00fd kraj",
      prum: 27486,
      med: 24956,
    },
    {
      kraj: "Zl\u00ednsk\u00fd kraj",
      prum: 27565,
      med: 24814,
    },
    {
      kraj: "Moravskoslezsk\u00fd kraj",
      prum: 27991,
      med: 25534,
    },
  ];

  return Response.json({ data });
}
