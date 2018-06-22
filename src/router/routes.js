import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';

export default [
  {
    path: '/',
    alias: '/dashboard',
    component: Dashboard,
    meta: {
      public: true,
      template: 'default',
    },
  },

  {
    path: '/login',
    component: Login,
    meta: {
      public: true,
      template: 'empty',
    },
  },

  // {
  //   path: '*',
  //   component: ErrorView,
  // },
];
