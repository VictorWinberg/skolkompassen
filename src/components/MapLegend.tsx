import { useMapFilters } from "@/contexts/MapFilterContext";
import { metricLabels } from "@/lib/metrics";

export default function MapLegend() {
  const { activeMetric } = useMapFilters();

  return (
    <div className="absolute bottom-6 left-4 z-[1000] bg-card/95 backdrop-blur-sm rounded-lg shadow-lg border border-border p-3">
      <div className="text-[10px] font-semibold text-foreground mb-1.5">
        {metricLabels[activeMetric]}
      </div>
      <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ background: "hsl(0, 70%, 50%)" }}
          />
          Mycket låg
        </span>
        <span className="flex items-center gap-1">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ background: "hsl(28, 85%, 50%)" }}
          />
          Låg
        </span>
        <span className="flex items-center gap-1">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ background: "hsl(45, 80%, 50%)" }}
          />
          Medel
        </span>
        <span className="flex items-center gap-1">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ background: "hsl(160, 60%, 40%)" }}
          />
          Hög
        </span>
        <span className="flex items-center gap-1">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ background: "hsl(210, 60%, 45%)" }}
          />
          Mycket hög
        </span>
      </div>
    </div>
  );
}
