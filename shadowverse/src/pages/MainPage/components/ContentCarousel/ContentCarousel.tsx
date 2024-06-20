import { Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import Carousel from '../../../../shared/presentation/Carousel/Carousel.tsx';
import { listItemsMock } from '../../mocks/listItemsMock.ts';
import { APP_COLORS } from '../../../../const/styles';

export const ContentCarousel = () => {
  return (
    <Carousel
      items={listItemsMock}
      interval={3000}
      renderItem={(item) => (
        <Flex
          alignItems='center'
          height='452px'
          background={APP_COLORS.cardBG}
          shadow='md'
        >
          <Image
            src={item.image.url}
            alt={item.image.alt}
            width='40%'
            height='100%'
          />
          <Stack
            justifyContent='space-between'
            width='60%'
            height='100%'
            p='8px 48px 16px 48px'
            gap='4px'
          >
            <Stack>
              <Heading
                size='m'
                color={APP_COLORS.textGray}
                textTransform='uppercase'
                mb='4px'
              >
                {item.type}
              </Heading>
              <Heading size='lg' color={APP_COLORS.textWhite}>
                {item.title}
              </Heading>

              <Text color={APP_COLORS.textWhite}>{item.description}</Text>
            </Stack>
            <Flex alignItems='center' justifyContent='center'>
              <Button
                variant='contained'
                bg='gray.500'
                color={APP_COLORS.textWhite}
                size='lg'
                width='100%'
                _hover={{ bg: 'gray.700' }}
              >
                Learn more
              </Button>
            </Flex>
          </Stack>
        </Flex>
      )}
    />
  );
};
