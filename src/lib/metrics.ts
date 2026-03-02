export type MetricKey =
  | "faktisktVarde1"
  | "faktisktVarde2"
  | "deltaFaktisktVarde1"
  | "deltaFaktisktVarde2";

export const metricLabels: Record<MetricKey, string> = {
  faktisktVarde1: "Behörighet (%)",
  faktisktVarde2: "Meritvärde (poäng)",
  deltaFaktisktVarde1: "Behörighet (Δ 5 år)",
  deltaFaktisktVarde2: "Meritvärde (Δ 5 år)",
};

export function getColor(value: number, metric: MetricKey): string {
  // Five discrete levels (very low -> very high) using thresholds per metric.
  const thresholds: Record<MetricKey, number[]> = {
    // Behörighet (%) — thresholds that create five buckets covering 30..100
    faktisktVarde1: [40, 67, 77, 85, 100],
    // Meritvärde (poäng) — thresholds for five buckets covering 180..300
    faktisktVarde2: [200, 220, 240, 270, 300],
    // Deltas: negative -> positive
    deltaFaktisktVarde1: [-15, -5, 0, 5, 15], // percent points
    deltaFaktisktVarde2: [-30, -10, 0, 10, 30], // merit points
  };

  const colors = [
    "hsl(0, 70%, 50%)", // Mycket låg / mycket negativ
    "hsl(28, 85%, 50%)", // Låg / negativ
    "hsl(45, 80%, 50%)", // Neutral
    "hsl(160, 60%, 40%)", // Positiv
    "hsl(210, 60%, 45%)", // Stark positiv
  ];

  const th = thresholds[metric];
  for (let i = 0; i < th.length; i++) {
    if (value <= th[i]) return colors[i];
  }
  return colors[colors.length - 1];
}

export function getRadius(value: number, metric: MetricKey): number {
  // Five-level radii matching the thresholds used in getColor.
  const thresholds: Record<MetricKey, number[]> = {
    faktisktVarde1: [40, 55, 70, 85, 100],
    faktisktVarde2: [200, 220, 240, 270, 300],
    deltaFaktisktVarde1: [-15, -5, 0, 5, 15],
    deltaFaktisktVarde2: [-30, -10, 0, 10, 30],
  };

  const radii: number[] = [6, 8, 10, 12, 15];

  const th = thresholds[metric];
  for (let i = 0; i < th.length; i++) {
    if (value <= th[i]) return radii[i];
  }
  return radii[radii.length - 1];
}
