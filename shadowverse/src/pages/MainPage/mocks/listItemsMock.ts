import mockImg from '../../../assets/images/mockImg.jpg';
import mockImg2 from '../../../assets/images/mockImg2.jpg';
import mockImg3 from '../../../assets/images/mockImg3.png';
import { NewsfeedItem } from '../../../types';

export const listItemsMock: NewsfeedItem[] = [
  {
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod.',
    id: '1',
    image: {
      alt: 'picture',
      url: mockImg,
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
    id: '2',
    image: {
      alt: 'picture',
      url: mockImg2,
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
    id: '3',
    image: {
      alt: 'picture',
      url: mockImg3,
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
      url: mockImg3,
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
    id: '5',
    image: {
      alt: 'picture',
      url: mockImg2,
    },
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. 2',
    title: 'Text article',
    type: 'image',
  },
];
