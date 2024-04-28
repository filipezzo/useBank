import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwiper } from "swiper/react";

export function AccountSliderNav() {
	const swiper = useSwiper();
	return (
		<div className="flex items-center">
			<button
				onClick={() => swiper.slidePrev()}
				className="flex items-center justify-center rounded-full py-3 pl-2.5 pr-3.5 transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
			>
				<ChevronLeft className="text-white" size={24} />
			</button>
			<button
				onClick={() => swiper.slideNext()}
				className="flex items-center justify-center rounded-full py-3 pl-2.5 pr-3.5 transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
			>
				<ChevronRight className="text-white" size={24} />
			</button>
		</div>
	);
}
