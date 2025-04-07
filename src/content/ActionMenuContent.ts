import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import { pageKeysList } from 'src/constants';
import { ActionMenuContentConfig, ActionOption } from 'src/index.config';

const editMenuItems: ActionOption[] = [
  { Icon: FileCopyIcon, title: 'Copy' },
  { Icon: SaveIcon, title: 'Save' },
  { Icon: PrintIcon, title: 'Print' },
  { Icon: ShareIcon, title: 'Share' },
];

const createMenuItems: ActionOption[] = [
  { Icon: FileCopyIcon, title: 'Copy' },
  { Icon: SaveIcon, title: 'Save' },
  { Icon: PrintIcon, title: 'Print' },
  { Icon: ShareIcon, title: 'Share' },
];

const pageMenuItems: ActionOption[] = pageKeysList.map((pageKey) => {
  return { Icon: undefined, title: pageKey };
});

export const editMenu: ActionMenuContentConfig = {
  title: 'EDIT',
  menuItems: editMenuItems,
  Icon: EditIcon,
};

export const createMenu: ActionMenuContentConfig = {
  title: 'ADD',
  menuItems: createMenuItems,
  Icon: AddIcon,
};

export const sideMenu: ActionMenuContentConfig = {
  menuItems: pageMenuItems,
  Icon: MenuIcon,
};
