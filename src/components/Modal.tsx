import * as React from 'react';

export function Modal(props: {
  visible: boolean;
  imgSrc: string;
  isNarrow: boolean;
  onClose: () => void;
}) {
  return (
    <div className={`modal display-${props.visible.toString()}`}>
      <img className={`image${props.isNarrow ? ' narrow' : ''}`} src={props.imgSrc} alt="image" />
      <div className={`close-btn${props.isNarrow ? ' narrow' : ''}`} onClick={props.onClose}>
        <i className="material-icons">close</i>
      </div>
    </div>
  );
}
