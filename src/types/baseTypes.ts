export type TypeTextTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'p';
export type TypeTrianglePoints = [
  number,
  number,
  number,
  number,
  number,
  number,
];
export type TypeLinePoints = [number, number];
export type TypeXYTriangularCoordinates = {
  xs: string[];
  ys: string[];
};
export type TypePageData = {
  id: string;
  title: string;
  points: TypeTrianglePoints[];
  markers: {
    points: TypeLinePoints[];
    labels: string[];
  },
  metaData: string[];
  strokeColor: string;
};
