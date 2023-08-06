import { useState } from 'react';

const useDrawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return {
    isDrawerOpen,
    toggleDrawer,
  };
};

export default useDrawer;