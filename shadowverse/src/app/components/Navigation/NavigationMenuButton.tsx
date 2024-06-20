import { Box, Circle } from '@chakra-ui/react';
import { APP_COLORS } from '../../../const/styles';

interface NavigationMenuButtonProps {
  onOpen: () => void;
}

export const NavigationMenuButton = (props: NavigationMenuButtonProps) => {
  const { onOpen } = props;

  return (
    <Circle
      size='48px'
      bg={APP_COLORS.textGray}
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
  );
};
