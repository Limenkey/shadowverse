import { Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { listItemsMock } from '../../../MainPage/mocks/listItemsMock.ts';
import { APP_COLORS } from '../../../../const/styles';

export const LibraryList = () => {
  return (
    <Flex flexWrap='wrap' gap='16px'>
      {listItemsMock.map((item) => (
        <Flex
          key={item.id}
          width='calc(50% - 8px)'
          height='256px'
          bg={APP_COLORS.cardBG}
          borderRadius='16px'
        >
          <Image
            src={item.image.url}
            alt={item.image.alt}
            minWidth='40%'
            borderLeftRadius='16px'
          />
          <Stack p='8px 16px' gap='0'>
            <Heading size='md'>{item.title}</Heading>
            <Heading
              size='s'
              textTransform='capitalize'
              color={APP_COLORS.textGray}
            >
              {`${item.type} by Ren Ravenshaw`}
            </Heading>
            <Text noOfLines={6}>{item.description}</Text>
            <Flex justifyContent='center' marginTop='auto'>
              <Button
                variant='contained'
                bg='gray.500'
                color={APP_COLORS.textWhite}
                size='sm'
                width='100%'
                _hover={{ bg: 'gray.700' }}
              >
                Read
              </Button>
            </Flex>
          </Stack>
        </Flex>
      ))}
    </Flex>
  );
};
