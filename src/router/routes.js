import HelloWorld from '@/pages/HelloWorld';
import Login from '@/pages/Login';

export default [
  {
    path: '/',
    component: HelloWorld,
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
