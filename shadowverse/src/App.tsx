import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Router from './app/providers/Router/Router.tsx';

const App = () => {
  const sm: any = 1;
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ChakraProvider>
          <Router />
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
