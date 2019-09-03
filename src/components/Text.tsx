import * as React from 'react';
import { TypeTextTypes } from '../types/baseTypes';

export function Text(props: {
  type: TypeTextTypes;
  className?: string;
  children: any;
}) {
  return (
    <props.type className={props.className || ''}>{props.children}</props.type>
  );
}
