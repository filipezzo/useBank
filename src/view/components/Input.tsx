import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<"input"> {
	control?: any;
	error?: string;
}

export function Input({
	id,
	placeholder,
	error,
	control,
	...rest
}: InputProps) {
	const inputId = id ?? "user";

	return (
		<div className="relative">
			<input
				id={inputId}
				className={cn(
					"peer h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-gray-800 outline-none transition-all placeholder-shown:pt-0 focus:border-blue-900",
					error && "!border-rose-500",
				)}
				placeholder=" "
				{...control}
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
