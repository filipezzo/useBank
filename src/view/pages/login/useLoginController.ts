import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	email: z.string().email("Preencha um email valído"),
	password: z.string().min(6, "Ao menos 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
	const {
		register,
		formState: { errors },
		handleSubmit: loginSubmit,
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const handleSubmit = loginSubmit((data) => {
		console.log(data);
	});

	return {
		register,
		errors,
		handleSubmit,
	};
}
