import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { useAuth } from "../../../app/hooks/useAuth";
import { auth, db } from "../../../app/lib/firebase";
const schema = z.object({
	name: z.string().min(3, "Seu nome deve conter pelo menos 3 caracteres"),
	email: z.string().email("Preencha um email valído"),
	password: z.string().min(6, "Sua senha deve conter pelo menos 6 caracteres"),
});

type FormData = z.infer<typeof schema>;
type CreateUserType = {
	email: string;
	password: string;
};

export function useRegisterController() {
	const {
		register,
		handleSubmit: registerSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const { mutateAsync, isPending } = useMutation({
		mutationFn: async ({ email, password }: CreateUserType) => {
			return createUserWithEmailAndPassword(auth, email, password);
		},
	});
	const { setUser } = useAuth();
	const onSubmit = registerSubmit(async ({ email, password, name }) => {
		try {
			const { user } = await mutateAsync({ email, password });
			await set(ref(db, `users/${user.uid}`), {
				name,
				email,
				password,
			});
			setUser({ email, name, password });
			toast.success("Conta criada com sucesso!");
		} catch (error: any) {
			if (error.code === "auth/email-already-in-use") {
				return toast.error("Email já em uso");
			}
			toast.error(`${error}`);
		}
	});

	return {
		register,
		errors,
		onSubmit,
		isPending,
	};
}
