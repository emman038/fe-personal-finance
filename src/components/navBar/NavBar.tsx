import { sideMenu } from 'src/content/actionMenuContent/ActionMenuContent';

import SideMenu from '../menu';
import NavigationTabs from '../navigationTabs';
import UserMenu from '../userMenu';
import { NavBarContainer, StyledAppBar, StyledToolbar } from './NavBar.styled';

function NavBar() {
  return (
    <StyledAppBar>
      <NavBarContainer>
        <StyledToolbar>
          <SideMenu actionMenuContent={sideMenu} isSideMenu={true} />
          <NavigationTabs />
          <UserMenu />
        </StyledToolbar>
      </NavBarContainer>
    </StyledAppBar>
  );
}
export default NavBar;
