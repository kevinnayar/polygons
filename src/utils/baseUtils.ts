import {
  TypeTrianglePoints,
  TypeXYTriangularCoordinates,
} from '../types/baseTypes';

export function shuffleArray(arr: Array<any>) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * max + min);
}

export function getRandomColorWithSpecificRanges(
  rMin: number,
  rMax: number,
  gMin: number,
  gMax: number,
  bMin: number,
  bMax: number,
): string {
  const r: number = getRandomNumber(rMin, rMax);
  const g: number = getRandomNumber(gMin, gMax);
  const b: number = getRandomNumber(bMin, bMax);
  return `rgb(${r}, ${g}, ${b})`;
}

export function getRandomColorWithSpecificAlpha(
  rgb: string,
  alpha: number,
): string {
  const a: string = `, ${alpha.toString()})`;
  return rgb.replace('rgb', 'rgba').replace(')', a);
}

function buildXYCoordinates(
  points: TypeTrianglePoints,
  maxWidth: number,
  maxHeight: number,
): TypeXYTriangularCoordinates {
  const xs: string[] = [points[0], points[2], points[4]].map((p: number) =>
    ((p * maxWidth) / 100).toFixed(2),
  );
  const ys: string[] = [points[1], points[3], points[5]].map((p: number) =>
    ((p * maxHeight) / 100).toFixed(2),
  );
  const result: TypeXYTriangularCoordinates = { xs, ys };
  return result;
}

export function buildTriangularPath(
  points: TypeTrianglePoints,
  maxWidth: number,
  maxHeight: number,
): string {
  const isLargerThan100: boolean = points.some((point: number) => point > 100);
  if (isLargerThan100) {
    throw new Error(
      'Failed buildTriangularPath(): values cannot be larger than 100 since they are percentages',
    );
  }
  const coords: TypeXYTriangularCoordinates = buildXYCoordinates(
    points,
    maxWidth,
    maxHeight,
  );
  const result: string = `M${coords.xs[0]},${coords.ys[0]}, L${coords.xs[1]},${coords.ys[1]} L${coords.xs[2]},${coords.ys[2]} Z`;
  return result;
}

export function buildCircleCoordinates(
  points: TypeTrianglePoints,
  maxWidth: number,
  maxHeight: number,
): TypeTrianglePoints {
  const coords: TypeXYTriangularCoordinates = buildXYCoordinates(
    points,
    maxWidth,
    maxHeight,
  );
  const result: TypeTrianglePoints = [
    parseInt(coords.xs[0], 10),
    parseInt(coords.ys[0], 10),
    parseInt(coords.xs[1], 10),
    parseInt(coords.ys[1], 10),
    parseInt(coords.xs[2], 10),
    parseInt(coords.ys[2], 10),
  ];
  return result;
}
