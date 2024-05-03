import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { useAuth } from "../../../app/hooks/useAuth";
import { auth } from "../../../app/lib/firebase";

const schema = z.object({
	email: z.string().email("Preencha um email valído"),
	password: z.string().min(6, "Ao menos 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

type LoginType = {
	email: string;
	password: string;
};

export function useLoginController() {
	const {
		register,
		formState: { errors },
		handleSubmit: loginSubmit,
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const { mutateAsync, isPending } = useMutation({
		mutationFn: async ({ email, password }: LoginType) =>
			await signInWithEmailAndPassword(auth, email, password),
	});

	const { setUser } = useAuth();

	const handleSubmit = loginSubmit(async ({ email, password }) => {
		try {
			const { user } = await mutateAsync({ email, password });
			setUser(user);
		} catch (error) {
			toast.error("Email ou senha incorretos.");
		}
	});

	return {
		register,
		errors,
		handleSubmit,
		isPending,
	};
}
