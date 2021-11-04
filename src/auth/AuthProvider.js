import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const contextValue = {
		user,
		login() {
			setUser({
				id: 1,
				username: "admin@admin.com",
				password: "$2a$10$lYfoSY5IYtbzmUpnMnvdK.p6EiAlQl5nWQ9aUGEYbcjJFnTKPniim",
			});
		},
		logout() {
			setUser(null);
		},
		isLogged() {
			return !!user;
		},
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};
export default AuthProvider;
