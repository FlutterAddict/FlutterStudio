import { setVisibility } from './index';



let xDown = null;
let yDown = null;



const getTouches = e => e.touches || e.originalEvent.touches;

const handleTouchStart = e => {
  const firstTouch = getTouches(e)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}                                           

const handleTouchMove = e => {
  if (!xDown || !yDown) { return; }
  let xUp = e.touches[0].clientX;                                    
  let yUp = e.touches[0].clientY;
  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff < 10 && xDown < 100) {
      setVisibility(true);
    };                    
  };

  xDown = null;
  yDown = null;                                             
};



document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);