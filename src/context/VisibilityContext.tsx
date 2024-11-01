import React, { ReactNode, useContext, useState } from 'react';

interface VisibilityContextType {
  showConsolePage: boolean;
  handleStart: () => void;
}

const VisibilityContext = React.createContext<VisibilityContextType>({
  showConsolePage: false,
  handleStart: () => {},
});

interface VisibilityProviderProps {
  children: ReactNode;
}

const VisibilityProvider: React.FC<VisibilityProviderProps> = ({
  children,
}) => {
  const [showConsolePage, setShowConsolePage] = useState(false);

  const handleStart = () => {
    setShowConsolePage(true);
  };

  return (
    <VisibilityContext.Provider value={{ showConsolePage, handleStart }}>
      {children}
    </VisibilityContext.Provider>
  );
};

const useVisibility = () => useContext(VisibilityContext);

export { VisibilityProvider, useVisibility };
