import { Flex, Heading, Stack } from '@chakra-ui/react';
import paths from '../../providers/Router/paths.tsx';
import { NavigationButton } from './NavigationButton.tsx';

export const AppSidebar = () => {
  return (
    <Stack
      position='fixed'
      top='0'
      left='0'
      width='256px'
      gap='8px'
      bg='#1a1b20'
      height='100%'
    >
      <Flex
        borderBottomWidth='1px'
        borderColor='blue.500'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        p='8px 24px'
      >
        <Heading>IMC</Heading>
      </Flex>
      <Stack padding='24px'>
        {paths.map(({ label, path }) => (
          <NavigationButton key={path} path={path} label={label} />
        ))}
      </Stack>
    </Stack>
  );
};
