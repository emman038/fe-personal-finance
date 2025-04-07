import { Box } from '@mui/material';
import { AppLayoutConfig } from 'src/index.config';

import { StyledContainer } from './AppLayout.styled';
import Header from '../header';

const AppLayout = ({ heading, children }: AppLayoutConfig) => {
  return (
    <StyledContainer>
      <Header heading={heading} />
      <Box>{children}</Box>
    </StyledContainer>
  );
};

export default AppLayout;
