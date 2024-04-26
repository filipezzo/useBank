import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Register() {
	return (
		<>
			<h1 className="tracking-[-1px]text-gray-900 text-center text-2xl font-bold">
				Crie sua conta
			</h1>
			<p className="mb-12  mt-1 h-12 space-x-2 text-center leading-6 text-gray-700  ">
				<span>Já possui uma conta?</span>
				<Link to="/login" className="font-medium text-sky-900">
					Fazer login
				</Link>
			</p>
			<form className="flex flex-col gap-4">
				<Input placeholder="Nome" type="text" name="name" />
				<Input placeholder="E-mail" type="email" name="email" />
				<Input placeholder="Senha" type="password" name="password" />
				<Button type="submit" className="mt-2">
					Entrar
				</Button>
			</form>
		</>
	);
}
