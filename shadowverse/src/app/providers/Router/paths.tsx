import { Box } from '@chakra-ui/react';
import { MainPage } from '../../../pages/MainPage';

const paths = [
  {
    element: <MainPage />,
    path: '/',
  },
  {
    element: <Box>Hello!</Box>,
    path: '/1',
  },
];

export default paths;
