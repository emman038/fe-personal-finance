import { MouseEvent, useState } from 'react';

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { defaultTab, pageKeysList } from 'src/constants';
import { useActiveTab } from 'src/hooks';
import { ActionMenuConfig, PageTypeKeys } from 'src/index.config';
import paths from 'src/routes/paths';
import { formatPageName } from 'src/utils';

const Menu = ({ actionMenuContent }: ActionMenuConfig) => {
  const { Icon, menuItems, title } = actionMenuContent;

  const { setActiveTab } = useActiveTab();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isPageTypeKey = (key: string): key is PageTypeKeys => {
    return pageKeysList.includes(key as PageTypeKeys);
  };

  const handleMenuItemClick = (title: string) => {
    handleCloseNavMenu();

    if (isPageTypeKey(title)) {
      setActiveTab(defaultTab);
      navigate(paths[title]);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <Button
        size="large"
        aria-label="side menu"
        aria-controls="side-menu"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{
          minWidth: 'auto',
          padding: 0.5,
        }}
      >
        <Icon /> {title && title}
      </Button>
      <MuiMenu
        id="side-menu"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: 'block' }}
      >
        {menuItems.map(({ title, Icon }) => (
          <MenuItem key={title} onClick={() => handleMenuItemClick(title)}>
            <Typography sx={{ textAlign: 'center' }}>
              {Icon && <Icon />}
              {formatPageName(title)}
            </Typography>
          </MenuItem>
        ))}
      </MuiMenu>
    </Box>
  );
};

export default Menu;
