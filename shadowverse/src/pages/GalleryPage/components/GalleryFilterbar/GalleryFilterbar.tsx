import { Box, Button, Flex, Stack } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { SearchInput } from '../../../../shared/interaction/SearchInput';
import { BasicDropdown } from '../../../../shared/interaction/Dropdown';
import { APP_COLORS } from '../../../../const/styles';
import { sortingOptions } from '../../../../const/options/sorting.ts';
import { useGalleryFilterbarState } from '../../state/useGalleryFilterbarState.ts';

export const GalleryFilterbar = () => {
  const { search, setSearch, setSorting, sorting } = useGalleryFilterbarState();

  return (
    <Stack gap='16px'>
      <SearchInput
        placeholder='What are you looking for?'
        value={search}
        onChange={setSearch}
      />
      <Flex justifyContent='space-between' alignItems='center'>
        <Box />
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
  );
};
