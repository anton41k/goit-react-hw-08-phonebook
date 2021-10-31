import { Switch, Redirect } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import { getCurrentUser, getIsFetchCurrentUser } from "./redux/auth";

import LoaderComponent from "./components/LoaderComponent/LoaderComponent";

const Container = lazy(() =>
  import("./components/Container/Container" /* webpackChunkName: "Container" */)
);
const AppBar = lazy(() =>
  import("./components/AppBar/AppBar" /* webpackChunkName: "AppBar" */)
);
const HomeView = lazy(() =>
  import("./views/HomeView/HomeView" /* webpackChunkName: "HomeView-view" */)
);
const RegisterView = lazy(() =>
  import(
    "./views/RegisterView/RegisterView" /* webpackChunkName: "register-view" */
  )
);
const LoginView = lazy(() =>
  import("./views/LoginView/LoginView" /* webpackChunkName: "login-view" */)
);
const ContactsView = lazy(() =>
  import(
    "./views/ContactsView/ContactsView" /* webpackChunkName: "contacts-view" */
  )
);

export default function App() {
  const dispatch = useDispatch();
  //const isFetchCurrentUser = useSelector(getIsFetchCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<LoaderComponent />}>
      <Container>
        <AppBar />

        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" resticted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" redirectTo="/contacts" resticted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
          <Redirect to="/" />
        </Switch>

        <Toaster position="top-right" autoClose={3000} />
      </Container>
    </Suspense>
  );
}
