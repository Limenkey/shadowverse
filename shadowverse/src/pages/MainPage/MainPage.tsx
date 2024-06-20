import { Center, Stack } from '@chakra-ui/react';
import { ContentCarousel, ContentList } from './components';
import { listItemsMock } from './mocks/listItemsMock.ts';

const MainPage = () => {
  return (
    <Center maxWidth='1024px'>
      <Stack
        borderRadius='16px'
        aria-label='box'
        gap='16px'
        pb='16px'
        maxWidth='100%'
      >
        <ContentCarousel />
        <ContentList items={listItemsMock} />
      </Stack>
    </Center>
  );
};

export default MainPage;
