import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function Navbar() {
	const auth = useAuth();
	return (
		<nav className="navbar navbar-success bg-success">
			<div className="container">
				<div>
					<li>
						<NavLink exact to="/" activeClassName="active">
							<button>Inicio</button>
						</NavLink>
					</li>
				</div>
				<div>
					<li>
						<NavLink exact to="/" activeClassName="active">
							<button onClick={auth.logout}>Salir</button>
						</NavLink>
					</li>
				</div>
			</div>
		</nav>
	);
}
