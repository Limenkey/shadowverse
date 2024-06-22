import { Flex } from '@chakra-ui/react';
import { SelectableTag } from '../../presentation/SelectableTag';

interface SingleTagSelectorProps<T extends string> {
  items: {
    id: T;
    label: string;
  }[];
  value: string;
  onChange: (value: T) => void;
}
export const SingleTagSelector = <T extends string>(
  props: SingleTagSelectorProps<T>,
) => {
  const { items, onChange, value } = props;
  return (
    <Flex gap='16px'>
      {items.map((el) => (
        <SelectableTag
          label={el.label}
          isActive={value === el.id}
          onClick={() => onChange(el.id)}
          key={el.id}
        />
      ))}
    </Flex>
  );
};
