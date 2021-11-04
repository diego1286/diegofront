import { useHistory } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function LoginPage() {
	const history = useHistory();
	const auth = useAuth();
	const handleLogin = () => {
		auth.login();
		history.push("/employ");
	};

	return (
		<div className="container">
			<div className="row">
				<from>
					<div class="col-sm-6 form-floating mb-3">
						<input
							type="text"
							className="form-control"
							name="username"
							placeholder="Usuario"
						/>
						<label class="fw-lighter" for="floatingInput">
							Usuario
						</label>
					</div>
					<div className="col-sm-6 form-floating mb-3">
						<input
							type="password"
							className="form-control"
							name="password"
							placeholder="Usuario"
						/>
						<label className="fw-lighter" for="floatingInput">
							Contraseña
						</label>
					</div>
					<div class="col-sm-6 form-floating">
						<input
							type="submit"
							class="btn btn-outline-success"
							value="ingresar"
							onClick={handleLogin}
						/>
					</div>
				</from>
			</div>
		</div>
	);
}
