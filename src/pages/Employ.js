import React from "react";
import { useState, useEffect } from "react";

export default function Employ({ registro, setRegistro }) {
	const [employes, setemployes] = useState([]);
	const [listUpdate, setlistUpdate] = useState(false);

	useEffect(() => {
		const getEmploy = () => {
			fetch("http://localhost:9000/employee")
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
					setemployes(res);
				});
		};
		getEmploy();
		setlistUpdate(false);
	}, [listUpdate]);

	const handleDelete = (id) => {
		const requestInit = {
			method: "DELETE",
		};
		fetch("http://localhost:9000/deleteEmployee/" + id, requestInit)
			.then((res) => res.text())
			.then((res) => console.log(res));
		setlistUpdate(true);
	};

	const handleUpdate = (id) => {
		let { first_name, last_name } = registro;
		if (first_name === "" || last_name === "") {
			alert("Todos los campos son obligatorios");
			return;
		}
		const requestInit = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(registro),
		};
		fetch("http://localhost:9000/editEmployee/" + id, requestInit)
			.then((res) => res.text())
			.then((res) => console.log(res));
		setlistUpdate(true);
	};

	const handleChange = (e) => {
		setRegistro({
			...registro,
			[e.target.name]: e.target.value,
		});
	};
	/*
	const handleSubmit = () => {
		let { first_name, last_name } = registro;
		// validacion de datos
		if (first_name === "" || last_name === "") {
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
		setRegistro({
			first_name: "",
			last_name: "",
		});
*/
	return (
		/*
			<div className="container border">
				<div className="row">
					<div className="col-6 border">
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="first_name" className="form-label">
									Firts name
								</label>
								<input
									value={first_name}
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
									value={last_name}
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
					*/
		<div className="col-6 border">
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
					</tr>
				</thead>
				<tbody>
					{employes.map((employe) => (
						<tr key={employe.id}>
							<td>{employe.id}</td>
							<td>{employe.first_name}</td>
							<td>{employe.last_name}</td>
							<td>
								<div className="mb-3">
									<button
										onClick={() => handleDelete(employe.id)}
										className="btn btn-danger"
									>
										Delete
									</button>
								</div>
								<div className="mb-3">
									<button
										onClick={() => handleUpdate(employe.id)}
										className="btn btn-primary"
									>
										Update
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
		//</div>
		//</div>
	);
}
