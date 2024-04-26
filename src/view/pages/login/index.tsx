import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Login() {
	return (
		<>
			<h1 className="tracking-[-1px]text-gray-900 text-center text-2xl font-bold">
				Entre em sua conta
			</h1>
			<p className="mb-12 mt-1 h-12  space-x-2 text-center leading-6 text-gray-700  ">
				<span>Novo por aqui?</span>
				<Link to="/register" className="font-medium text-sky-900">
					Crie uma conta
				</Link>
			</p>
			<form className="flex flex-col gap-4">
				<Input placeholder="E-mail" type="email" name="email" />
				<Input placeholder="Senha" type="password" name="password" />
				<Button type="submit" className="mt-2">
					Criar conta
				</Button>
			</form>
		</>
	);
}
