import {
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { NewsfeedItem } from '../../../../types';
import { APP_COLORS } from '../../../../const/styles';

interface LibraryListItemProps {
  item: NewsfeedItem;
  onRead: () => void;
}
export const LibraryListItem = (props: LibraryListItemProps) => {
  const { item, onRead } = props;

  return (
    <Flex
      key={item.id}
      bg={APP_COLORS.secondaryBlack}
      borderRadius='16px'
      width='48%'
      gap='0'
    >
      <Image
        src={item.image.url}
        alt={item.image.alt}
        height='256px'
        minWidth='40%'
        borderRadius='16px'
      />

      <Stack p='8px 16px' gap='4px' justifyContent='space-between'>
        <Heading size='md'>{item.title}</Heading>
        <Heading
          size='sm'
          textTransform='capitalize'
          color={APP_COLORS.textGray}
        >
          {`${item.type} by Ren Ravenshaw`}
        </Heading>
        <Tooltip
          placement='auto'
          hasArrow
          label={item.description}
          borderRadius='4px'
        >
          <Text fontSize='xs' noOfLines={7}>
            {item.description}
          </Text>
        </Tooltip>
        <Flex justifyContent='center' marginTop='auto' gap='16px'>
          <Button
            variant='contained'
            bg={APP_COLORS.accentPink}
            color={APP_COLORS.textWhite}
            size='sm'
            width='100%'
            _hover={{ bg: APP_COLORS.accentYellow }}
            onClick={onRead}
          >
            Read
          </Button>
          <IconButton
            bg='none'
            _hover={{ bg: APP_COLORS.accentYellow }}
            size='sm'
            aria-label={`download-${item.id}`}
            icon={<DownloadIcon />}
          />
        </Flex>
      </Stack>
    </Flex>
  );
};
