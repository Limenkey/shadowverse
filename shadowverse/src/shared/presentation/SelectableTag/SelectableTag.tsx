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
      bg={isActive ? APP_COLORS.activeBlue : APP_COLORS.cardBG}
      color={APP_COLORS.textWhite}
      cursor='pointer'
      _hover={{
        bg: isActive ? APP_COLORS.activeBlue : 'gray.600',
      }}
      onClick={onClick}
    >
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
};
