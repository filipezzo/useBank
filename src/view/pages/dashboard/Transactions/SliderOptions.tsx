import { useSwiper } from "swiper/react";
import { cn } from "../../../../app/utils/cn";

interface SliderProps {
	month: string;
	index: number;
	isActive: boolean;
}
export function SliderOptions({ month, index, isActive }: SliderProps) {
	const slider = useSwiper();
	return (
		<button
			onClick={() => slider.slideTo(index)}
			className={cn(
				"mx-6 h-12 w-full max-w-40 rounded-full font-medium  text-gray-700",
				isActive && "bg-white",
			)}
		>
			{month}
		</button>
	);
}
