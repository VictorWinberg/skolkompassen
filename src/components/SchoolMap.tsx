import { MapContainer, TileLayer, CircleMarker, Popup, ZoomControl, useMap } from "react-leaflet";
import { schools, School } from "@/data/schools";
import { useState, useCallback, useEffect } from "react";
import SchoolListSidebar from "./SchoolListSidebar";
import { MetricKey, metricLabels, getColor, getRadius } from "@/lib/metrics";

function PopupContent({ school }: { school: School }) {
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
  const [year, setYear] = useState<number>(2025);

  const handleSchoolClick = useCallback((school: School) => {
    setSelectedSchool(school.name);
    setFlyTarget(school);
    setTimeout(() => setFlyTarget(null), 1000);
  }, []);

  // clear selection when we change year
  useEffect(() => {
    setSelectedSchool(null);
    setFlyTarget(null);
  }, [year]);

  const filteredSchools = schools.filter((s) => s.år === year);

  return (
    <div className="h-screen w-screen relative">
      {/* Controls */}
      <div className="absolute top-4 left-4 z-[1000] bg-card/95 backdrop-blur-sm rounded-lg shadow-lg border border-border p-3 space-y-2">
        <h1 className="text-sm font-bold text-foreground">Skolor i Malmö-regionen {year}</h1>
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
      </div>

      {/* Legend */}
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

      {/* School list sidebar */}
      <SchoolListSidebar
        activeMetric={activeMetric}
        onSchoolClick={handleSchoolClick}
        selectedSchool={selectedSchool}
        year={year}
      />

      <MapContainer center={[55.58, 13.05]} zoom={11} className="h-full w-full" zoomControl={false}>
        <ZoomControl position="topright" />
        <FlyToSchool school={flyTarget} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {filteredSchools.map((school) => {
          const value = school[activeMetric];
          if (value === null) return null;
          const isSelected = selectedSchool === school.name;
          return (
            <CircleMarker
              key={school.name}
              center={[school.lat, school.lng]}
              radius={
                isSelected ? getRadius(value, activeMetric) + 4 : getRadius(value, activeMetric)
              }
              pathOptions={{
                color: isSelected ? "hsl(210, 60%, 45%)" : getColor(value, activeMetric),
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
