import { Box, Typography } from '@mui/material';
import { createMenu, editMenu } from 'src/content';

import Menu from '../menu';

const Header = ({ heading }: { heading: string }) => {
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <Box flex={1} display="flex" justifyContent="center" alignItems="center">
        <Menu actionMenuContent={createMenu} />
      </Box>

      <Box flex={2} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h2">{heading}</Typography>
      </Box>

      <Box flex={1} display="flex" justifyContent="center" alignItems="center">
        <Menu actionMenuContent={editMenu} />
      </Box>
    </Box>
  );
};

export default Header;
