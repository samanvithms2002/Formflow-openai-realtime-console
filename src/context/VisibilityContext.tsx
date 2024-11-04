import React, { ReactNode, useContext, useState } from 'react';

interface VisibilityContextType {
  showConsolePage: boolean;
  handleStart: () => void;
  api_Key: string;
}

const VisibilityContext = React.createContext<VisibilityContextType>({
  showConsolePage: false,
  handleStart: () => {},
  api_Key: '',
});

interface VisibilityProviderProps {
  children: ReactNode;
}

const VisibilityProvider: React.FC<VisibilityProviderProps> = ({
  children,
}) => {
  const [showConsolePage, setShowConsolePage] = useState(false);
  const [api_Key] = useState('');

  const handleStart = () => {
    setShowConsolePage(true);
  };

  return (
    <VisibilityContext.Provider
      value={{ showConsolePage, handleStart, api_Key }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

const useVisibility = () => useContext(VisibilityContext);

export { VisibilityProvider, useVisibility };
