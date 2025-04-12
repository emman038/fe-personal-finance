import { useState, MouseEvent } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { menuOptions } from 'src/constants';
import { useTheme } from 'src/hooks';

const UserMenu = () => {
  const { theme } = useTheme();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1',
      }}
    >
      <Tooltip title="Open Account Settings">
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0 }}
          size="large"
          aria-label="accounts menu"
          aria-controls="accounts-menu"
          aria-haspopup="true"
        >
          <Avatar
            alt="Picture of account holder"
            sx={{ color: 'black', bgcolor: theme.avatarBgColor }}
          >
            E
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="accounts-menu"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {menuOptions.map((menuOption) => (
          <MenuItem key={menuOption} onClick={handleCloseUserMenu}>
            <Typography sx={{ textAlign: 'center' }}>{menuOption}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserMenu;
