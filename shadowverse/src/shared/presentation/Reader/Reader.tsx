import { Document, Page } from 'react-pdf';
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';

import './Reader.css';
import { APP_COLORS } from '../../../const/styles';

interface ReaderProps {
  title: string;
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Reader = (props: ReaderProps) => {
  const { isOpen, onClose, title, url } = props;
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const onDocumentLoadSuccess = useCallback(
    ({ numPages: num }: { numPages: number }) => {
      setNumPages(num);
    },
    [],
  );

  const goToPrevPage = useCallback(() => {
    setPageNumber((prevPageNumber) =>
      prevPageNumber > 1 ? prevPageNumber - 1 : 1,
    );
  }, []);

  const goToNextPage = useCallback(() => {
    setPageNumber((prevPageNumber) =>
      prevPageNumber < numPages! ? prevPageNumber + 1 : numPages!,
    );
  }, [numPages]);

  const handlePageClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const { clientX } = event;
    const { innerWidth } = window;

    if (clientX < innerWidth / 2) {
      goToPrevPage();
    } else {
      goToNextPage();
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    setTouchStart(touch.clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    const touchEnd = touch.clientX;

    if (Number(touchStart) - touchEnd > 75) {
      goToNextPage();
    }

    if (Number(touchStart) - touchEnd < -75) {
      goToPrevPage();
    }
  };

  // Iphone Scale - 0.55 size 100%

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl'>
      <ModalOverlay />
      <ModalContent width='auto' margin='auto' className='ModalContainer'>
        <ModalHeader
          position='relative'
          zIndex={1}
          color='black'
          textAlign='center'
          borderBottom='1px solid'
          borderColor='gray.300'
          width='100%'
          py='8px'
        >
          {title}
        </ModalHeader>
        <ModalCloseButton
          sx={{
            '& > svg > path': {
              color: APP_COLORS.modalBgGray,
            },
          }}
          onClick={onClose}
          zIndex='2'
        />
        <ModalBody
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          onClick={handlePageClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          p='0'
          pb='16px'
          boxSizing='border-box'
          flexGrow={1}
          bg='white'
          width='100%'
          height='100%'
          overflow='hidden'
        >
          <Box className='PdfContainer'>
            <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                className='Page'
                pageNumber={pageNumber}
                pageIndex={pageNumber}
                scale={1}
              />
            </Document>
          </Box>
        </ModalBody>
        <ModalFooter
          pt='0'
          borderTop='1px solid'
          borderColor='gray.300'
          position='relative'
          zIndex='2'
          width='100%'
        >
          <Flex className='page-controls'>
            <Button size='sm' onClick={goToPrevPage} disabled={pageNumber <= 1}>
              Previous
            </Button>
            <Text lineHeight='32px' color='gray.500' textAlign='center'>
              Page {pageNumber} of {numPages}
            </Text>
            <Button
              size='sm'
              onClick={goToNextPage}
              disabled={pageNumber >= numPages!}
            >
              Next
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
