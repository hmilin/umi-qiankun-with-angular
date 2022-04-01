import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'angular9',
          entry: 'http://localhost:8001',
          to: '/angular9',
          props: {
            testProp1: 'test1',
          },
        },
      ],
      prefetch: 'all',
    },
  },
  routes: [
    {
      path: '/',
      component: '@/layouts',
      routes: [
        {
          path: 'about',
          component: '@/pages/about',
        },
        {
          path: 'angular9',
          microApp: 'angular9',
          microAppProps: {
            autoSetLoading: false,
            className: 'appClassName',
            wrapperClassName: 'wrapperClass',
          },
        },
        {
          path: '/',
          component: '@/pages',
        },
      ],
    },
  ],
  fastRefresh: {},
});
