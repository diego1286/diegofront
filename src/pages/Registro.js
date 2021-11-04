import React, { useState } from "react";

const Registro = () => {
	//let { first_name, last_name } = registro;
	const [registro, setRegistro] = useState({
		first_name: "",
		last_name: "",
	});

	const handleChange = (e) => {
		setRegistro({
			...registro,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {
		//let first_name, last_name;
		// validacion de datos
		if (registro.first_name === "" || registro.last_name === "") {
			alert("Todos los campos son obligatorios");
			return;
		}
		// se se valida que los campos no sean nulos se hace la consulta
		const requestInit = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(registro),
		};
		fetch("http://localhost:9000/addEmployee", requestInit)
			.then((res) => res.json())
			.then((res) => {
				console.text(res);
				setRegistro(res);
			});
		// iniciando state
		//let registro = { first_name, last_name };
		setRegistro({
			first_name: "",
			last_name: "",
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="first_name" className="form-label">
						Firts name
					</label>
					<input
						value={registro.first_name}
						name="first_name"
						onChange={handleChange}
						type="text"
						id="name"
						className="form-control"
					></input>
				</div>
				<div className="mb-3">
					<label htmlFor="last_name" className="form-label">
						Last name
					</label>
					<input
						value={registro.last_name}
						name="last_name"
						onChange={handleChange}
						type="text"
						id="last"
						className="form-control"
					></input>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};
export default Registro;
