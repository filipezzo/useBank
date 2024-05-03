import { ChevronDown } from "lucide-react";
import { DropdownMenu } from "../../../components/DropdownMenu";
import { ExpensesIcon } from "../../../components/icons/ExpensesIcon";
import { IncomeIcon } from "../../../components/icons/IncomeIcon";
import { TransactionsIcon } from "../../../components/icons/TransactionsIcon";

export function TransactionsDropdown() {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<button className="flex items-center gap-2 text-gray-800">
					<TransactionsIcon />
					<span className="text-sm font-medium">Transações</span>
					<ChevronDown />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Content className="z-50">
				<DropdownMenu.Item className="gap-2">
					<IncomeIcon />
					Receitas
				</DropdownMenu.Item>

				<DropdownMenu.Item className="gap-2">
					<ExpensesIcon />
					Despesas
				</DropdownMenu.Item>

				<DropdownMenu.Item className="gap-2">
					<TransactionsIcon />
					Transações
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}
