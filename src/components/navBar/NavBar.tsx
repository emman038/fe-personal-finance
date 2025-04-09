import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { sideMenu } from 'src/content/ActionMenuContent';
import { useTheme } from 'src/hooks';

import SideMenu from '../menu';
import NavigationTabs from '../navigationTabs';
import UserMenu from '../userMenu';

function NavBar() {
  const { theme } = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        top: '0.5rem',
        left: '0.5rem',
        right: '0.5rem',
        width: 'calc(100% - 1rem)',
        borderRadius: '10px',
        bgcolor: theme.bgColor,
      }}
    >
      <Container maxWidth="xl" sx={{ display: 'flex', p: '0' }}>
        <Toolbar disableGutters sx={{ width: '100%' }}>
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <SideMenu actionMenuContent={sideMenu} isSideMenu={true} />
          </Box>
          <Box
            flex={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <NavigationTabs />
          </Box>
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <UserMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
