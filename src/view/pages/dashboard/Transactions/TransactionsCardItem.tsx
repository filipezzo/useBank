import { useDashboard } from "../../../../app/hooks/useDashboard";
import { cn } from "../../../../app/utils/cn";
import { formatCurrency } from "../../../../app/utils/formatCurrency";
interface CardItemProps {
	icon: React.ReactNode;
	title: string;
	date: string;
	value: number;
}

function TransactionsCardItem({ date, icon, title, value }: CardItemProps) {
	const { showingValues } = useDashboard();
	return (
		<li className=" flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md">
			<div className="flex flex-1 gap-3">
				{icon}
				<div className="flex  flex-col">
					<h3 className="font-bold text-gray-800">{title}</h3>
					<small className="text-gray-500">{date}</small>
				</div>
			</div>
			<span
				className={cn(
					value > 0 ? "text-green-500" : "text-red-500",
					!showingValues && "blur-sm",
				)}
			>
				{formatCurrency(Number(value))}
			</span>
		</li>
	);
}

export default TransactionsCardItem;
