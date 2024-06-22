import { Box } from '@chakra-ui/react';
import { MainPage } from '../../../pages/MainPage';
import { LibraryPage } from '../../../pages/LibraryPage';

export enum PATHS {
  ABOUT = '/about',
  CONTACT = '/contact',
  GALLERY = '/gallery',
  LIBRARY = '/library',
  LIBRARY_ITEM = '/library/:id',
  ROOT = '/home',
}

export const navigationPaths = [
  {
    element: <MainPage />,
    label: "What's new",
    path: PATHS.ROOT,
  },
  {
    element: <LibraryPage />,
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

export const paths = [
  ...navigationPaths,
  {
    element: <Box color='white'>Library</Box>,
    label: 'Library',
    path: PATHS.LIBRARY_ITEM,
  },
];
