import { AppLayoutConfig } from 'src/index.config';

import { MainSection, PageContainer } from './AppLayout.styled';
import Header from '../header';

const AppLayout = ({ heading, children }: AppLayoutConfig) => {
  return (
    <PageContainer>
      <Header heading={heading} />
      <MainSection component="main">{children}</MainSection>
    </PageContainer>
  );
};

export default AppLayout;
