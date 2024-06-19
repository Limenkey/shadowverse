import { Box } from '@chakra-ui/react';
import { MainPage } from '../../../pages/MainPage';

export enum PATHS {
  ABOUT = '/about',
  CONTACT = '/contact',
  GALLERY = '/gallery',
  LIBRARY = '/library',
  ROOT = '/',
}

const paths = [
  {
    element: <MainPage />,
    label: "What's new",
    path: PATHS.ROOT,
  },
  {
    element: <Box color='white'>Library</Box>,
    label: 'Library',
    path: PATHS.LIBRARY,
  },
  {
    element: <Box color='white'>Gallery</Box>,
    label: 'Gallery',
    path: PATHS.GALLERY,
  },
  {
    element: <Box color='white'>About</Box>,
    label: 'About',
    path: PATHS.ABOUT,
  },
  {
    element: <Box color='white'>Contact</Box>,
    label: 'Contact',
    path: PATHS.CONTACT,
  },
];

export default paths;
