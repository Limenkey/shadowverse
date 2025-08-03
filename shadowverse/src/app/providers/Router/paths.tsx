import { Box } from '@chakra-ui/react';
import { MainPage } from '../../../pages/MainPage';
import { LibraryPage } from '../../../pages/LibraryPage';
import { GalleryPage } from '../../../pages/GalleryPage';
import { APP_COLORS } from '../../../const/styles';

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
    element: <GalleryPage />,
    label: 'Gallery',
    path: PATHS.GALLERY,
  },
  {
    element: <Box color={APP_COLORS.textWhite}>About</Box>,
    label: 'About',
    path: PATHS.ABOUT,
  },
  {
    element: <Box color={APP_COLORS.textWhite}>Contact</Box>,
    label: 'Contact',
    path: PATHS.CONTACT,
  },
];

export const paths = [
  ...navigationPaths,
  {
    element: <Box color={APP_COLORS.textWhite}>Library</Box>,
    label: 'Library',
    path: PATHS.LIBRARY_ITEM,
  },
];
