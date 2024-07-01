import { PropsWithChildren } from 'react';
import { Flex, Heading, Stack } from '@chakra-ui/react';
import { APP_COLORS } from '../../../const/styles';

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
        minWidth='100%'
        maxWidth='100%'
        flexGrow={1}
        overflow='auto'
        height='100%'
        position='relative'
        p='4px'
      >
        <Flex
          position='fixed'
          zIndex='2'
          bg={APP_COLORS.mainBgGray}
          height='60px'
          justifyContent='center'
          alignItems='center'
          width='calc(100% - 280px)'
          top='0'
          left='280px'
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
