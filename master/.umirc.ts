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
          entry:
            process.env.NODE_ENV === 'development'
              ? 'http://localhost:8001'
              : '/v1/',
        },
      ],
      prefetch: 'all',
      sandbox: {
        strictStyleIsolation: false,
        experimentalStyleIsolation: true,
      },
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
          path: 'v1',
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
  lessLoader: {
    modifyVars: {
      hack: `true; @import "~@/theme.less";`,
    },
  },
});
