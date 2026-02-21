import { MapContainer, TileLayer, CircleMarker, Popup, ZoomControl, useMap } from "react-leaflet";
import { schools, School } from "@/data/schools";
import { useState, useCallback, useRef, useEffect } from "react";
import SchoolListSidebar from "./SchoolListSidebar";
import L from "leaflet";

type MetricKey = "faktisktVarde1" | "faktisktVarde2";

const metricLabels: Record<MetricKey, string> = {
  faktisktVarde1: "Behörighet (%)",
  faktisktVarde2: "Meritvärde (poäng)",
};

function getColor(value: number, metric: MetricKey): string {
  const ranges: Record<MetricKey, [number, number]> = {
    faktisktVarde1: [30, 100],
    faktisktVarde2: [180, 300],
  };
  const [min, max] = ranges[metric];
  const ratio = Math.max(0, Math.min(1, (value - min) / (max - min)));
  if (ratio > 0.66) return "hsl(160, 60%, 40%)";
  if (ratio > 0.33) return "hsl(45, 80%, 50%)";
  return "hsl(0, 70%, 50%)";
}

function getRadius(value: number, metric: MetricKey): number {
  const ranges: Record<MetricKey, [number, number]> = {
    faktisktVarde1: [30, 100],
    faktisktVarde2: [180, 300],
  };
  const [min, max] = ranges[metric];
  const ratio = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return 6 + ratio * 10;
}

function PopupContent({ school }: { school: School }) {
  return (
    <div className="p-3 space-y-2">
      <h3 className="font-bold text-sm text-foreground leading-tight">{school.name}</h3>
      <span className="inline-block text-[10px] font-medium px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
        {school.principal === "Kom." ? "Kommunal" : "Enskild"}
      </span>
      <div className="grid grid-cols-2 gap-2 pt-1">
        <div className="bg-muted/60 rounded-md p-2 text-center">
          <div className="text-lg font-bold text-foreground">{school.faktisktVarde1 ?? "–"}%</div>
          <div className="text-[10px] text-muted-foreground leading-tight">Behörighet</div>
        </div>
        <div className="bg-muted/60 rounded-md p-2 text-center">
          <div className="text-lg font-bold text-foreground">{school.faktisktVarde2 ?? "–"}</div>
          <div className="text-[10px] text-muted-foreground leading-tight">Meritvärde</div>
        </div>
      </div>
      <div className="text-[10px] text-muted-foreground space-y-0.5 pt-1 border-t border-border">
        <div>Föräldrarnas utb.nivå: {school.parentEducation}</div>
        <div>Nyinvandrade: {school.percentNewImmigrants}%</div>
        <div>Pojkar: {school.percentBoys}%</div>
      </div>
    </div>
  );
}

function FlyToSchool({ school }: { school: School | null }) {
  const map = useMap();
  useEffect(() => {
    if (school) {
      map.flyTo([school.lat, school.lng], 15, { duration: 0.8 });
    }
  }, [school, map]);
  return null;
}

export default function SchoolMap() {
  const [activeMetric, setActiveMetric] = useState<MetricKey>("faktisktVarde1");
  const [flyTarget, setFlyTarget] = useState<School | null>(null);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);

  const handleSchoolClick = useCallback((school: School) => {
    setSelectedSchool(school.name);
    setFlyTarget(school);
    setTimeout(() => setFlyTarget(null), 1000);
  }, []);

  return (
    <div className="h-screen w-screen relative">
      {/* Controls */}
      <div className="absolute top-4 left-4 z-[1000] bg-card/95 backdrop-blur-sm rounded-lg shadow-lg border border-border p-3 space-y-2">
        <h1 className="text-sm font-bold text-foreground">Skolor i Malmö 2025</h1>
        <p className="text-[10px] text-muted-foreground">SALSA – Skolverket</p>
        <div className="flex gap-1">
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
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 left-4 z-[1000] bg-card/95 backdrop-blur-sm rounded-lg shadow-lg border border-border p-3">
        <div className="text-[10px] font-semibold text-foreground mb-1.5">{metricLabels[activeMetric]}</div>
        <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-3 rounded-full" style={{ background: "hsl(0, 70%, 50%)" }} />
            Låg
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-3 rounded-full" style={{ background: "hsl(45, 80%, 50%)" }} />
            Medel
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-3 rounded-full" style={{ background: "hsl(160, 60%, 40%)" }} />
            Hög
          </span>
        </div>
      </div>

      {/* School list sidebar */}
      <SchoolListSidebar
        activeMetric={activeMetric}
        onSchoolClick={handleSchoolClick}
        selectedSchool={selectedSchool}
      />

      <MapContainer
        center={[55.585, 13.005]}
        zoom={12}
        className="h-full w-full"
        zoomControl={false}
      >
        <ZoomControl position="topright" />
        <FlyToSchool school={flyTarget} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {schools.map((school) => {
          const value = school[activeMetric];
          if (value === null) return null;
          const isSelected = selectedSchool === school.name;
          return (
            <CircleMarker
              key={school.name}
              center={[school.lat, school.lng]}
              radius={isSelected ? getRadius(value, activeMetric) + 4 : getRadius(value, activeMetric)}
              pathOptions={{
                color: isSelected ? "hsl(220, 90%, 50%)" : getColor(value, activeMetric),
                fillColor: getColor(value, activeMetric),
                fillOpacity: isSelected ? 0.9 : 0.7,
                weight: isSelected ? 4 : 2,
                opacity: 0.9,
              }}
              eventHandlers={{
                click: () => setSelectedSchool(school.name),
              }}
            >
              <Popup className="school-popup">
                <PopupContent school={school} />
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}
