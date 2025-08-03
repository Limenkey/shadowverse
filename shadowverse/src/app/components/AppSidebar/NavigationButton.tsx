import { Button } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { PATHS } from '../../providers/Router/paths.tsx';
import { APP_COLORS } from '../../../const/styles';

interface NavigationButtonProps {
  onClose?: () => void;
  path: PATHS;
  label: string;
}

export const NavigationButton = (props: NavigationButtonProps) => {
  const { label, onClose, path } = props;
  const { pathname } = useLocation();
  const isActive = pathname.includes(path);

  const NavigationButtonStyle = {
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
    <Link to={path} onClick={onClose}>
      <Button {...NavigationButtonStyle}>{label}</Button>
    </Link>
  );
};
