import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { pageKeysList } from 'src/constants';
import { sideMenu } from 'src/content';
import paths from 'src/routes/paths';
import { formatPageName } from 'src/utils';

import Component from './Menu';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

jest.mock('src/hooks', () => ({
  useActiveTab: jest.fn().mockReturnValue({
    setActiveTab: jest.fn(),
  }),
  useTheme: jest.fn().mockReturnValue({
    theme: {
      navBar: {
        bgColor: '#3d5a80',
      },
      header: {
        bgColor: '#98c1d9',
      },
    },
  }),
}));

describe('SideMenu', () => {
  const renderComponent = () =>
    render(<Component actionMenuContent={sideMenu} />);

  it('should open the Side Menu when the Icon is clicked', () => {
    renderComponent();

    userEvent.click(screen.getByRole('button', { name: /side menu/i }));

    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('should close the Side Menu and navigate when an option in the menu is clicked', async () => {
    const sideMenuOption = formatPageName(pageKeysList[0]);

    renderComponent();

    userEvent.click(screen.getByRole('button', { name: /side menu/i }));
    userEvent.click(screen.getByText(sideMenuOption));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(`${paths[pageKeysList[0]]}`);
      expect(screen.getByRole('menu', { hidden: true })).toBeInTheDocument();
    });
  });
});
