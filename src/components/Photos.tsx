import * as React from 'react';
// @ts-ignore
const imagesGraysTorreys: Object = require('../assets/images/grays-and-torreys/*.jpg');
// @ts-ignore
const imagesEverest: Object = require('../assets/images/mount-everest-basecamp/*.jpg');
// @ts-ignore
const imagesMachuPicchu: Object = require('../assets/images/machu-picchu/*.jpg');
// @ts-ignore
const imagesWashburn: Object = require('../assets/images/mount-washburn/*.jpg');
// @ts-ignore
const imagesBeckler: Object = require('../assets/images/beckler-peak/*.jpg');

export function Photos(props: {
  folder: string;
  max: number;
  width: number;
  onClick: (imgSrc: string, isNarrow: boolean) => void;
}) {
  let images: Object = {};

  if (props.folder === 'grays-and-torreys') {
    images = imagesGraysTorreys;
  } else if (props.folder === 'mount-everest-basecamp') {
    images = imagesEverest;
  } else if (props.folder === 'machu-picchu') {
    images = imagesMachuPicchu;
  } else if (props.folder === 'mount-washburn') {
    images = imagesWashburn;
  } else if (props.folder === 'beckler-peak') {
    images = imagesBeckler;
  }

  return (
    <div className="photos">
      {Array.from(Array(props.max).keys()).map((_n: any, i: number) => {
        const isNarrow: boolean = i === 0 || i === 3;
        const imgWidth: number = isNarrow ? props.width * 0.21951219512 : props.width * 0.39024390243;

        return (
          <img
            key={i}
            className="photo"
            src={images[i]}
            style={{
              width: `${imgWidth}px`,
              height: 'auto',
            }}
            onClick={() => props.onClick(images[i], isNarrow)}
          />
        );
      })}
    </div>
  );
}
