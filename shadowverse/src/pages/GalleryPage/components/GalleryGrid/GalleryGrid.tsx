import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { listItemsMock } from '../../../MainPage/mocks/listItemsMock.ts';

export const GalleryGrid = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 3, sm: 2 }}
      spacing='8px'
      gridAutoFlow='dense'
      autoRows='128px'
    >
      {listItemsMock.map((item) => (
        <Box
          key={item.id}
          gridColumn={item.image.aspectRatio === '9:16' ? 'span 1' : 'span 2'}
          gridRow={item.image.aspectRatio === '9:16' ? 'span 3' : 'span 2'}
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
      ))}
    </SimpleGrid>
  );
};
