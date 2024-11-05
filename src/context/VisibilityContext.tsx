import React, { ReactNode, useContext, useState, useEffect } from 'react';

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
  const [api_Key, setApiKey] = useState<string>('');

  useEffect(() => {
    let storedApiKey = localStorage.getItem('tmp::voice_api_key');

    if (!storedApiKey) {
      storedApiKey = prompt('OpenAI API Key:') || '';
      if (storedApiKey) {
        localStorage.setItem('tmp::voice_api_key', storedApiKey);
      }
    }
    setApiKey(storedApiKey || '');
  }, []);

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
