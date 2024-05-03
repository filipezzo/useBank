import { PlusCircleIcon } from "lucide-react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDashboard } from "../../../../app/hooks/useDashboard";
import { useWindowWidth } from "../../../../app/hooks/useWindowWidth";
import { cn } from "../../../../app/utils/cn";
import { Loader } from "../../../components/Loader";
import { BankAccountTypeIcon } from "../../../components/icons/BankAccountTypeIcon";
import { EyeIcon } from "../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { AccountSliderNav } from "./AccountSliderNav";
import { useAccountController } from "./useAccountController";
export function Accounts() {
	const { width } = useWindowWidth();
	const { showingValues, toggleShowingValues, openFabModal } = useDashboard();
	const { isLoading, data } = useAccountController();

	return (
		<section
			className={cn(
				"flex h-[420px] w-full flex-col  rounded-2xl border bg-sky-900 p-8 px-4 xl:h-full xl:w-1/2 xl:p-10",
				isLoading && "items-center justify-center",
			)}
		>
			{isLoading ? (
				<Loader className="size-10" />
			) : (
				<>
					<header className="text-white">
						<span>Saldo total</span>
						<div className="flex items-center gap-2">
							<strong className={cn(!showingValues && "blur-md")}>
								R$ 100,00
							</strong>
							<button
								onClick={toggleShowingValues}
								className="size-12 p-[14px]"
							>
								<EyeIcon open={showingValues} />
							</button>
						</div>
					</header>
					<div className="flex  flex-1 flex-col justify-end gap-4 ">
						<div>
							<Swiper slidesPerView={width < 500 ? 1.1 : 2.1} spaceBetween={16}>
								<header
									className="mb-4 flex h-12 w-full items-center justify-between"
									slot="container-start"
								>
									<h4 className=" text-[18px] font-bold tracking-[-1px] text-white ">
										Minhas Contas
									</h4>
									{data && data.length > 0 && <AccountSliderNav />}
								</header>
								{data && data.length > 0 ? (
									<>
										<SwiperSlide>
											<AccountCard
												bank="Nubank"
												balance={123.0}
												icon={<BankAccountTypeIcon type="CASH" />}
											/>
										</SwiperSlide>

										<SwiperSlide>
											<AccountCard
												bank="Nubank"
												balance={500.0}
												icon={<BankAccountTypeIcon type="INVESTMENT" />}
											/>
										</SwiperSlide>

										<SwiperSlide>
											<AccountCard
												bank="Nubank"
												balance={1000.0}
												icon={<BankAccountTypeIcon type="CASH" />}
											/>
										</SwiperSlide>
									</>
								) : (
									<div className="flex min-h-[200px] items-center justify-center rounded-2xl  border-2 border-dashed border-blue-900">
										<button
											onClick={openFabModal}
											className="flex flex-col items-center justify-center gap-4 text-white/80"
										>
											<PlusCircleIcon className="size-10" />
											<span className="font-medium">
												Cadastre uma nova conta
											</span>
										</button>
									</div>
								)}
							</Swiper>
						</div>
					</div>
				</>
			)}
		</section>
	);
}
