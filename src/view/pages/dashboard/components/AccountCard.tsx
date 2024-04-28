import { ReactNode } from "react";
import { formatCurrency } from "../../../../app/utils/formatCurrency";

interface CardProps {
	icon: ReactNode;
	bank: string;
	balance: number;
}

export function AccountCard({ balance, bank, icon }: CardProps) {
	return (
		<div className="mb-1 flex h-[200px] w-full   flex-col justify-between rounded-2xl border-b-4 border-b-black bg-gray-500 p-4 text-gray-900 shadow-md  ">
			<div className="space-y-4">
				{icon}
				<h3 className="font-medium">{bank}</h3>
			</div>
			<div>
				<h4 className="font-medium">{formatCurrency(balance)}</h4>
				<span className="block text-gray-700/80">Saldo atual</span>
			</div>
		</div>
	);
}
