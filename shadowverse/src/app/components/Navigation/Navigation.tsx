import {
  Box,
  Circle,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import paths from '../../providers/Router/paths.tsx';
import { NavigationButton } from './NavigationButton.tsx';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  return (
    <>
      <Circle
        size='48px'
        bg='lightslategrey'
        position='absolute'
        top='8px'
        left='16px'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap='4px'
        onClick={onOpen}
      >
        <Box width='24px' height='3px' bg='gray.300' />
        <Box width='24px' height='3px' bg='gray.300' />
        <Box width='24px' height='3px' bg='gray.300' />
      </Circle>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg='#24252b' color='white'>
          <DrawerHeader
            borderBottomWidth='1px'
            borderColor='blue.500'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Heading>IMC</Heading>
            <IconButton
              icon={<CloseIcon width='20px' height='20px' />}
              aria-label='closeMenuBtn'
              onClick={onClose}
              borderRadius='50%'
              bg='transparent'
              color='white'
              _hover={{ bg: 'transparent', color: 'gray.300' }}
            />
          </DrawerHeader>
          <DrawerBody>
            <Stack>
              {paths.map(({ label, path }) => (
                <NavigationButton
                  key={path}
                  onClose={onClose}
                  path={path}
                  label={label}
                />
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
