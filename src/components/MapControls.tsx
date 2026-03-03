import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useMapFilters } from "@/contexts/MapFilterContext";
import { MetricKey, metricLabels } from "@/lib/metrics";

export default function MapControls() {
  const [minimized, setMinimized] = useState(false);
  const {
    activeMetric,
    setActiveMetric,
    year,
    setYear,
    meritvärdeMin,
    setMeritvärdeMin,
    behörighetMin,
    setBehörighetMin,
  } = useMapFilters();

  return (
    <div className="absolute top-4 left-4 z-[1000] bg-card/95 backdrop-blur-sm rounded-lg shadow-lg border border-border p-3 space-y-2">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-sm font-bold text-foreground">
          Skolor i Malmö-regionen {year}
        </h1>
        <button
          onClick={() => setMinimized((v) => !v)}
          aria-label={minimized ? "Expandera" : "Minimera"}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {minimized ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </button>
      </div>
      {!minimized && (
        <>
          <p className="text-[10px] text-muted-foreground">
            SALSA - Skolverket
          </p>
          <div className="grid grid-cols-2 gap-1">
            {(Object.keys(metricLabels) as MetricKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveMetric(key)}
                className={`text-[11px] px-2 py-1 rounded-md font-medium transition-colors ${
                  activeMetric === key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {metricLabels[key]}
              </button>
            ))}
          </div>

          <div className="pt-2 flex items-center gap-3">
            <label className="text-[10px] text-muted-foreground mr-2">År</label>
            <div className="flex items-center gap-2">
              <input
                aria-label="Välj år"
                type="range"
                min={2010}
                max={2025}
                step={5}
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="h-2 w-40 accent-primary"
              />
              <div className="text-[11px] font-medium">{year}</div>
            </div>
          </div>

          <div className="pt-2 space-y-2">
            <div className="text-[10px] text-muted-foreground">
              Filter: Meritvärde minst {meritvärdeMin}
            </div>
            <input
              type="range"
              min={0}
              max={300}
              step={1}
              value={meritvärdeMin}
              onChange={(e) => setMeritvärdeMin(Number(e.target.value))}
              className="h-2 w-40 accent-primary"
            />

            <div className="text-[10px] text-muted-foreground">
              Filter: Behörighet minst {behörighetMin}%
            </div>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={behörighetMin}
              onChange={(e) => setBehörighetMin(Number(e.target.value))}
              className="h-2 w-40 accent-primary"
            />
          </div>
        </>
      )}
    </div>
  );
}
