import { Tag, TagLabel } from '@chakra-ui/react';
import { APP_COLORS } from '../../../const/styles';

interface TagProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const SelectableTag = (props: TagProps) => {
  const { isActive, label, onClick } = props;
  return (
    <Tag
      px='24px'
      size='lg'
      key='1'
      borderRadius='full'
      variant='solid'
      bg={isActive ? APP_COLORS.accentPink : APP_COLORS.secondaryBlack}
      color={APP_COLORS.textWhite}
      cursor='pointer'
      _hover={{
        bg: isActive ? APP_COLORS.accentPink : APP_COLORS.primaryGray,
      }}
      onClick={onClick}
    >
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
};
