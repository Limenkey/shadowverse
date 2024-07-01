import { Box, Image, Stack } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import { IGalleryItem } from '../../../../types/IGalleryItem.ts';
import { EAspectRatio } from '../../../../const/options/aspectRatio.ts';

interface GalleryItemProps {
  item: IGalleryItem;
  onOpen: () => void;
}
export const GalleryItem = (props: GalleryItemProps) => {
  const { item, onOpen } = props;
  return (
    <Box
      key={item.id}
      gridColumn={
        item.aspectRatio === EAspectRatio.VERTICAL ? 'span 1' : 'span 2'
      }
      gridRow={item.aspectRatio === EAspectRatio.VERTICAL ? 'span 3' : 'span 2'}
      onClick={onOpen}
      cursor='pointer'
      position='relative'
      role='group'
    >
      <Image
        src={item.url}
        alt={`Image ${item.id}`}
        objectFit='fill'
        width='100%'
        height='100%'
        borderRadius='16px'
      />
      <Stack
        top='0'
        left='0'
        width='100%'
        height='100%'
        display='none'
        position='absolute'
        justifyContent='center'
        alignItems='center'
        zIndex='1'
        bg='rgba(0,0,0, 0.5)'
        _groupHover={{
          display: 'flex',
        }}
      >
        <ViewIcon width='40px' height='40px' />
      </Stack>
    </Box>
  );
};
