import * as React from 'react';
import { Wrapper } from './Wrapper';
import { TypeLinePoints } from '../types/baseTypes';

export function Marker(props: {
  point: TypeLinePoints;
  label: void | string;
  width: number;
  height: number;
  shapeFill: string;
  shapeStrokeColor: string;
  shapeStrokeWidth: number;
}) {
  const startPoint: TypeLinePoints = [
    Math.floor(props.point[0] * props.width),
    Math.floor(props.point[1] * props.height),
  ];
  const endPoint: TypeLinePoints = [startPoint[0] + 55, startPoint[1] - 20];

  return (
    <Wrapper
      className="svg"
      width={props.width}
      height={props.height}
      style={{ marginLeft: `-${props.width / 2}px` }}
    >
      <svg viewBox={`0 0 ${props.width} ${props.height}`}>
        <line
          x1={startPoint[0]}
          y1={startPoint[1]}
          x2={endPoint[0]}
          y2={endPoint[1]}
          stroke={props.shapeStrokeColor}
          strokeWidth={props.shapeStrokeWidth}
        />
        <line
          x1={endPoint[0]}
          y1={endPoint[1] - 10}
          x2={endPoint[0]}
          y2={endPoint[1] + 10}
          stroke={props.shapeStrokeColor}
          strokeWidth={props.shapeStrokeWidth}
        />
        {props.label && (
          <text
            x={endPoint[0] + 10}
            y={endPoint[1] + 5}
            fontSize="14"
            fontWeight="bold"
            fill={props.shapeStrokeColor}
          >
            {props.label}
          </text>
        )}
      </svg>
    </Wrapper>
  );
}
