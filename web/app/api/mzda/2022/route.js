export async function GET() {
  const data = [
    {
      kraj: "kraj",
      prum: "prum",
      med: "med",
    },
    {
      kraj: "\u010cesk\u00e1 republika",
      prum: 43413,
      med: 37418,
    },
    {
      kraj: "Praha",
      prum: 54015,
      med: 43950,
    },
    {
      kraj: "St\u0159edo\u010desk\u00fd kraj",
      prum: 43536,
      med: 38431,
    },
    {
      kraj: "Jiho\u010desk\u00fd kraj",
      prum: 39728,
      med: 35267,
    },
    {
      kraj: "Plze\u0148sk\u00fd kraj",
      prum: 41436,
      med: 37500,
    },
    {
      kraj: "Karlovarsk\u00fd kraj",
      prum: 37512,
      med: 33679,
    },
    {
      kraj: "\u00dasteck\u00fd kraj",
      prum: 40223,
      med: 36133,
    },
    {
      kraj: "Libereck\u00fd kraj",
      prum: 39746,
      med: 35643,
    },
    {
      kraj: "Kr\u00e1lov\u00e9hradeck\u00fd kraj",
      prum: 41187,
      med: 36734,
    },
    {
      kraj: "Pardubick\u00fd kraj",
      prum: 38866,
      med: 35357,
    },
    {
      kraj: "Kraj Vyso\u010dina",
      prum: 39864,
      med: 36078,
    },
    {
      kraj: "Jihomoravsk\u00fd kraj",
      prum: 43071,
      med: 37733,
    },
    {
      kraj: "Olomouck\u00fd kraj",
      prum: 39079,
      med: 35107,
    },
    {
      kraj: "Zl\u00ednsk\u00fd kraj",
      prum: 38869,
      med: 34968,
    },
    {
      kraj: "Moravskoslezsk\u00fd kraj",
      prum: 39631,
      med: 35723,
    },
  ];

  return Response.json({ data });
}
