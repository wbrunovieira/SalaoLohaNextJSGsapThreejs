'use client';

import * as React from 'react';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import NextJsImage from '@/components/NextJsImage';

import image1 from '../assets/img/img1.jpg';
import image2 from '../assets/img/img2.jpg';
import image3 from '../assets/img/img3.jpg';
import image4 from '../assets/img/img4.jpg';
import image5 from '../assets/img/img5.jpg';
import image6 from '../assets/img/img6.jpg';
import image7 from '../assets/img/img7.jpg';
import image8 from '../assets/img/img8.jpg';
import image9 from '../assets/img/img9.jpg';

const slides = [
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
const Portfolio: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button type='button' onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        render={{ slide: NextJsImage }}
      />
    </>
  );
};

export default Portfolio;
