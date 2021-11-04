import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Employ from "../pages/Employ";
import Registro from "../pages/Registro";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";
import PrivateRoute from "./PrivateRoute";

export default function () {
	return (
		<Router>
			<Switch>
				<Route exact path="/profile/:username" component={ProfilePage} />

				<PrivateRoute exact path="/employ" component={Navbar} component={Employ} />
				<Route exact path="/registro" component={Registro} />
				<Route exact path="/" component={LoginPage} />

				<Route exact path="*" component={NotFoundPage} />
			</Switch>
		</Router>
	);
}
