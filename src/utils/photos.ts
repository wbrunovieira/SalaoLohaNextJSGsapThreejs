// photos.ts

export interface Photo {
  src: string;
  height: number;
  width: number;
}

const photos: Photo[] = [
  {
    src: '/img/gallery/img/img1.jpg',
    width: 800,
    height: 600,
  },
  {
    src: '/img/gallery/img/img2.jpg',
    width: 1000,
    height: 800,
  },
  {
    src: '/img/gallery/img/img3.jpg',
    width: 1000,
    height: 800,
  },
  {
    src: '/img/gallery/img/img4.jpg',
    width: 1000,
    height: 800,
  },
  {
    src: '/img/gallery/img/img5.jpg',
    width: 1000,
    height: 800,
  },

  {
    src: '/img/gallery/img/img6.jpg',
    width: 1000,
    height: 800,
  },
  {
    src: '/img/gallery/img/img7.jpg',
    width: 1000,
    height: 800,
  },
  {
    src: '/img/gallery/img/img8.jpg',
    width: 1000,
    height: 800,
  },
  {
    src: '/img/gallery/img/img9.jpg',
    width: 1000,
    height: 800,
  },
];

export default photos;
