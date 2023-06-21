type Route = {
  path?: string;
  component?: any;
  guard?: any;
};

export type RouteItem = Route & {
  routes?: Route[];
};
