import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";

interface IAuth {
	isProtected: boolean;
}

export function AuthGuard({ isProtected }: IAuth) {
	const { user } = useAuth();

	if (!user && isProtected) {
		return <Navigate to="/login" replace />;
	}

	if (user && !isProtected) {
		return <Navigate to="/" />;
	}

	return <Outlet />;
}
