import {
  Button,
  Flex,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { SearchInput } from '../../../../shared/interaction/SearchInput';
import { BasicDropdown } from '../../../../shared/interaction/Dropdown';
import { APP_COLORS } from '../../../../const/styles';
import { sortingOptions } from '../../../../const/options/sorting.ts';
import { useGalleryFilterbarState } from '../../state/useGalleryFilterbarState.ts';

const tags = [
  {
    id: 'tall',
    label: 'Tall',
  },
  {
    id: 'wide',
    label: 'Wide',
  },
  {
    id: 'landscape',
    label: 'Landscape',
  },
  {
    id: 'character',
    label: 'Character',
  },
];

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
        <Popover size='xl'>
          <PopoverTrigger>
            <Button>Trigger</Button>
          </PopoverTrigger>
          <PopoverContent
            bg={APP_COLORS.secondaryBlack}
            border='none'
            maxWidth='1024px'
            width='100%'
          >
            <PopoverCloseButton />
            <PopoverHeader border='none'>Tags to search for</PopoverHeader>
            <PopoverBody>
              <Flex gap='8px'>
                {tags.map((tag) => (
                  <Tag
                    key={tag.id}
                    borderRadius='16px'
                    bg={APP_COLORS.secondaryBlack}
                    px='16px'
                  >
                    <TagLabel>{tag.label}</TagLabel>
                  </Tag>
                ))}
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <BasicDropdown
          trigger={
            <Button
              height='32px'
              px='8px'
              variant='ghost'
              _hover={{
                bg: APP_COLORS.primaryGray,
              }}
              bg={APP_COLORS.secondaryBlack}
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
