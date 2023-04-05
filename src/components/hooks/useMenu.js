import { useState } from 'react';

const useMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  return { showMenu, handleToggleMenu, handleClose };
};

export default useMenu;
