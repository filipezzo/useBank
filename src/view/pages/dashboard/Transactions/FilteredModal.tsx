import { ChevronLeft, ChevronRight } from "lucide-react";
import { useFilteredModal } from "../../../../app/hooks/useFilteredModal";
import { cn } from "../../../../app/utils/cn";
import { Button } from "../../../components/Button";
import Modal from "../../../components/Modal";

interface IFiltered {
	open: boolean;
	onClose(): void;
}

const mockupOptions = [
	{
		id: crypto.randomUUID(),
		option: "XP Investimentos",
	},
	{
		id: crypto.randomUUID(),
		option: "Nubank",
	},

	{
		id: crypto.randomUUID(),
		option: "Carteira",
	},
];

export function FilteredModal({ open, onClose }: IFiltered) {
	const { onSelectedId, selectedId, onSelectYear, selectedYear } =
		useFilteredModal();
	return (
		<Modal open={open} onClose={onClose} title="Filtros">
			<ul className="space-y-2">
				<h2 className="mt-10 text-lg font-bold">Conta</h2>
				{mockupOptions.map((item) => (
					<li key={item.id}>
						<button
							className={cn(
								"w-full rounded-2xl p-2 text-left hover:bg-gray-50",
								selectedId === item.id && "!bg-gray-200",
							)}
							onClick={() => onSelectedId(item.id)}
						>
							{item.option}
						</button>
					</li>
				))}
			</ul>

			<div className="mt-10 ">
				<h2 className=" text-lg font-bold">Ano</h2>

				<div className="flex items-center  gap-4">
					<button
						onClick={() => onSelectYear(-1)}
						className="flex size-12 items-center justify-center"
					>
						<ChevronLeft />
					</button>
					<h2 className=" text-lg ">{selectedYear}</h2>
					<button
						onClick={() => onSelectYear(1)}
						className="flex size-12 items-center justify-center"
					>
						<ChevronRight />
					</button>
				</div>
			</div>
			<Button className="mt-10 w-full">Aplicar Filtros</Button>
		</Modal>
	);
}
