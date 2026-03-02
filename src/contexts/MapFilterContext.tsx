import React, { createContext, useContext, useMemo, useState, useCallback } from "react";
import { MetricKey } from "@/lib/metrics";
import { School, schools } from "@/data/schools";

type MapFilterState = {
  activeMetric: MetricKey;
  setActiveMetric: (m: MetricKey) => void;
  year: number;
  setYear: (y: number) => void;
  meritvärdeMin: number;
  setMeritvärdeMin: (v: number) => void;
  behörighetMin: number;
  setBehörighetMin: (v: number) => void;
  filteredSchools: School[];
  deriveMetricValue: (s: School) => number | null | undefined;
};

const MapFilterContext = createContext<MapFilterState | undefined>(undefined);

export const MapFilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeMetric, setActiveMetric] = useState<MetricKey>("faktisktVarde1");
  const [year, setYear] = useState<number>(2025);
  const [meritvärdeMin, setMeritvärdeMin] = useState<number>(0);
  const [behörighetMin, setBehörighetMin] = useState<number>(0);

  const deriveMetricValue = useCallback(
    (s: School) => {
      if (activeMetric === "deltaFaktisktVarde1") {
        const prev = schools.find((p) => p.key === s.key && p.år === year - 5);
        return s.faktisktVarde1 != null && prev && prev.faktisktVarde1 != null
          ? s.faktisktVarde1 - prev.faktisktVarde1
          : null;
      }
      if (activeMetric === "deltaFaktisktVarde2") {
        const prev = schools.find((p) => p.key === s.key && p.år === year - 5);
        return s.faktisktVarde2 != null && prev && prev.faktisktVarde2 != null
          ? s.faktisktVarde2 - prev.faktisktVarde2
          : null;
      }
      return s[activeMetric];
    },
    [activeMetric, year],
  );

  const filteredSchools = useMemo(() => {
    return schools.filter((s) => {
      if (s.år !== year) return false;
      if ((s.faktisktVarde1 ?? -Infinity) < behörighetMin) return false;
      const metricValue = deriveMetricValue(s);
      if (metricValue === null || metricValue === undefined) return false;
      // meritvärdeMin should always refer to faktisktVarde2
      if ((s.faktisktVarde2 ?? -Infinity) < meritvärdeMin) return false;
      return true;
    });
  }, [year, behörighetMin, meritvärdeMin, deriveMetricValue]);

  return (
    <MapFilterContext.Provider
      value={{
        activeMetric,
        setActiveMetric,
        year,
        setYear,
        meritvärdeMin,
        setMeritvärdeMin,
        behörighetMin,
        setBehörighetMin,
        filteredSchools,
        deriveMetricValue,
      }}
    >
      {children}
    </MapFilterContext.Provider>
  );
};

export function useMapFilters() {
  const ctx = useContext(MapFilterContext);
  if (!ctx) throw new Error("useMapFilters must be used within MapFilterProvider");
  return ctx;
}
