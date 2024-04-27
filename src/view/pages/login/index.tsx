import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Loader } from "../../components/Loader";
import { useLoginController } from "./useLoginController";

export function Login() {
	const { register, handleSubmit, errors, isPending } = useLoginController();

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
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<Input
					placeholder="E-mail"
					type="email"
					error={errors.email?.message}
					control={{ ...register("email") }}
				/>
				{errors.email && (
					<span className="text-sm font-semibold text-rose-500">
						{errors.email.message}
					</span>
				)}
				<Input
					placeholder="Senha"
					type="password"
					error={errors.password?.message}
					control={{ ...register("password") }}
				/>
				{errors.password && (
					<span className="text-sm font-semibold text-rose-500">
						{errors.password.message}
					</span>
				)}
				<Button disabled={isPending} type="submit" className="mt-2">
					{isPending ? <Loader /> : "Entrar"}
				</Button>
			</form>
		</>
	);
}
