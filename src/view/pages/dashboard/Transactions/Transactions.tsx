import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { months } from "../../../../app/constants/months";
import { cn } from "../../../../app/utils/cn";
import img from "../../../assets/noTransaction.svg";
import { Loader } from "../../../components/Loader";
import { ExpensesIcon } from "../../../components/icons/ExpensesIcon";
import { FilterIcon } from "../../../components/icons/FilterIcon";
import Fab from "../components/Fab";
import NewAccountModal from "../modals/NewAccountModal";
import { NewTransactionModal } from "../modals/NewTransactionModal";
import { FilteredModal } from "./FilteredModal";
import { SliderNav } from "./SliderNav";
import { SliderOptions } from "./SliderOptions";
import TransactionsCardItem from "./TransactionsCardItem";
import { TransactionsDropdown } from "./TransactionsDropdown";
import { useTransactionsController } from "./useTransactionsController";

export function Transactions() {
	const {
		isLoading,
		transactions,
		initialLoading,
		onOpenFilteredModal,
		onCloseFilteredModal,
		isFilteredModalOpen,
	} = useTransactionsController();
	return (
		<section
			className={cn(
				"flex h-[620px] w-full flex-col  rounded-2xl  border bg-gray-400 p-8 px-4  xl:h-full xl:w-1/2 xl:p-10",
				initialLoading && "items-center justify-center",
			)}
		>
			{initialLoading ? (
				<Loader className="size-10 border-t-sky-900" />
			) : (
				<>
					<header className="mb-6 flex items-center justify-between">
						<div>
							<TransactionsDropdown />
						</div>
						<button onClick={onOpenFilteredModal}>
							<FilterIcon />
						</button>
					</header>

					<div className="relative">
						<Swiper centeredSlides slidesPerView={3}>
							<SliderNav />
							{months.map((month, index) => (
								<SwiperSlide key={month}>
									{({ isActive }) => (
										<SliderOptions
											isActive={isActive}
											month={month}
											index={index}
										/>
									)}
								</SwiperSlide>
							))}
						</Swiper>
					</div>

					{isLoading && <Loader />}

					{!isLoading && transactions.length > 0 ? (
						<ul className="mt-4 flex flex-1 flex-col gap-4 overflow-y-auto  ">
							<TransactionsCardItem
								date="04/06/2023"
								title="Almoço"
								value={120.0}
								icon={<ExpensesIcon />}
							/>

							<TransactionsCardItem
								date="04/06/2023"
								title="Almoço"
								value={120.0}
								icon={<ExpensesIcon />}
							/>

							<TransactionsCardItem
								date="04/06/2023"
								title="Almoço"
								value={120.0}
								icon={<ExpensesIcon />}
							/>

							<TransactionsCardItem
								date="04/06/2023"
								title="Almoço"
								value={120.0}
								icon={<ExpensesIcon />}
							/>
							<TransactionsCardItem
								date="04/06/2023"
								title="Almoço"
								value={120.0}
								icon={<ExpensesIcon />}
							/>
							<TransactionsCardItem
								date="04/06/2023"
								title="Almoço"
								value={120.0}
								icon={<ExpensesIcon />}
							/>
							<TransactionsCardItem
								date="04/06/2023"
								title="Almoço"
								value={120.0}
								icon={<ExpensesIcon />}
							/>
							<TransactionsCardItem
								date="04/06/2023"
								title="Almoço"
								value={120.0}
								icon={<ExpensesIcon />}
							/>
							<TransactionsCardItem
								date="04/06/2023"
								title="Almoço"
								value={120.0}
								icon={<ExpensesIcon />}
							/>
						</ul>
					) : (
						<div className="flex  h-full w-full flex-col items-center justify-center">
							<div className="flex flex-col items-center gap-1">
								<img src={img} alt="icone de transaçoes" />
								<h3>Nenhuma transação encontrada</h3>
							</div>
						</div>
					)}
				</>
			)}
			<FilteredModal
				open={isFilteredModalOpen}
				onClose={onCloseFilteredModal}
			/>
			<Fab />
			<NewAccountModal />
			<NewTransactionModal />
		</section>
	);
}
