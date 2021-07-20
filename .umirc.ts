import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/products/', component: '@/pages/products/products' },
    {
      exact: true,
      path: '/products/:product',
      component: '@/pages/products/[product]',
    },
  ],
  fastRefresh: {},
});
