export function ToolTip({ title, p }) {
  return (
    <div className="bg-white dark:bg-darkMiro border rounded shadow-lg p-2">
      <p className="font-semibold">{title}</p>
      <p className="text-muted-foreground">{p}</p>
    </div>
  );
}
