import { Box, Image } from '@chakra-ui/react';
import { IGalleryItem } from '../../../../types/IGalleryItem.ts';
import { EAspectRatio } from '../../../../const/options/aspectRatio.ts';

interface GalleryItemProps {
  item: IGalleryItem;
}
export const GalleryItem = (props: GalleryItemProps) => {
  const { item } = props;
  return (
    <Box
      key={item.id}
      gridColumn={
        item.image.aspectRatio === EAspectRatio.VERTICAL ? 'span 1' : 'span 2'
      }
      gridRow={
        item.image.aspectRatio === EAspectRatio.VERTICAL ? 'span 3' : 'span 2'
      }
    >
      <Image
        src={item.image.url}
        alt={`Image ${item.id}`}
        objectFit='fill'
        width='100%'
        height='100%'
        borderRadius='16px'
      />
    </Box>
  );
};
