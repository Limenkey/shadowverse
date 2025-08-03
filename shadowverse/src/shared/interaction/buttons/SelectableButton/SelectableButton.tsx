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
      color: isActive
        ? APP_COLORS.secondaryBlack
        : APP_COLORS.accentPink,
    },
    bg: isActive ? APP_COLORS.accentPink : 'inherit',
    color: isActive ? APP_COLORS.secondaryBlack : APP_COLORS.textWhite,
    borderColor: isActive ? APP_COLORS.accentYellow : undefined,
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
