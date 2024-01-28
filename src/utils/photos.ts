// photos.ts

export interface Photo {
  src: string;
  height: number;
  width: number;
}

const photos: Photo[] = [
  {
    src: '/img/gallery/img1.jpg',
    width: 800,
    height: 600,
  },
  {
    src: '/img/gallery/img2.jpg',
    width: 1000,
    height: 800,
  },
  {
    src: '/img/gallery/img3.jpg',
    width: 1000,
    height: 800,
  },
  {
    src: '/img/gallery/img4.jpg',
    width: 1000,
    height: 800,
  },
  {
    src: '/img/gallery/img5.jpg',
    width: 1000,
    height: 800,
  },

  {
    src: '/img/gallery/img6.jpg',
    width: 1000,
    height: 800,
  },
  {
    src: '/img/gallery/img7.jpg',
    width: 1000,
    height: 800,
  },
  {
    src: '/img/gallery/img8.jpg',
    width: 1000,
    height: 800,
  },
  {
    src: '/img/gallery/img9.jpg',
    width: 1000,
    height: 800,
  },
];

export default photos;
