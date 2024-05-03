import { useTransactionsModal } from "../../../../app/hooks/useTransactionsModal";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import InputCurrency from "../../../components/InputCurrency";
import Modal from "../../../components/Modal";
import { RdxSelect } from "../../../components/Select";

export function NewTransactionModal() {
	const { isTransactionModalOpen, closeTransactionModal, transactionType } =
		useTransactionsModal();
	return (
		<Modal
			title={transactionType === "income" ? "Nova Receita" : "Nova Despesa"}
			open={isTransactionModalOpen}
			onClose={closeTransactionModal}
		>
			<div className="space-y-4">
				<div className=" flex w-full flex-col gap-2 ">
					<div className="mb-2 flex items-center  gap-2 ">
						<span className=" text-sm tracking-[-0.5px] text-gray-600">R$</span>
						<InputCurrency />
					</div>
				</div>
				<Input
					placeholder={
						transactionType === "income" ? "Nome da Receita" : "Nome da Despesa"
					}
				/>
				<RdxSelect
					placeholder="Categoria"
					options={[
						{ label: "salário", value: "salario" },
						{ label: "rendimentos", value: "rendimentos" },
					]}
				/>

				<RdxSelect
					placeholder={
						transactionType === "income" ? "Receber na conta" : "Pagar com"
					}
					options={[{ label: "nubank", value: "nubank" }]}
				/>
				<Input placeholder="Data" type="Date" />
			</div>
			<Button className="mt-6 w-full">Salvar</Button>
		</Modal>
	);
}
