import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { APP_COLORS } from '../../../const/styles';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}
export const SearchInput = (props: SearchInputProps) => {
  const { onChange, placeholder, value } = props;
  return (
    <InputGroup>
      <InputLeftElement>
        <SearchIcon />
      </InputLeftElement>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        width='100%'
        bg={APP_COLORS.cardBG}
        borderColor='transparent'
        borderTopRadius='4px'
        borderBottomRadius='4px'
        color={APP_COLORS.textWhite}
        _placeholder={{
          color: APP_COLORS.textGray,
        }}
      />
    </InputGroup>
  );
};
