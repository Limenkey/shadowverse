import { Suspense } from 'react';
import { Box, Center, Circle, Heading } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import paths from './paths.tsx';

const Router = () => {
  return (
    <Suspense
      fallback={
        <Box display='flex' justifyContent='center' alignItems='center'>
          Loading...
        </Box>
      }
    >
      <Circle
        size='48px'
        bg='lightslategrey'
        position='absolute'
        top='16px'
        left='16px'
      />
      <Center width='100%' height='48px'>
        <Heading fontStyle='italic'>IMC</Heading>
      </Center>
      {/* TODO: Create NavBar/Menu */}
      <Routes>
        {paths.map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Router;
