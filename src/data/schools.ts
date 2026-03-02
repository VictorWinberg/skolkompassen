import { getLocation } from "./locations";

export interface School {
  name: string;
  kommun: string;
  principal: string;
  parentEducation: string;
  percentNewImmigrants: string;
  percentBoys: string;
  faktisktVarde1: number | null; // Behörighet (%)
  faktisktVarde2: number | null; // Meritvärde (poäng)
  år: number;
  lat: number;
  lng: number;
}

function toNumberOrNull(s: string | undefined): number | null {
  if (!s) return null;
  const n = Number(s.replace(",", "."));
  return Number.isNaN(n) ? null : n;
}

export let schools: School[] = [];

export async function loadSchools(): Promise<void> {
  const res = await fetch("/data/salsa.csv");
  if (!res.ok) throw new Error("Failed to fetch CSV");
  const text = await res.text();

  const lines = text.split(/\r?\n/).filter(Boolean);
  const rows = lines
    .slice(1)
    .map((line) => line.split(";").map((p) => p.replace(/^"|"$/g, "").trim()));

  const parsed: School[] = rows.map((parts, i) => {
    const år = toNumberOrNull(parts[0]);
    const kommun = parts[1] || "";
    const name = parts[2] || "";
    const principal = parts[3] || "";
    const parentEducation = parts[4] || "";
    const percentNewImmigrants = parts[5] || "";
    const percentBoys = parts[8] || "";
    const faktisktVarde1 = toNumberOrNull(parts[9]);
    const faktisktVarde2 = toNumberOrNull(parts[12]);
    const loc = getLocation(name);

    return {
      name,
      kommun,
      principal,
      parentEducation,
      percentNewImmigrants,
      percentBoys,
      faktisktVarde1,
      faktisktVarde2,
      lat: loc.lat,
      lng: loc.lng,
      år: år,
    };
  });

  schools = parsed;
}
