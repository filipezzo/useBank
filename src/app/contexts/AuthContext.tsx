import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PageLoader } from "../../view/components/PageLoader";
import { auth } from "../lib/firebase";
import { api } from "../services/api/api";

interface AuthContextValue {
	user: any;
	signout(): void;
	setUser(user: any): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const signout = async () => {
		return await auth.signOut();
	};

	useEffect(() => {
		setIsLoading(true);

		const unsub = onAuthStateChanged(auth, async (user: any) => {
			if (user) {
				const { uid } = user;
				try {
					const { data } = await api.get(`/users/${uid}.json`);
					setUser(data);
					setIsLoading(false);
				} catch (error) {
					toast.error("Erro ao buscar dados");
					setIsLoading(false);
				}
			} else {
				setUser(null);
				setIsLoading(false);
			}
		});

		return () => unsub();
	}, []);

	if (isLoading) {
		return <PageLoader />;
	}
	return (
		<AuthContext.Provider value={{ user, signout, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}
