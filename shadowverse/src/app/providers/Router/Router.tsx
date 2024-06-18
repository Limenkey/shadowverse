import { Suspense } from 'react';
import { Box, Center, Circle, Heading, Stack } from '@chakra-ui/react';
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
      <Stack height='100vh' direction='column' gap='24px' bg='#24252b'>
        <Circle
          size='48px'
          bg='lightslategrey'
          position='absolute'
          top='16px'
          left='16px'
        />
        <Center width='100%' height='48px'>
          <Heading fontStyle='italic' color='white'>IMC</Heading>
        </Center>
        {/* TODO: Create NavBar/Menu */}
        <Routes>
          {paths.map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Stack>
    </Suspense>
  );
};

export default Router;
