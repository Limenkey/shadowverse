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
      <Flex
        justifyContent='flex-start'
        alignItems='center'
        gap='16px'
        flexWrap='wrap'
      >
        {items.map((item) => (
          <ContentListItem key={item.id} item={item} />
        ))}
      </Flex>
    </Stack>
  );
};
