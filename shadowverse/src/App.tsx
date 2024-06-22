import { BrowserRouter } from 'react-router-dom';
import { Box, ChakraProvider, Flex, Stack } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import Router from './app/providers/Router/Router.tsx';
import { AppHeader, AppSidebar } from './app/components';
import { AppTheme } from './const/styles/theme.ts';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ChakraProvider theme={AppTheme}>
          <Suspense
            fallback={
              <Box display='flex' justifyContent='center' alignItems='center'>
                Loading...
              </Box>
            }
          >
            <Stack gap='24px' width='100%' height='100%'>
              <Flex width='100%' height='100%'>
                <AppSidebar />
                <Stack
                  gap='8px'
                  p='0 24px 0 280px'
                  alignItems='center'
                  flexGrow={1}
                >
                  <Router />
                </Stack>
              </Flex>
            </Stack>
          </Suspense>
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
