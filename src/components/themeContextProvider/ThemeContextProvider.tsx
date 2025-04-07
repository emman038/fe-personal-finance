import { createContext, ReactNode, useState } from 'react';

import { ThemeConfig, ThemeContextProviderConfig } from 'src/index.config';
import { themeMapping } from 'src/theme';
import { ThemeProvider } from 'styled-components';

export const ThemeContext = createContext<
  ThemeContextProviderConfig | undefined
>(undefined);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeConfig>(themeMapping.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
