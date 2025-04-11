import { PageTypeKeys } from 'src/index.config';

const paths: { [key in PageTypeKeys]: string } = {
  HOME_PAGE: '/',
  INCOME: '/income',
  EXPENSE: '/expense',
};

export default paths;
