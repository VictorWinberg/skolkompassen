import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { schools, School } from "@/data/schools";

interface SchoolListSidebarProps {
  activeMetric: "faktisktVarde1" | "faktisktVarde2";
  onSchoolClick?: (school: School) => void;
  selectedSchool?: string | null;
}

const metricLabels = {
  faktisktVarde1: "Behörighet",
  faktisktVarde2: "Meritvärde",
};

function getColor(value: number, metric: "faktisktVarde1" | "faktisktVarde2"): string {
  const ranges = {
    faktisktVarde1: [30, 100] as [number, number],
    faktisktVarde2: [180, 300] as [number, number],
  };
  const [min, max] = ranges[metric];
  const ratio = Math.max(0, Math.min(1, (value - min) / (max - min)));
  if (ratio > 0.66) return "hsl(160, 60%, 40%)";
  if (ratio > 0.33) return "hsl(45, 80%, 50%)";
  return "hsl(0, 70%, 50%)";
}

export default function SchoolListSidebar({ activeMetric, onSchoolClick, selectedSchool }: SchoolListSidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedSchool, setExpandedSchool] = useState<string | null>(null);

  const sortedSchools = [...schools].sort((a, b) => {
    const aVal = a[activeMetric] ?? 0;
    const bVal = b[activeMetric] ?? 0;
    return bVal - aVal;
  });

  return (
    <div
      className={`absolute top-0 right-0 z-[1000] h-full transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-[calc(100%-2.5rem)]"
      }`}
    >
      <div className="flex h-full">
        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="self-center -ml-1 bg-card/95 backdrop-blur-sm border border-r-0 border-border rounded-l-lg px-1 py-4 hover:bg-muted transition-colors"
          aria-label={isOpen ? "Minimera listan" : "Visa listan"}
        >
          {isOpen ? <ChevronRight className="h-4 w-4 text-foreground" /> : <ChevronLeft className="h-4 w-4 text-foreground" />}
        </button>

        {/* Sidebar content */}
        <div className="w-80 h-full bg-card/95 backdrop-blur-sm border-l border-border shadow-lg overflow-hidden flex flex-col">
          <div className="p-3 border-b border-border">
            <h2 className="text-sm font-bold text-foreground">Alla skolor ({schools.length})</h2>
            <p className="text-[10px] text-muted-foreground">
              Sorterade efter {metricLabels[activeMetric]}
            </p>
          </div>

          <div className="flex-1 overflow-y-auto">
            {sortedSchools.map((school, index) => {
              const value = school[activeMetric];
              const isExpanded = expandedSchool === school.name;

              return (
                <div key={school.name} className={`border-b border-border/50 ${selectedSchool === school.name ? "bg-primary/10" : ""}`}>
                  <button
                    onClick={() => {
                      setExpandedSchool(isExpanded ? null : school.name);
                      onSchoolClick?.(school);
                    }}
                    className={`w-full text-left px-3 py-2 hover:bg-muted/50 transition-colors flex items-center gap-2 ${selectedSchool === school.name ? "bg-primary/10" : ""}`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{
                        background: value !== null ? getColor(value, activeMetric) : "hsl(var(--muted))",
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-medium text-foreground truncate">
                          {index + 1}. {school.name}
                          <span className="text-[9px] text-muted-foreground ml-1">({school.kommun})</span>
                        </span>
                        <span className="text-xs font-bold text-foreground shrink-0">
                          {value !== null
                            ? activeMetric === "faktisktVarde1"
                              ? `${value}%`
                              : value
                            : "–"}
                        </span>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="h-3 w-3 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown className="h-3 w-3 text-muted-foreground shrink-0" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-3 pb-2 space-y-1.5">
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="bg-muted/60 rounded p-1.5 text-center">
                          <div className="text-sm font-bold text-foreground">
                            {school.faktisktVarde1 ?? "–"}%
                          </div>
                          <div className="text-[9px] text-muted-foreground">Behörighet</div>
                        </div>
                        <div className="bg-muted/60 rounded p-1.5 text-center">
                          <div className="text-sm font-bold text-foreground">
                            {school.faktisktVarde2 ?? "–"}
                          </div>
                          <div className="text-[9px] text-muted-foreground">Meritvärde</div>
                        </div>
                      </div>
                      <div className="text-[10px] text-muted-foreground space-y-0.5">
                        <div>Kommun: {school.kommun}</div>
                        <div>Huvudman: {school.principal === "Kom." ? "Kommunal" : "Enskild"}</div>
                        <div>Föräldrarnas utb.nivå: {school.parentEducation}</div>
                        <div>Nyinvandrade: {school.percentNewImmigrants}%</div>
                        <div>Pojkar: {school.percentBoys}%</div>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
