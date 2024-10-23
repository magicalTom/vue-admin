import type { RouteRecordRaw } from 'vue-router';

export type Route = {
  /** 是否根页面 */
  isRoot?: boolean;
} & RouteRecordRaw;
