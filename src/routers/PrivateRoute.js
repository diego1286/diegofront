import { Route, Redirect } from "react-router-dom";
import useAuth from "../auth/useAuth";

const user = null;
/*const user = {
	id: 1,
	username: "admin@admin.com",
	password: "$2a$10$lYfoSY5IYtbzmUpnMnvdK.p6EiAlQl5nWQ9aUGEYbcjJFnTKPniim",
};*/

export default function PrivateRoute({ component: Component, ...rest }) {
	const auth = useAuth();
	return (
		<Route {...rest}>
			{auth.isLogged() ? <Component /> : <Redirect to="/" />}
		</Route>
	);
}
