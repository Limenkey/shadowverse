import { Center, Heading, Stack } from '@chakra-ui/react';
import { ContentCarousel } from './components';

const MainPage = () => {
  return (
    <Center>
      <Stack
        height='100%'
        width='70%'
        borderRadius='16px'
        aria-label='box'
        gap='16px'
      >
        <Heading variant='h2' color='white'>
          What's new?
        </Heading>
        <ContentCarousel />
      </Stack>
    </Center>
  );
};

export default MainPage;
