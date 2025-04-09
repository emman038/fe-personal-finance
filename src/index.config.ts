import { ReactElement } from 'react';
import React from 'react';

import { SvgIconComponent } from '@mui/icons-material';

export const pageType = {
  HOME_PAGE: 'HOME_PAGE',
  INCOME: 'INCOME',
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
  children: ReactElement;
};

export type ActionMenuConfig = {
  actionMenuContent: ActionMenuContentConfig;
  isSideMenu?: boolean;
};

type ThemeOption = 'light';

export type ThemeConfig = {
  bgColor: string;
  avatarBgColor: string;
};

export type ThemeMapping = {
  [key in ThemeOption]: ThemeConfig;
};

export type ActionMenuContentConfig = {
  title?: 'EDIT' | 'ADD';
  menuItems: ActionOption[];
  Icon: SvgIconComponent;
};

export type ActionOption = { Icon?: SvgIconComponent; title: string };
