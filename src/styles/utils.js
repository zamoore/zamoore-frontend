export default {
  triangle(side = 'right', color = 'light') {
    let xOrigin;
    let yOrigin;
    let xBorder;
    let yBorder;

    if (side === 'right') {
      xOrigin = 'right';
      yOrigin = 'bottom';
      xBorder = 'border-left';
      yBorder = 'border-bottom';
    } else if (side === 'left') {
      xOrigin = 'left';
      yOrigin = 'top';
      xBorder = 'border-right';
      yBorder = 'border-top';
    }

    let borderColor = color === 'light' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

    return `
      &:before {
        width: 0;
        height: 0;
        ${yBorder}: 45vw solid ${borderColor};
        ${xBorder}: 45vw solid #0000;
        display: block;
        content: "";
        ${xOrigin}: 0;
        position: absolute;
        ${yOrigin}: 0;
      }
    `;
  }
};
