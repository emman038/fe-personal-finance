import { AppLayoutConfig } from 'src/index.config';

import { MainSection, StyledContainer } from './AppLayout.styled';
import Header from '../header';

const AppLayout = ({ heading, children }: AppLayoutConfig) => {
  return (
    <StyledContainer>
      <Header heading={heading} />
      <MainSection component="main">{children}</MainSection>
    </StyledContainer>
  );
};

export default AppLayout;
