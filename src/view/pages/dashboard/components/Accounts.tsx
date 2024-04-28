import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { BankAccountTypeIcon } from "../../../components/icons/BankAccountTypeIcon";
import { EyeIcon } from "../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { AccountSliderNav } from "./AccountSliderNav";
export function Accounts() {
	return (
		<section className="flex h-[420px] w-full flex-col  rounded-2xl border bg-sky-900 p-8 px-4 xl:h-full xl:w-1/2 xl:p-10">
			<header className="text-white">
				<span>Saldo total</span>
				<div className="flex items-center gap-2">
					<strong>R$ 100,00</strong>
					<button className="size-12 p-[14px]">
						<EyeIcon open={false} />
					</button>
				</div>
			</header>
			<div className="flex  flex-1 flex-col justify-end gap-4 ">
				<div>
					<Swiper slidesPerView={2.2} spaceBetween={16}>
						<header
							className="mb-4 flex h-12 w-full items-center justify-between"
							slot="container-start"
						>
							<h4 className=" text-[18px] font-bold tracking-[-1px] text-white ">
								Minhas Contas
							</h4>
							<AccountSliderNav />
						</header>

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
					</Swiper>
				</div>
			</div>
		</section>
	);
}
