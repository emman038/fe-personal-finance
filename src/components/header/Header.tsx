import { Box } from '@mui/material';
import { createMenu, editMenu } from 'src/content';

import Menu from '../menu';
import { PageTitle } from './Header.styled';

const Header = ({ heading }: { heading: string }) => {
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <Box flex={1} display="flex" justifyContent="center" alignItems="center">
        <Menu actionMenuContent={createMenu} />
      </Box>

      <Box flex={2} display="flex" justifyContent="center" alignItems="center">
        <PageTitle variant="h2">{heading}</PageTitle>
      </Box>

      <Box flex={1} display="flex" justifyContent="center" alignItems="center">
        <Menu actionMenuContent={editMenu} />
      </Box>
    </Box>
  );
};

export default Header;
