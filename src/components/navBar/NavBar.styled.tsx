import { AppBar, Container, Toolbar } from '@mui/material';
import styled from 'styled-components';

export const StyledAppBar = styled(AppBar)`
  top: 0.5rem !important;
  left: 0.5rem !important;
  right: 0.5rem;
  width: calc(100% - 1rem) !important;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgColor}!important;
  position: fixed;
`;

export const NavBarContainer = styled(Container)`
  max-width: 1536px;
  display: flex !important;
  padding: 0 !important;
`;

export const StyledToolbar = styled(Toolbar)`
  width: 100%;
  padding-left: 0 !important;
  padding-right: 0 !important;
`;
