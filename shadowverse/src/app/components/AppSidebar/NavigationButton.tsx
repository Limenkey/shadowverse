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
    <Link to={path} onClick={onClose}>
      <Button {...NavigationButtonStyle}>{label}</Button>
    </Link>
  );
};
