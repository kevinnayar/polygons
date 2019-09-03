import * as React from 'react';
import { Text } from './Text';

export function MetaData(props: { metaData: string[] }) {
  return (
    <div className="meta-data">
      {props.metaData.map((text: string, i: number) => <Text key={`metadata.${i}`} type="p" className="meta-data-item">{text}</Text>)}
    </div>
  );
}
