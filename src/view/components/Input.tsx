import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
	name: string;
}

export function Input({ name, id, placeholder, ...rest }: InputProps) {
	const inputId = id ?? name;

	return (
		<div className="relative">
			<input
				id={inputId}
				name={name}
				className="peer h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-gray-800 outline-none transition-all placeholder-shown:pt-0 focus:border-blue-900"
				placeholder=" "
				{...rest}
			/>
			<label
				htmlFor={inputId}
				className="pointer-events-none absolute left-[13px] top-2  text-sm text-gray-700  transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base "
			>
				{placeholder}
			</label>
		</div>
	);
}
