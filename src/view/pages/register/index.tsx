import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Loader } from "../../components/Loader";
import { useRegisterController } from "./useRegisterController";

export function Register() {
	const { errors, onSubmit, register, isPending } = useRegisterController();

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
			<form onSubmit={onSubmit} className="flex flex-col gap-4">
				<Input
					placeholder="Nome"
					type="text"
					error={errors.name?.message}
					control={{ ...register("name") }}
				/>
				{errors && (
					<span className="text-sm font-semibold text-rose-500">
						{errors.name?.message}
					</span>
				)}
				<Input
					placeholder="E-mail"
					type="email"
					error={errors.email?.message}
					control={{ ...register("email") }}
				/>
				{errors && (
					<span className="text-sm font-semibold text-rose-500">
						{errors.email?.message}
					</span>
				)}
				<Input
					placeholder="Senha"
					type="password"
					error={errors.password?.message}
					control={{ ...register("password") }}
				/>
				{errors && (
					<span className="text-sm font-semibold text-rose-500">
						{errors.password?.message}
					</span>
				)}

				<Button disabled={isPending} type="submit" className="mt-2">
					{isPending ? <Loader /> : "Criar"}
				</Button>
			</form>
		</>
	);
}
