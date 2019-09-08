import * as React from 'react';
import { CSSProperties } from 'react';

export function Modal(props: {
  visible: boolean;
  imgSrc: string;
  isNarrow: boolean;
  width: number;
  onClose: () => void;
}) {
  let imgWidth: number = 880;

  if (props.width < 412) {
    imgWidth = 380;
  } else if (props.width < 768) {
    imgWidth = 440;
  } else if (props.width < 1024) {
    imgWidth = 660;
  }

  if (props.isNarrow) {
    imgWidth = imgWidth * 0.5625;
  }

  const imgStyle: CSSProperties = {
    width: `${imgWidth}px`,
    height: 'auto',
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginLeft: `-${imgWidth / 2}px`,
    marginTop: `-${props.isNarrow ? imgWidth * 1.33 / 2 : imgWidth * 0.75 / 2}px`,
  };

  const BTN_BUFFER: number = 30;
  const btnStyle: CSSProperties = {
    position: 'fixed',
    top: '50%',
    right: '50%',
    marginRight: `-${imgWidth / 2 + BTN_BUFFER}px`,
    marginTop: `-${(props.isNarrow ? imgWidth * 1.33 / 2 : imgWidth * 0.75 / 2) + BTN_BUFFER}px`,
  };

  return (
    <div className={`modal display-${props.visible.toString()}`}>
      <img
        className="image"
        src={props.imgSrc}
        alt="image"
        style={imgStyle}
      />
      <div
        className="close-btn"
        style={btnStyle}
        onClick={props.onClose}
      >
        <i className="material-icons">close</i>
      </div>
    </div>
  );
}
