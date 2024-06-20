import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { APP_COLORS } from '../../../const/styles';
import paths from '../../providers/Router/paths.tsx';
import { NavigationButton } from './NavigationButton.tsx';

interface NavigationDrawerProps {
  onClose: () => void;
  isOpen: boolean;
}

export const NavigationDrawer = (props: NavigationDrawerProps) => {
  const { isOpen, onClose } = props;

  return (
    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bg={APP_COLORS.modalGray} color='white'>
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
            color={APP_COLORS.textWhite}
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
  );
};
