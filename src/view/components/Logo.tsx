import { PiggyBank } from "lucide-react";

interface LogoProps {
	className?: string;
}

export function Logo({ className }: LogoProps) {
	return (
		<div className={`flex items-center gap-1 ${className}`}>
			<PiggyBank size={24} className="text-sky-900" />
			<p className="text-2xl font-semibold text-gray-700">useBank</p>
		</div>
	);
}
