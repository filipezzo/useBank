import { NumericFormat } from "react-number-format";
import { cn } from "../../app/utils/cn";

interface InputCurrency {
	className?: string;
}

function InputCurrency({ className }: InputCurrency) {
	return (
		<NumericFormat
			className={cn(
				"w-full flex-1 text-[32px] font-bold text-gray-800 outline-none",
				className,
			)}
			thousandSeparator="."
			decimalSeparator=","
			defaultValue="0.00"
		/>
	);
}

export default InputCurrency;
