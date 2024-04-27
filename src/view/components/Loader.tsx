import { cn } from "../../app/utils/cn";

interface LoaderProps {
	className?: string;
}

export function Loader({ className }: LoaderProps) {
	return (
		<div
			className={cn(
				"mx-auto size-6 animate-spin rounded-full border-t-2 border-r-white border-t-white",
				className,
			)}
		/>
	);
}
