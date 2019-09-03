import * as React from 'react';
import { Wrapper } from './Wrapper';
import {
  buildTriangularPath,
  buildCircleCoordinates,
} from '../utils/baseUtils';
import { TypeTrianglePoints } from '../types/baseTypes';

export function Polygon(props: {
  page: number;
  points: TypeTrianglePoints;
  width: number;
  height: number;
  shapeFill: string;
  shapeStrokeColor: string;
  shapeStrokeWidth: number;
  circleRadius: number;
  circleFill: string;
}) {
  const path: string = buildTriangularPath(
    props.points,
    props.width,
    props.height,
  );
  const coords: TypeTrianglePoints = buildCircleCoordinates(
    props.points,
    props.width,
    props.height,
  );

  return (
    <Wrapper
      className="svg"
      width={props.width}
      height={props.height}
      style={{ marginLeft: `-${props.width / 2}px` }}
    >
      <svg viewBox={`0 0 ${props.width} ${props.height}`}>
        <path
          d={path}
          fill={props.shapeFill}
          stroke={props.shapeStrokeColor}
          strokeWidth={props.shapeStrokeWidth}
        />
        <circle
          cx={coords[0]}
          cy={coords[1]}
          r={props.circleRadius}
          fill={props.circleFill}
        />
        <circle
          cx={coords[2]}
          cy={coords[3]}
          r={props.circleRadius}
          fill={props.circleFill}
        />
        <circle
          cx={coords[4]}
          cy={coords[5]}
          r={props.circleRadius}
          fill={props.circleFill}
        />
      </svg>
    </Wrapper>
  );
}
