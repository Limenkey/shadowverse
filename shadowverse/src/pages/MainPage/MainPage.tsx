import { Center, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { ContentCarousel } from './components';
import { listItemsMock } from './mocks/listItemsMock.ts';
import { APP_COLORS } from '../../const/styles';

const MainPage = () => {
  return (
    <Center>
      <Stack
        height='100%'
        width='1024px'
        borderRadius='16px'
        aria-label='box'
        gap='16px'
      >
        <Heading variant='h2' color={APP_COLORS.textWhite}>
          What's new?
        </Heading>
        <ContentCarousel />
        <Flex
          justifyContent='center'
          alignItems='center'
          gap='16px'
          flexWrap='wrap'
        >
          {listItemsMock.map((item) => (
            <Stack
              key={item.id}
              width='256px'
              height='382px'
              bg={APP_COLORS.cardBG}
            >
              <Image
                src={item.image.url}
                alt={item.image.alt}
                height='50%'
                bg={APP_COLORS.textGray}
              />
              <Text color='white'>{item.description}</Text>
            </Stack>
          ))}
        </Flex>
      </Stack>
    </Center>
  );
};

export default MainPage;
