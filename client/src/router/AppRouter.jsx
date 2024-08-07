import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PageLoader from "@/components/PageLoader";

const Dashboard = lazy(() =>
  import(/*webpackChunkName:'DashboardPage'*/ "@/pages/Dashboard")
);
const Admin = lazy(() =>
  import(/*webpackChunkName:'AdminPage'*/ "@/pages/Admin")
);

const User = lazy(() =>
  import(/*webpackChunkName:'UserPage'*/ "@/pages/User")
);

const SelectUser = lazy(() =>
  import(/*webpackChunkName:'SelectUserPage'*/ "@/pages/SelectUser")
);

const SaleProperties = lazy(() => import(/*webpackChunkName:'SaleProperties'*/ "@/pages/SaleProperties"));
const RentProperties = lazy(() => import(/*webpackChunkName:'RentProperties'*/ "@/pages/RentProperties"));
const AllProperties = lazy(() =>
  import(/*webpackChunkName:'AllProperties'*/ "@/pages/AllProperties")
);

const Logout = lazy(() =>
  import(/*webpackChunkName:'LogoutPage'*/ "@/pages/Logout")
);
const NotFound = lazy(() =>
  import(/*webpackChunkName:'NotFoundPage'*/ "@/pages/NotFound")
);

export default function AppRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <PrivateRoute path="/" component={Dashboard} exact />
          <PrivateRoute component={User} path="/users" exact />
          <PrivateRoute
            component={SelectUser}
            path="/selectuser"
            exact
          />
          <PrivateRoute component={SaleProperties} path="/sale-properties" exact />
          <PrivateRoute component={RentProperties} path="/rent-properties" exact />
          <PrivateRoute component={AllProperties} path="/all-properties" exact />
          <PrivateRoute component={Admin} path="/admins" exact />
          <PrivateRoute component={Logout} path="/logout" exact />
          <PublicRoute path="/login" render={() => <Redirect to="/" />} />
          <Route
            path="*"
            component={NotFound}
            render={() => <Redirect to="/notfound" />}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}
