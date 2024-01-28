import React, { useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { animateTransition } from '../utils/animateTransition';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { useIsomorphicLayoutEffect } from '../helpers/useIsomorphicEffect';

import image1 from '../../public/img/gallery/img1.jpg';
import image2 from '../../public/img/gallery/img2.jpg';
import image3 from '../../public/img/gallery/img3.jpg';
import image4 from '../../public/img/gallery/img4.jpg';
import image5 from '../../public/img/gallery/img5.jpg';
import image6 from '../../public/img/gallery/img6.jpg';
import image7 from '../../public/img/gallery/img7.jpg';
import image8 from '../../public/img/gallery/img8.jpg';
import image9 from '../../public/img/gallery/img9.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];
const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
function nextImageUrl(src: string, size: number) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
}
const PortfolioComp = () => {
  const [open, setOpen] = useState(false);
  useIsomorphicLayoutEffect(() => {
    animateTransition(true);

    gsap.to('html', {
      duration: 2,
      backgroundImage: 'url(/svg/diamond-sunset.svg)',
      backgroundSize: 'cover',
      ease: 'power1.in',
      opacity: 1,
    });

    gsap.to('p', {
      top: '40px',
      ease: 'power4.inOut',
      duration: 1,
      stagger: {
        amount: 0.15,
      },
      delay: 3,
    });
    return () => {
      gsap.to('html', {
        duration: 1,
        backgroundImage: 'none',
        ease: 'power1.in',
      });
    };
  }, []);
  const slides = images.map(({ src, width, height }) => ({
    width,
    height,
    src: nextImageUrl(src, width),
    srcSet: imageSizes
      .concat(...deviceSizes)
      .filter((size) => size <= width)
      .map((size) => ({
        src: nextImageUrl(src, size),
        width: size,
        height: Math.round((height / width) * size),
      })),
  }));

  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)} // Agora 'setOpen' está definido
      slides={slides}
      plugins={[Zoom]}
    />
  );
};

export default PortfolioComp;
