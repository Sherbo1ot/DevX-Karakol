import { Login } from "./components/auth/Login";
import { Registration } from "./components/auth/Registration";
import { Wrapper } from "./components/wrapper/Wrapper";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./provider/AuthProvider";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";

export const App = () => {
	return (
		<>
			<div>
				<AuthProvider>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/registration" element={<Registration />} />
						<Route
							path="/"
							element={
								<ProtectedRoute>
									<Wrapper />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</AuthProvider>
			</div>
		</>
	);
};
