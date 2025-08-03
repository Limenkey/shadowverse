import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { APP_COLORS } from '../../../../const/styles';
import { NewsfeedItem } from '../../../../types';

interface ContentListItemProps {
  item: NewsfeedItem;
}
export const ContentListItem = (props: ContentListItemProps) => {
  const { item } = props;

  return (
    <Stack>
      <Heading size='sm' color={APP_COLORS.textGray}>
        {`New ${item.type}`}
      </Heading>
      <Stack
        key={item.id}
        width='326px'
        height='256px'
        backgroundImage={`url(${item.image.url})`}
        borderRadius='16px'
        backgroundSize='cover'
        backgroundPosition='center'
        justifyContent='flex-end'
        position='relative'
        role='group'
      >
        <Box
          display='none'
          width='100%'
          height='100%'
          position='absolute'
          zIndex='1'
          bg='rgba(26,26,28,0.5)'
          backdropFilter='blur(6px)'
          justifyContent='center'
          alignItems='center'
          cursor='pointer'
          borderRadius='16px'
          _groupHover={{
            display: 'flex',
          }}
        >
          <Text size='md'>Learn more</Text>
        </Box>
        <Box
          overflow='hidden'
          textAlign='center'
          padding='8px'
          backgroundColor='rgba(26,26,28,0.5)'
          borderBottomRadius='16px'
        >
          <Text color={APP_COLORS.textWhite} textOverflow='ellipsis'>
            {item.shortDescription}
          </Text>
        </Box>
      </Stack>
    </Stack>
  );
};
