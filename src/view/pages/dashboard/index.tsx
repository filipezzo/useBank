import { useAuth } from "../../../app/hooks/useAuth";
import { Button } from "../../components/Button";

export function Dashboard() {
	const { signout, user } = useAuth();

	return (
		<main>
			<Button onClick={signout}>Deslogar</Button>
			{user.name}
		</main>
	);
}
