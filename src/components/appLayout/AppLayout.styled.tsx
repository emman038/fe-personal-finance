import { Box, Container } from '@mui/material';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 7rem;

  @media (max-width: 768px) {
    margin-top: 5.5rem !important;
  }
`;

export const MainSection = styled(Box)<{ component: string }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
