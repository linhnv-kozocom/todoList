import { Route, Routes } from "react-router-dom";
import BaseLayout from "../components/Layout/BaseLayout";
import { RouteItem } from "../models/route";
import React, { Fragment, Suspense } from "react";
import ROUTE_PATH from "../configs/routePath";

const routes: RouteItem[] = [
  {
    path: "/",
    component: BaseLayout,
    routes: [
      {
        path: ROUTE_PATH.HOME,
        component: React.lazy(() => import("~/apps/homepage/pages/Homepage")),
      },
    ],
  },
];

const renderRoutes = (routes: RouteItem[]) => {
  return routes?.map((route: RouteItem, idx: number) => {
    const Component = route.component;
    const Guard = route.guard || Fragment;
    return (
      <Route
        key={`routes-${idx}`}
        path={route.path}
        element={
          <Guard>
            <Suspense fallback={<div>...Loading</div>}>
              <Component />
            </Suspense>
          </Guard>
        }
      >
        {route.routes && renderRoutes(route.routes)}
      </Route>
    );
  });
};
function RoutesList() {
  return <Routes>{renderRoutes(routes)}</Routes>;
}

export default RoutesList;
