import * as React from 'react';

export function Wrapper(props: {
  children: any;
  className?: string;
  width?: number;
  height?: number;
  style?: {
    [key: string]: any;
  };
}) {
  const width: string = props.width ? `${props.width}px` : 'auto';
  const height: string = props.height ? `${props.height}px` : 'auto';
  return (
    <section className={props.className || ''} style={{ ...props.style, width, height }}>
      {props.children}
    </section>
  );
}
