import { MapFilterProvider, useMapFilters } from "@/contexts/MapFilterContext";
import { School } from "@/data/schools";
import { getColor, getRadius } from "@/lib/metrics";
import { useCallback, useEffect, useState } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer, ZoomControl, useMap } from "react-leaflet";
import MapControls from "./MapControls";
import MapLegend from "./MapLegend";
import PopupContent from "./PopupContent";
import SchoolListSidebar from "./SchoolListSidebar";

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
  return (
    <MapFilterProvider>
      <InnerSchoolMap />
    </MapFilterProvider>
  );
}

function InnerSchoolMap() {
  const { activeMetric, year, filteredSchools, deriveMetricValue } = useMapFilters();
  const [flyTarget, setFlyTarget] = useState<School | null>(null);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);

  const handleSchoolClick = useCallback((school: School) => {
    setSelectedSchool(school.name);
    setFlyTarget(school);
    setTimeout(() => setFlyTarget(null), 1000);
  }, []);

  useEffect(() => {
    setSelectedSchool(null);
    setFlyTarget(null);
  }, [year]);

  return (
    <div className="h-screen w-screen relative">
      <MapControls />
      <MapLegend />

      <SchoolListSidebar
        activeMetric={activeMetric}
        onSchoolClick={handleSchoolClick}
        selectedSchool={selectedSchool}
      />

      <MapContainer center={[55.58, 13.05]} zoom={11} className="h-full w-full" zoomControl={false}>
        <ZoomControl position="topright" />
        <FlyToSchool school={flyTarget} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
          url={`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?key=${import.meta.env.VITE_API_KEY}`}
        />

        {filteredSchools.map((school) => {
          const value = deriveMetricValue(school);
          if (value === null || value === undefined) return null;
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
              eventHandlers={{ click: () => setSelectedSchool(school.name) }}
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
