import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import Carousel from '../../../../shared/presentation/Carousel/Carousel.tsx';
import mockImg from '../../../../assets/images/mockImg.jpg';
import mockImg2 from '../../../../assets/images/mockImg2.jpg';
import mockImg3 from '../../../../assets/images/mockImg3.png';

interface NewsfeedItem {
  id: string;
  title: string;
  type: 'announcement' | 'article' | 'story';
  image: {
    url: string;
    alt: string;
  };
  description: string;
  createdAt: string;
}

const mock: NewsfeedItem[] = [
  {
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod.',
    id: '1',
    image: {
      alt: 'picture',
      url: mockImg,
    },
    title: 'Text article',
    type: 'article',
  },
  {
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod',
    id: '2',
    image: {
      alt: 'picture',
      url: mockImg2,
    },
    title: 'Text article',
    type: 'article',
  },
  {
    createdAt: new Date().toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod',
    id: '3',
    image: {
      alt: 'picture',
      url: mockImg3,
    },
    title: 'Text article',
    type: 'article',
  },
];

export const ContentCarousel = () => {
  return (
    <Carousel
      items={mock}
      interval={3000}
      renderItem={(item) => (
        <Flex
          alignItems='center'
          height='452px'
          background='#52535c'
          shadow='md'
        >
          <Image
            src={item.image.url}
            alt={item.image.alt}
            width='40%'
            height='100%'
            bg='lightslategrey'
          />
          <Stack width='60%' height='100%' p='8px 48px 8px 24px' gap='4px'>
            <Heading size='lg' color='white'>
              {item.title}
            </Heading>
            <Heading size='m' color='lightslategrey' textTransform='capitalize'>
              {item.type}
            </Heading>
            <Text color='white'>{item.description}</Text>
            <Flex alignItems='center' justifyContent='flex-end'>
              <Text color='lightslategrey'>
                {new Date(item.createdAt).toISOString()}
              </Text>
            </Flex>
          </Stack>
        </Flex>
      )}
    />
  );
};
