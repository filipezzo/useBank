import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	name: z.string().min(3, "Seu nome deve conter pelo menos 3 caracteres"),
	email: z.string().email("Preencha um email valído"),
	password: z.string().min(6, "Sua senha deve conter pelo menos 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
	const {
		register,
		handleSubmit: registerSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit = registerSubmit((data) => console.log(data));

	return {
		register,
		errors,
		onSubmit,
	};
}
