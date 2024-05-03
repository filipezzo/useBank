import * as Select from "@radix-ui/react-select";

import { ChevronDown, CircleX } from "lucide-react";
import { cn } from "../../app/utils/cn";

interface ISelect {
	error?: string;
	options: {
		value: string;
		label: string;
	}[];
	placeholder?: string;
}

export const RdxSelect = ({ error, options, placeholder }: ISelect) => (
	<div>
		<Select.Root>
			<Select.Trigger
				className={cn(
					"peer relative h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3  text-left text-gray-800 outline-none transition-all placeholder-shown:pt-0 focus:border-blue-900",
					error && "!border-rose-500",
				)}
			>
				<Select.Value placeholder={placeholder} />
				<Select.Icon className="absolute  right-3 top-1/2 -translate-y-1/2">
					<ChevronDown />
				</Select.Icon>
			</Select.Trigger>
			<Select.Portal>
				<Select.Content className="z-[99] rounded-2xl bg-white p-2 shadow-md">
					<Select.Viewport className="w-full  p-2">
						{options.map(({ label, value }) => (
							<Select.SelectItem
								key={value}
								className="rounded-xl p-2 outline-none data-[highlighted]:bg-gray-100 data-[state=checked]:font-bold "
								value={value}
							>
								<Select.ItemText>{label}</Select.ItemText>
							</Select.SelectItem>
						))}
					</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>

		{error && (
			<div className="mt-4 flex items-center gap-2 text-sm text-rose-500">
				<CircleX size={14} />
				<span>{error}</span>
			</div>
		)}
	</div>
);
