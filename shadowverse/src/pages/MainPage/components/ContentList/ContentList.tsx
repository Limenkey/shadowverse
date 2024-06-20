import { Flex, Heading, Stack } from '@chakra-ui/react';
import { NewsfeedItem } from '../../../../types';
import { ContentListItem } from './ContentListItem.tsx';

interface ContentListProps {
  items: NewsfeedItem[];
}
export const ContentList = (props: ContentListProps) => {
  const { items } = props;
  return (
    <Stack>
      <Heading size='lg' textAlign='center'>
        What's new
      </Heading>
      <Flex
        justifyContent='flex-start'
        alignItems='center'
        gap='16px'
        flexWrap='wrap'
      >
        {items.map((item) => (
          <ContentListItem item={item} />
        ))}
      </Flex>
    </Stack>
  );
};
