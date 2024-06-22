import { Box, Button, Flex, Input, Stack } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { APP_COLORS } from '../../../../const/styles';
import { SingleTagSelector } from '../../../../shared/interaction/SingleTagSelector';
import { BasicDropdown } from '../../../../shared/interaction/Dropdown';
import type { ISelectItem } from '../../../../types/generics';
import { useLibraryFilterbarState } from '../../state/useLibraryFilterbarState.ts';
import { TItemType, TSortingType } from '../../types/libraryFilterbarTypes.ts';

const sortingOptions: ISelectItem<TSortingType>[] = [
  {
    id: 'desc',
    label: 'Newer first',
  },
  {
    id: 'asc',
    label: 'Older first',
  },
];

const filterOptions: ISelectItem<TItemType>[] = [
  {
    id: 'all',
    label: 'All',
  },
  {
    id: 'stories',
    label: 'Stories',
  },
  {
    id: 'articles',
    label: 'Articles',
  },
];

export const LibraryFilterbar = () => {
  const { itemType, search, setItemType, setSearch, setSorting, sorting } =
    useLibraryFilterbarState();
  return (
    <Box>
      <Stack px='128px' gap='16px'>
        <Input
          placeholder='What are you looking for?'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          width='100%'
          bg={APP_COLORS.cardBG}
          borderColor='transparent'
          color={APP_COLORS.textWhite}
          _placeholder={{
            color: APP_COLORS.textGray,
          }}
        />
        <Flex justifyContent='space-between' alignItems='center'>
          <SingleTagSelector
            items={filterOptions}
            value={itemType}
            onChange={(val) => setItemType(val)}
          />
          <BasicDropdown
            trigger={
              <Button
                height='32px'
                px='8px'
                variant='ghost'
                _hover={{
                  bg: 'gray.600',
                }}
                bg={APP_COLORS.cardBG}
              >
                <ArrowUpIcon width='12px' height='16px' mr='-2px' />
                <ArrowDownIcon width='12px' height='16px' />
              </Button>
            }
            items={sortingOptions}
            value={sorting}
            bodyWidth='192px'
            placement='bottom-end'
            onChange={(val) => setSorting(val)}
          />
        </Flex>
      </Stack>
    </Box>
  );
};
