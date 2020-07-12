import * as React from 'react';
import { Text } from './Text';


function getIconAndText(data: string): { icon: any, text: any } {
  if (data.startsWith('Highest Point: ')) {
    return {
      icon: <i className="material-icons">terrain</i>,
      text: <Text type="p">{data.replace('Highest Point: ', '')}</Text>,
    }
  }
  if (data.startsWith('Mileage: ')) {
    return {
      icon: <i className="material-icons">directions_walk</i>,
      text: <Text type="p">{data.replace('Mileage: ', '')}</Text>,
    };
  }
  if (data.startsWith('Duration: ')) {
    return {
      icon: <i className="material-icons">schedule</i>,
      text: <Text type="p">{data.replace('Duration: ', '')}</Text>,
    };
  }
  if (data.startsWith('Location: ')) {
    return {
      icon: <i className="material-icons">place</i>,
      text: <Text type="p">{data.replace('Location: ', '')}</Text>,
    };
  }
  return {
    icon: null,
    text: <Text type="p">{data}</Text>,
  };
}

export function MetaData(props: { metaData: string[] }) {
  return (
    <div className="meta-data">
      <div className="meta-data-inner">
        {
          props.metaData.map((data: string, i: number) => {
            const { icon, text } = getIconAndText(data);
            return (
              <div key={`metadata.${i}`} className="meta-data-item">
                {icon}
                {text}
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
