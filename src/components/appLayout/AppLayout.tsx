import { Box, Typography } from '@mui/material';
import { editMenu } from 'src/content';
import { AppLayoutConfig } from 'src/index.config';

import { StyledContainer } from './AppLayout.styled';
import Menu from '../menu';

const AppLayout = ({ heading, children }: AppLayoutConfig) => {
  return (
    <StyledContainer>
      <Box display="flex" alignItems="center" gap={2}>
        <Typography variant="h2">{heading}</Typography>
        <Menu actionMenuContent={editMenu} />
      </Box>
      <Box>{children}</Box>
    </StyledContainer>
  );
};

export default AppLayout;
