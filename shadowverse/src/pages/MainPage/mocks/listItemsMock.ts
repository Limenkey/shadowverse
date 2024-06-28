import mockImg2 from '../../../assets/images/mockImg2.jpg';
import testImg1 from '../../../assets/images/test1.jpg';
import testImg2 from '../../../assets/images/test2.jpg';
import wideImg1 from '../../../assets/images/wideTest1.jpg';
import wideImg2 from '../../../assets/images/wideTest2.jpg';
import testImg3 from '../../../assets/images/test3.jpg';
import mockPdf from '../../../assets/pdf/Copy of The Wind that Raises Sand.pdf';
import { NewsfeedItem } from '../../../types';
import { EAspectRatio } from '../../../const/options/aspectRatio.ts';

export const listItemsMock: NewsfeedItem[] = [
  {
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod',
    id: '2',
    image: {
      alt: 'picture',
      aspectRatio: EAspectRatio.HORIZONTAL,
      url: wideImg1,
    },
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. 2',
    title: 'Text article',
    type: 'image',
  },
  {
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod.',
    id: '1',
    image: {
      alt: 'picture',
      aspectRatio: EAspectRatio.VERTICAL,
      url: testImg1,
    },
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. 1',
    title: 'Text article',
    type: 'article',
  },
  {
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod',
    file: mockPdf,
    id: '3',
    image: {
      alt: 'picture',
      aspectRatio: EAspectRatio.VERTICAL,
      url: testImg3,
    },
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. 3',
    title: 'Text article',
    type: 'story',
  },
  {
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod',
    id: '4',
    image: {
      alt: 'picture',
      aspectRatio: EAspectRatio.VERTICAL,
      url: mockImg2,
    },
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. 3',
    title: 'Text article',
    type: 'story',
  },
  {
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod',
    id: '6',
    image: {
      alt: 'picture',
      aspectRatio: EAspectRatio.HORIZONTAL,
      url: wideImg2,
    },
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. 2',
    title: 'Text article',
    type: 'image',
  },
  {
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod',
    id: '5',
    image: {
      alt: 'picture',
      aspectRatio: EAspectRatio.VERTICAL,
      url: testImg2,
    },
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. 2',
    title: 'Text article',
    type: 'image',
  },

  {
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod',
    id: '7',
    image: {
      alt: 'picture',
      aspectRatio: EAspectRatio.VERTICAL,
      url: testImg3,
    },
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. 2',
    title: 'Text article',
    type: 'image',
  }
];
