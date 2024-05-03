import { useNewAccountModal } from "../../../../app/hooks/useNewAccountModal";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import InputCurrency from "../../../components/InputCurrency";
import Modal from "../../../components/Modal";
import { RdxSelect } from "../../../components/Select";

export default function NewAccountModal() {
	const { isFabModalOpen, closeFabModal } = useNewAccountModal();

	return (
		<Modal onClose={closeFabModal} open={isFabModalOpen} title="Nova Conta">
			<form className="space-y-4">
				<div className=" flex w-full flex-col gap-2 ">
					<span className="text-sm font-medium tracking-[-0.5px] text-gray-600">
						Saldo
					</span>
					<div className="mb-2 flex items-center  gap-2 ">
						<span className=" text-sm tracking-[-0.5px] text-gray-600">R$</span>
						<InputCurrency />
					</div>
				</div>
				<Input placeholder="Nome da Conta" />
				<RdxSelect
					placeholder="Tipo"
					options={[
						{
							label: "Conta Corrente",
							value: "CHECKING",
						},

						{
							label: "Investimento",
							value: "INVESTMENT",
						},

						{
							label: "Dinheiro",
							value: "CASH",
						},
					]}
				/>
				<Button className="mt-6 w-full">Salvar</Button>
			</form>
		</Modal>
	);
}
