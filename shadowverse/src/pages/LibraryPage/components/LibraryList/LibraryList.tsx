import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { listItemsMock } from '../../../MainPage/mocks/listItemsMock.ts';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Reader } from '../../../../shared/presentation/Reader';
import { LibraryListItem } from '../LibraryListItem';

export const LibraryList = () => {
  const [file, setFile] = useState<{
    url: string;
    title: string;
  } | null>(null);

  return (
    <Flex flexWrap='wrap' gap='16px' paddingBottom='16px'>
      {listItemsMock.map((item) => (
        <LibraryListItem
          item={item}
          onRead={() =>
            setFile({
              title: item.title,
              url: item.file || '',
            })
          }
        />
      ))}
      {file && (
        <Reader
          url={file.url}
          title={file.title}
          isOpen
          onClose={() => setFile(null)}
        />
      )}
    </Flex>
  );
};
