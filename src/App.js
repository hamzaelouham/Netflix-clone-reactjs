import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./utils/auth";
import { selectUser, login, logout } from "./reduxjs/reduces";
import "./App.css";

const Home = React.lazy(() => import("./components/Home"));
const Login = React.lazy(() => import("./components/Login"));
const Profile = React.lazy(() => import("./components/Profile"));

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            id: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Suspense fallback={<div>loading ...</div>}>
            <Login />
          </Suspense>
        ) : (
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<div>loading ...</div>}>
                <Home />
              </Suspense>
            </Route>
            <Route path="/profile">
              <Suspense fallback={<div>loading ...</div>}>
                <Profile />
              </Suspense>
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
