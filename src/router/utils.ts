import Main from '@/views/_layout/Main.vue';
import type { Route } from './types';

const _routes: Route[] = [];

export const createRoutes = (routes: Route[]) => {
  _routes.push(...routes);
};

export const buildRoutes = (): Route[] => {
  const roots = [],
    children = [];

  for (const item of _routes) {
    if (item.isRoot) roots.push(item);
    else children.push(item);
  }

  return [{ path: '/', redirect: 'editor', component: Main, children }, ...roots];
};
