import { Button } from '@chakra-ui/react';
import React from 'react';
import { APP_COLORS } from '../../../../const/styles';

interface SelectableButtonProps {
  label: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const SelectableButton = (props: SelectableButtonProps) => {
  const { isActive, label, onClick } = props;

  const SelectableButtonStyle = {
    _hover: {
      color: isActive ? APP_COLORS.textWhite : 'blue.200',
    },
    bg: isActive ? APP_COLORS.activeGray : 'inherit',
    borderColor: isActive ? 'blue.500' : undefined,
    borderRadius: '8px',
    justifyContent: 'flex-start',
    pl: '0',
    px: '8px',
    variant: 'text',
    width: '100%',
  };

  return (
    <Button {...SelectableButtonStyle} onClick={onClick}>
      {label}
    </Button>
  );
};
