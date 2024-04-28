import { PiggyBank } from "lucide-react";
import { cn } from "../../app/utils/cn";

interface LogoProps {
	className?: string;
}

export function Logo({ className }: LogoProps) {
	return (
		<div className={cn(`flex items-center gap-1`, className)}>
			<PiggyBank size={24} className="text-sky-900" />
			<p className=" text-xl font-bold text-gray-700 xl:text-2xl xl:font-semibold">
				useBank
			</p>
		</div>
	);
}
