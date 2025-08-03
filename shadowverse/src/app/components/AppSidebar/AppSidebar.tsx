import { Flex, Heading, Stack } from '@chakra-ui/react';
import { navigationPaths } from '../../providers/Router/paths.tsx';
import { NavigationButton } from './NavigationButton.tsx';
import { APP_COLORS } from '../../../const/styles';

export const AppSidebar = () => {
  return (
    <Stack
      position='fixed'
      top='0'
      left='0'
      width='256px'
      gap='8px'
      bg={APP_COLORS.secondaryBlack}
      height='100%'
      zIndex='2'
    >
      <Flex
        borderBottomWidth='1px'
        borderColor={APP_COLORS.accentPink}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        p='8px 24px'
      >
        <Heading>IMC</Heading>
      </Flex>
      <Stack padding='24px'>
        {navigationPaths.map(({ label, path }) => (
          <NavigationButton key={path} path={path} label={label} />
        ))}
      </Stack>
    </Stack>
  );
};
