import * as React from 'react';


export function Photos(props: { folder: string; max: number }) {
  let images: Object = {};

  if (props.folder === 'grays-and-torreys') {
    images = require('../assets/images/grays-and-torreys/*.jpg');
  } else if (props.folder === 'mount-everest-basecamp') {
    images = require('../assets/images/mount-everest-basecamp/*.jpg');
  } else if (props.folder === 'machu-picchu') {
    images = require('../assets/images/machu-picchu/*.jpg');
  }

  return (
    <div className="photos">
      {Array.from(Array(props.max).keys()).map((_n: any, i: number) => {
        return (
          <img
            key={i}
            className={`photo${i === 0 || i === props.max - 1 ? ' narrow' : ''}`}
            src={images[i]}
          />
        );
      })}
    </div>
  );
}
