import { gsap } from 'gsap';

export function animateTransition(start: boolean) {
  const tl = gsap.timeline();

  tl.to('.transitions', {
    duration: 1,
    scaleY: 1,
    transformOrigin: 'bottom',
    ease: 'power1.inOut',
  }).to('.transitions', {
    duration: 1,
    scaleY: 0,
    transformOrigin: 'bottom',
    ease: 'power1.inOut',
    delay: 1,
  });

  if (start) {
    tl.play();
  } else {
    tl.reverse();
  }
}
