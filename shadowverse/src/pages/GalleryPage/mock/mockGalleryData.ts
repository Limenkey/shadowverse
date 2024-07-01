import mockImg2 from '../../../assets/images/mockImg2.jpg';
import testImg1 from '../../../assets/images/test1.jpg';
import testImg2 from '../../../assets/images/test2.jpg';
import wideImg1 from '../../../assets/images/wideTest1.jpg';
import wideImg2 from '../../../assets/images/wideTest2.jpg';
import testImg3 from '../../../assets/images/test3.jpg';
import { EAspectRatio } from '../../../const/options/aspectRatio.ts';
import { IGalleryItem } from '../../../types/IGalleryItem.ts';

export const mockGalleryData: IGalleryItem[] = [
  {
    alt: 'picture',
    aspectRatio: EAspectRatio.HORIZONTAL,
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod',
    id: '2',
    title: 'Image One Wide',
    url: wideImg1,
  },
  {
    alt: 'picture',
    aspectRatio: EAspectRatio.VERTICAL,
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod.',
    id: '1',
    title: 'Image Two Long',
    url: testImg1,
  },
  {
    alt: 'picture',
    aspectRatio: EAspectRatio.VERTICAL,
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod',
    id: '3',
    title: 'Image Three Long',
    url: testImg3,
  },
  {
    alt: 'picture',
    aspectRatio: EAspectRatio.VERTICAL,
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod',
    id: '4',
    title: 'Image Four Long',
    url: mockImg2,
  },
  {
    alt: 'picture',
    aspectRatio: EAspectRatio.HORIZONTAL,
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod',
    id: '6',
    title: 'Image Five Wide',
    url: wideImg2,
  },
  {
    alt: 'picture',
    aspectRatio: EAspectRatio.VERTICAL,
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod',
    id: '5',
    title: 'Image Six Long',
    url: testImg2,
  },

  {
    alt: 'picture',
    aspectRatio: EAspectRatio.VERTICAL,
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod',
    id: '7',
    title: 'Image Seven Long',
    url: testImg3,
  },
];
