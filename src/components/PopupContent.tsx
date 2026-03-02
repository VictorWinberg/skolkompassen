import { useMapFilters } from "@/contexts/MapFilterContext";
import { School, schools } from "@/data/schools";

export default function PopupContent({ school }: { school: School }) {
  const { year } = useMapFilters();
  const prevYear = year - 5;
  const prev =
    school && prevYear ? schools.find((p) => p.key === school.key && p.år === prevYear) : null;

  const bvDelta =
    prev && school.faktisktVarde1 != null && prev.faktisktVarde1 != null
      ? Math.round((school.faktisktVarde1 - prev.faktisktVarde1) * 10) / 10
      : null;
  const mvDelta =
    prev && school.faktisktVarde2 != null && prev.faktisktVarde2 != null
      ? Math.round((school.faktisktVarde2 - prev.faktisktVarde2) * 10) / 10
      : null;

  const formatDelta = (d: number | null, suffix: string) => {
    if (d == null) return null;
    const sign = d > 0 ? "+" : d < 0 ? "" : "";
    return `${sign}${d}${suffix}`;
  };

  const bvClass =
    bvDelta == null
      ? "text-muted-foreground"
      : bvDelta > 0
        ? "text-green-600"
        : bvDelta < 0
          ? "text-red-600"
          : "text-muted-foreground";
  const mvClass =
    mvDelta == null
      ? "text-muted-foreground"
      : mvDelta > 0
        ? "text-green-600"
        : mvDelta < 0
          ? "text-red-600"
          : "text-muted-foreground";

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    school.name + " " + school.kommun,
  )}`;

  return (
    <div className="p-3 space-y-2">
      <h3 className="font-bold text-sm text-foreground leading-tight">{school.name}</h3>
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="inline-block text-[10px] font-medium px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
          {school.principal === "Kom." ? "Kommunal" : "Enskild"}
        </span>
        <span className="inline-block text-[10px] font-medium px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
          {school.kommun}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-1">
        <div className="bg-muted/60 rounded-md p-2 text-center">
          <div className="text-lg font-bold text-foreground">{school.faktisktVarde1 ?? "-"}%</div>
          <div className="text-[10px] text-muted-foreground leading-tight">Behörighet</div>
        </div>
        <div className="bg-muted/60 rounded-md p-2 text-center">
          <div className="text-lg font-bold text-foreground">{school.faktisktVarde2 ?? "-"}</div>
          <div className="text-[10px] text-muted-foreground leading-tight">Meritvärde</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-muted/40 rounded p-1.5 text-center">
          <div className="text-[10px] text-muted-foreground">Jämfört med {prevYear}</div>
          <div className={`text-sm font-semibold ${bvClass}`}>
            {formatDelta(bvDelta, " pp") ?? "–"}
          </div>
        </div>
        <div className="bg-muted/40 rounded p-1.5 text-center">
          <div className="text-[10px] text-muted-foreground">Jämfört med {prevYear}</div>
          <div className={`text-sm font-semibold ${mvClass}`}>
            {formatDelta(mvDelta, " pts") ?? "–"}
          </div>
        </div>
      </div>

      <div className="text-[10px] text-muted-foreground space-y-0.5 pt-1 border-t border-border">
        <div>Föräldrarnas utb.nivå: {school.parentEducation}</div>
        <div>Nyinvandrade: {school.percentNewImmigrants}%</div>
        <div>Pojkar: {school.percentBoys}%</div>
      </div>

      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-[10px] text-primary hover:underline pt-1"
      >
        📍 Visa på Google Maps
      </a>
    </div>
  );
}
