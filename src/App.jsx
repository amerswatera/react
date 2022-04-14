import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthGuardRoute from "./components/AuthGuardRoute";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import CardInfoPage from "./pages/CardInfoPage";
import CardsPanelPage from "./pages/CardsPanelPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import QueryParams from "./pages/QueryParams";
// import SignupPage from "./pages/SignupPage";
import BusinessRegistration from "./pages/BusinessRegistration";
const SignupPage = React.lazy(() => import("./pages/SignupPage"));

function App() {
  return (
    <div className="container">
      <NavBarComponent></NavBarComponent>
      <ToastContainer />
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          {/* http://localhost:3000/ */}
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          {/* http://localhost:3000/home */}
          <AuthGuardRoute path="/home" component={HomePage} />
          {/* http://localhost:3000/login */}
          <Route path="/login" component={LoginPage} />
          {/* http://localhost:3000/signup */}
          <Route path="/signup" component={SignupPage} />
          {/* http://localhost:3000/cardspanel */}
          <Route path="/biz-log" component={BusinessRegistration} />
          <AuthGuardRoute path="/cardspanel" component={CardsPanelPage} />
          <AuthGuardRoute path="/card/:id" component={CardInfoPage} />
          <Route path="/qparams" component={QueryParams} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
