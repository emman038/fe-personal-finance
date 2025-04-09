import 'styled-components';
import { ThemeConfig } from '../src/index.config';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeConfig {}
}
