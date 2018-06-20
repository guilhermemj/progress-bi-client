import HelloWorld from '@/pages/HelloWorld';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';

export default [
  {
    path: '/',
    component: HelloWorld,
    // Redirect temporário
    redirect: '/dashboard',
  },

  {
    path: '/login',
    component: Login,
    meta: {
      public: true,
      template: 'empty',
    },
  },

  {
    path: '/dashboard',
    component: Dashboard,
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
