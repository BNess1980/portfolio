import { useMemo } from "react";

const FIELD_WIDTH = 1440;
const FIELD_HEIGHT = 500;

interface DustLayer {
  size: number;
  count: number;
  duration: number;
  opacity: number;
}

const LAYERS: DustLayer[] = [
  { size: 1, count: 20, duration: 15, opacity: 0.7 },
  { size: 2, count: 12, duration: 28, opacity: 0.55 },
  { size: 3, count: 6, duration: 45, opacity: 0.4 },
];

function buildDustShadow(count: number, opacity: number): string {
  const points = Array.from({ length: count }, () => ({
    x: Math.round(Math.random() * FIELD_WIDTH),
    y: Math.round(Math.random() * FIELD_HEIGHT),
  }));

  const color = `rgba(255, 255, 255, ${opacity})`;
  const primary = points.map(({ x, y }) => `${x}px ${y}px ${color}`);
  const looped = points.map(({ x, y }) => `${x}px ${y + FIELD_HEIGHT}px ${color}`);

  return [...primary, ...looped].join(", ");
}

export default function DustParticles() {
  const shadows = useMemo(
    () => LAYERS.map((layer) => buildDustShadow(layer.count, layer.opacity)),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {LAYERS.map((layer, index) => (
        <div
          key={index}
          className="dust-particle absolute left-0 top-0 rounded-full"
          style={{
            width: layer.size,
            height: layer.size,
            boxShadow: shadows[index],
            animationDuration: `${layer.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
