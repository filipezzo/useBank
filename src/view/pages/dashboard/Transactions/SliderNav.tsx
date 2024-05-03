import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useSwiper } from "swiper/react";

export function SliderNav() {
	const swiper = useSwiper();
	return (
		<>
			<button
				onClick={() => swiper.slidePrev()}
				className="absolute left-0 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center  bg-gradient-to-r from-gray-400 to-transparent"
			>
				<ChevronLeftIcon className="text-gray-800" />
			</button>
			<button
				onClick={() => swiper.slideNext()}
				className="absolute right-0 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center  bg-gradient-to-l from-gray-400 to-transparent"
			>
				<ChevronRightIcon className="text-gray-800" />
			</button>
		</>
	);
}
