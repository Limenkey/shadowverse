import { useState } from 'react';
import { NavigationDrawer } from './NavigationDrawer.tsx';
import { NavigationMenuButton } from './NavigationMenuButton.tsx';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  return (
    <>
      <NavigationMenuButton onOpen={onOpen} />
      <NavigationDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
};
