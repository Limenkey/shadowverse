import { PropsWithChildren } from 'react';
import { Center, Flex, Heading, Stack } from '@chakra-ui/react';

interface PageTemplateProps {
  title: string;
}

export const PageTemplate = (props: PropsWithChildren<PageTemplateProps>) => {
  const { children, title } = props;
  return (
    <Stack minWidth='1024px' maxWidth='1024px' flexGrow={1}>
      <Stack
        borderRadius='16px'
        aria-label='box'
        gap='16px'
        pb='16px'
        minWidth='100%'
        maxWidth='100%'
        flexGrow={1}
      >
        <Flex
          height='60px'
          justifyContent='center'
          alignItems='center'
          width='100%'
          minWidth='100%'
        >
          <Heading size='lg' textAlign='center'>
            {title}
          </Heading>
        </Flex>
        {children}
      </Stack>
    </Stack>
  );
};
