import { Box, Center } from '@chakra-ui/react';
import Carousel from '../../shared/presentation/Carousel/Carousel.tsx';

const MainPage = () => {
  return (
    <Center height='100vh'>
      <Box height='60%' width='70%' borderRadius='16px' aria-label='box'>
        <Carousel
          items={[
            { bg: 'lightslategrey', id: '1' },
            { bg: 'lightsteelblue', id: '2' },
            { bg: 'lightgreen', id: '3' },
          ]}
          interval={3000}
          renderItem={(item) => (
            <Box key={item.id} width='100%' height='100%' bg={item.bg} />
          )}
        />
      </Box>
    </Center>
  );
};

export default MainPage;
