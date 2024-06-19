import { Button } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { PATHS } from '../../providers/Router/paths.tsx';

interface NavigationButtonProps {
  onClose: () => void;
  path: PATHS;
  label: string;
}

export const NavigationButton = (props: NavigationButtonProps) => {
  const { label, onClose, path } = props;
  const { pathname } = useLocation();
  const isActive = path === pathname;

  const NavigationButtonStyle = {
    _hover: {
      color: isActive ? 'blue.500' : 'blue.200',
    },
    borderBottom: isActive ? '1px solid' : undefined,
    borderColor: isActive ? 'blue.500' : undefined,
    borderRadius: 'none',
    color: isActive ? 'blue.500' : 'white',
    justifyContent: 'flex-start',
    pl: '0',
    variant: 'text',
  };

  return (
    <Link to={path} onClick={onClose}>
      <Button {...NavigationButtonStyle}>{label}</Button>
    </Link>
  );
};
