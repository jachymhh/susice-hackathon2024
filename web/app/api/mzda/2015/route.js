export async function GET() {
  const data = [
    {
      kraj: "kraj",
      prum: "prum",
      med: "med",
    },
    {
      kraj: "\u010cesk\u00e1 republika",
      prum: 27811,
      med: 23726,
    },
    {
      kraj: "Praha",
      prum: 36371,
      med: 28677,
    },
    {
      kraj: "St\u0159edo\u010desk\u00fd kraj",
      prum: 27997,
      med: 24582,
    },
    {
      kraj: "Jiho\u010desk\u00fd kraj",
      prum: 25246,
      med: 22697,
    },
    {
      kraj: "Plze\u0148sk\u00fd kraj",
      prum: 27013,
      med: 24135,
    },
    {
      kraj: "Karlovarsk\u00fd kraj",
      prum: 24119,
      med: 21747,
    },
    {
      kraj: "\u00dasteck\u00fd kraj",
      prum: 25301,
      med: 22644,
    },
    {
      kraj: "Libereck\u00fd kraj",
      prum: 26358,
      med: 23946,
    },
    {
      kraj: "Kr\u00e1lov\u00e9hradeck\u00fd kraj",
      prum: 25192,
      med: 22521,
    },
    {
      kraj: "Pardubick\u00fd kraj",
      prum: 24856,
      med: 22283,
    },
    {
      kraj: "Kraj Vyso\u010dina",
      prum: 25258,
      med: 22600,
    },
    {
      kraj: "Jihomoravsk\u00fd kraj",
      prum: 27051,
      med: 23328,
    },
    {
      kraj: "Olomouck\u00fd kraj",
      prum: 24584,
      med: 21918,
    },
    {
      kraj: "Zl\u00ednsk\u00fd kraj",
      prum: 24554,
      med: 21770,
    },
    {
      kraj: "Moravskoslezsk\u00fd kraj",
      prum: 25475,
      med: 23116,
    },
  ];
  return Response.json({ data });
}
