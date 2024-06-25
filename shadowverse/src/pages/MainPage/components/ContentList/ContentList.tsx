import { Flex, Stack } from '@chakra-ui/react';
import { NewsfeedItem } from '../../../../types';
import { ContentListItem } from './ContentListItem.tsx';

interface ContentListProps {
  items: NewsfeedItem[];
}
export const ContentList = (props: ContentListProps) => {
  const { items } = props;
  return (
    <Flex
      justifyContent='flex-start'
      alignItems='center'
      gap='16px'
      flexWrap='wrap'
      maxHeight='calc(100% - 510px)'
      pb='16px'
    >
      {items.map((item) => (
        <ContentListItem key={item.id} item={item} />
      ))}
    </Flex>
  );
};
