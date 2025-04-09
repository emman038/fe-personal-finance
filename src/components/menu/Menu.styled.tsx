import { Button } from '@mui/material';
import styled from 'styled-components';

export const HeaderButton = styled(Button)`
  background-color: ${({ theme }) => theme.bgColor} !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 30% !important;
`;
