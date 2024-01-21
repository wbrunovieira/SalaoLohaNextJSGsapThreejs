import { gsap } from 'gsap';

export function animateTransition(start: boolean) {
  gsap.to('.transitions', {
    duration: 1,
    scaleY: start ? 1 : 0,
    transformOrigin: 'bottom',
    ease: 'power1.inOut',
  });
}
