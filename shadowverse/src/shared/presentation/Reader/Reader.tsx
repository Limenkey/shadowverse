import { Document, Page } from 'react-pdf';
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';

import './Reader.css';
import { APP_COLORS } from '../../../const/styles';

interface ReaderProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Reader = (props: ReaderProps) => {
  const { isOpen, onClose, url } = props;
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
  // Ipad

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        minWidth='80%'
        minHeight='100%%'
        maxWidth='80%'
        maxHeight='100%'
        margin='auto'
        className='ModalContainer'
      >
        <ModalHeader
          position='relative'
          zIndex={1}
          color='black'
          textAlign='center'
          borderBottom='1px solid'
          borderColor='gray.300'
          marginBottom='-32px'
        >
          Reader
          <Box color='gray.500' textAlign='center'>
            Page {pageNumber} of {numPages}
          </Box>
        </ModalHeader>
        <ModalCloseButton
          sx={{
            '& > svg > path': {
              color: APP_COLORS.modalBgGray,
            },
          }}
          onClick={onClose}
        />
        <ModalBody
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          onClick={handlePageClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Box>
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
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
