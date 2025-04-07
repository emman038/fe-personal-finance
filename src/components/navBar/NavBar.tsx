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
        bgcolor: theme.navBar.bgColor,
      }}
    >
      <Container maxWidth="xl" sx={{ display: 'flex' }}>
        <Toolbar disableGutters sx={{ width: '100%' }}>
          <SideMenu actionMenuContent={sideMenu} />
          <NavigationTabs />
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
