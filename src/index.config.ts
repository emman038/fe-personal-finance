import { ReactElement, ReactNode } from 'react';
import React from 'react';

import { SvgIconComponent } from '@mui/icons-material';

export const pageType = {
  HOME_PAGE: 'HOME_PAGE',
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
} as const;

export type PageTypeKeys = keyof typeof pageType;

export type RoutesConfig = AppRouteConfig & {
  path: string;
};

export type AppRouteConfig = {
  render: () => ReactElement;
};

export type ActiveTabConfig = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export type ThemeContextProviderConfig = {
  theme: ThemeConfig;
  setTheme: React.Dispatch<React.SetStateAction<ThemeConfig>>;
};

export type AppLayoutConfig = {
  heading: string;
  children: ReactNode;
};

export type ActionMenuConfig = {
  actionMenuContent: ActionMenuContentConfig;
  isSideMenu?: boolean;
};

type ThemeOption = 'light';

export interface ThemeConfig {
  bgColor: string;
  avatarBgColor: string;
}

export type ThemeMapping = {
  [key in ThemeOption]: ThemeConfig;
};

export type ActionMenuContentConfig = {
  title?: 'EDIT' | 'CREATE';
  menuItems: ActionOption[];
  Icon: SvgIconComponent;
};

export type ActionOption = { Icon?: SvgIconComponent; title: string };

export type EntryContent = {
  heading: string;
  graphContent: GraphContent;
};

export type GraphContent = {
  graphTitle: string;
  graphLabels: string[];
};
