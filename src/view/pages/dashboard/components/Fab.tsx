import { Plus } from "lucide-react";
import { useNewAccountModal } from "../../../../app/hooks/useNewAccountModal";
import { useTransactionsModal } from "../../../../app/hooks/useTransactionsModal";
import { DropdownMenu } from "../../../components/DropdownMenu";
import { BankAccountIcon } from "../../../components/icons/BankAccountIcon";
import { CategoryIcon } from "../../../components/icons/categories/CategoryIcon";

export function Fab() {
	const { openFabModal } = useNewAccountModal();
	const { openTransactionModal } = useTransactionsModal();
	return (
		<div className="fixed bottom-4 right-4">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<button className=" flex size-12 items-center justify-center rounded-full bg-sky-900 font-medium text-white">
						<Plus className="size-4" />
					</button>
				</DropdownMenu.Trigger>

				<DropdownMenu.Content className="z-50 mr-8">
					<DropdownMenu.Item
						className="gap-2"
						onSelect={() => openTransactionModal("expense")}
					>
						<CategoryIcon type="expense" />
						Nova Despesa
					</DropdownMenu.Item>

					<DropdownMenu.Item
						onSelect={() => openTransactionModal("income")}
						className="gap-2"
					>
						<CategoryIcon type="income" />
						Nova Receita
					</DropdownMenu.Item>

					<DropdownMenu.Item onSelect={openFabModal} className="gap-2">
						<BankAccountIcon />
						Nova Conta
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	);
}

export default Fab;
