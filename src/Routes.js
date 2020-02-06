import React from "react";
import { Route, Switch } from "react-router-dom";
// import Home from "./containers/Home";
// import Login from "./containers/Login";
// import NotFound from "./containers/NotFound";
// import Signup from "./containers/Signup";
// import AppliedRoute from "./components/AppliedRoute";
import AilmentPage from "./AilmentPage";
import ResponsiveDrawer from "./ResponsiveDrawer";
// import Notes from "./containers/Notes";
// import Settings from "./containers/Settings";
// import AuthenticatedRoute from "./components/AuthenticatedRoute";
// import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes() {
    return (
        <Switch>
            <Route path="/{categoryId}" >
                <AilmentPage />
            </Route>
            <Route path="/" component={ResponsiveDrawer} />
        </Switch>
        // <Switch>
        //     <Route path="/" exact component={ResponsiveDrawer} />
        //     {/* <Route path="/AilmentPage" component={AilmentPage} /> */}
        //     {/* <Route path="/categories/:id" exact component={AilmentPage} /> */}
        //     { /* Finally, catch all unmatched routes */}
        //     {/* <Route component={NotFound} /> */}
        // </Switch>
    );
}
