import { Navigate, Outlet } from "react-router-dom";

interface IAuth {
	isProtected: boolean;
}

export function AuthGuard({ isProtected }: IAuth) {
	const signin = false;

	if (!signin && isProtected) {
		return <Navigate to="/login" replace />;
	}

	if (signin && !isProtected) {
		return <Navigate to="/" />;
	}

	return <Outlet />;
}
