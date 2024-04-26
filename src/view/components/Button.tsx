import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
	children: React.ReactNode;
	className: string;
}

export function Button({ children, className, ...rest }: ButtonProps) {
	return (
		<button
			className={`h-12 rounded-2xl bg-sky-900 px-6 text-center font-medium text-white transition-all hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-gray-100 ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
}
