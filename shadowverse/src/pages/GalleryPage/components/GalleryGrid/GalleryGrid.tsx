import { SimpleGrid } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { ImageViewer } from '../../../../shared/presentation/ImageViewer';
import { GalleryItem } from '../GalleryItem/GalleryItem.tsx';
import { mockGalleryData } from '../../mock/mockGalleryData.ts';

export const GalleryGrid = () => {
  const data = mockGalleryData;
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const selectedItem = useMemo(
    () => data.find((el) => el.id === selectedImageId),
    [selectedImageId],
  );

  const openImageViewer = (id: string) => {
    setSelectedImageId(id);
  };

  const closeImageViewer = () => {
    setSelectedImageId(null);
  };

  const showNextImage = () => {
    if (selectedImageId) {
      setSelectedImageId(
        (prevId) =>
          data[(data.findIndex((el) => el.id === prevId) + 1) % data.length].id,
      );
    }
  };

  const showPrevImage = () => {
    if (selectedImageId) {
      setSelectedImageId(
        (prevId) =>
          data[(data.findIndex((el) => el.id === prevId) - 1) % data.length].id,
      );
    }
  };

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 3, sm: 2 }}
        spacing='8px'
        gridAutoFlow='dense'
        autoRows='128px'
      >
        {data.map((item) => (
          <GalleryItem
            key={item.id}
            item={item}
            onOpen={() => openImageViewer(item.id)}
          />
        ))}
      </SimpleGrid>

      {selectedItem && (
        <ImageViewer
          isOpen={!!selectedImageId}
          onClose={closeImageViewer}
          item={selectedItem}
          onPrev={showPrevImage}
          onNext={showNextImage}
          count={data.length}
          currIdx={data.findIndex((el) => el.id === selectedImageId)}
        />
      )}
    </>
  );
};
