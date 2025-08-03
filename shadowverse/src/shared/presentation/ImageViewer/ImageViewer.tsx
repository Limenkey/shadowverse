import {
  Flex,
  Heading,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, InfoIcon } from '@chakra-ui/icons';
import { IGalleryItem } from '../../../types/IGalleryItem.ts';
import { APP_COLORS } from '../../../const/styles';

interface ImageViewerProps {
  isOpen: boolean;
  onClose: () => void;
  item: IGalleryItem;
  onPrev: () => void;
  onNext: () => void;
  count?: number;
  currIdx: number;
}

export const ImageViewer = (props: ImageViewerProps) => {
  const { count, currIdx, isOpen, item, onClose, onNext, onPrev } = props;

  const { alt, description, title, url } = item;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='full' autoFocus={false}>
      <ModalOverlay bg={`${APP_COLORS.secondaryBlack}CC`} />
      <ModalContent
        justifyContent='center'
        alignItems='center'
        bg={`${APP_COLORS.secondaryBlack}CC`}
      >
        <ModalCloseButton
          _hover={{
            bg: APP_COLORS.primaryGray,
          }}
        />
        <ModalHeader>
          <Flex
            alignItems='center'
            justifyContent='center'
            gap='8px'
            cursor='pointer'
          >
            <Heading textAlign='center' size='md'>
              {title}
            </Heading>
            <Tooltip label={description}>
              <InfoIcon width='16px' height='16px' />
            </Tooltip>
          </Flex>
          {!!count && (
            <Heading size='sm' color={APP_COLORS.textGray} textAlign='center'>
              {`${Number(currIdx) + 1}/${count}`}
            </Heading>
          )}
        </ModalHeader>
        <ModalBody
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexGrow={0}
        >
          <Flex alignItems='center'>
            <IconButton
              icon={<ChevronLeftIcon />}
              aria-label='Previous Image'
              onClick={onPrev}
              mr={2}
              bg={`${APP_COLORS.secondaryBlack}CC`}
              _hover={{
                bg: APP_COLORS.primaryGray,
              }}
            />
            <Image
              src={url}
              alt={alt}
              maxH='80vh'
              maxW='80vw'
              objectFit='contain'
              borderRadius='16px'
            />
            <IconButton
              icon={<ChevronRightIcon />}
              aria-label='Next Image'
              onClick={onNext}
              ml={2}
              bg={`${APP_COLORS.secondaryBlack}CC`}
              _hover={{
                bg: APP_COLORS.primaryGray,
              }}
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
