import * as React from 'react';

export function Nav(props: {
  page: number;
  max: number;
  onNavClick: (forward: boolean) => void;
}) {
  return (
    <div className="nav">
      <div className="nav-prev nav-btn" onClick={() => props.onNavClick(false)}>
        <i className="material-icons">keyboard_arrow_left</i>
      </div>
      <div className="nav-next nav-btn" onClick={() => props.onNavClick(true)}>
        <i className="material-icons">keyboard_arrow_right</i>
      </div>
    </div>
  );
}
