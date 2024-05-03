import * as RdxDropdown from "@radix-ui/react-dropdown-menu";
import { cn } from "../../app/utils/cn";

function DropDownMenuRoot({ children }: { children: React.ReactNode }) {
	return <RdxDropdown.Root>{children}</RdxDropdown.Root>;
}

function DropDownMenuTrigger({ children }: { children: React.ReactNode }) {
	return (
		<RdxDropdown.Trigger className="outline-none" asChild>
			{children}
		</RdxDropdown.Trigger>
	);
}

interface ContentProps {
	children: React.ReactNode;
	className?: string;
}

function DropDownMenuContent({ children, className }: ContentProps) {
	return (
		<RdxDropdown.Portal>
			<RdxDropdown.Content
				className={cn(
					"flex flex-col gap-2 rounded-2xl bg-white p-2 text-sm text-gray-800",
					className,
				)}
			>
				{children}
			</RdxDropdown.Content>
		</RdxDropdown.Portal>
	);
}

interface ItemProps {
	children: React.ReactNode;
	className?: string;
	onSelect?: () => void;
}

function DropDownMenuItem({ children, className, onSelect }: ItemProps) {
	return (
		<RdxDropdown.Item
			onSelect={onSelect}
			className={cn(
				"z-10 flex min-h-10 cursor-pointer items-center rounded-2xl px-4 py-2 outline-none transition-colors data-[highlighted]:bg-gray-50",
				className,
			)}
		>
			{children}
		</RdxDropdown.Item>
	);
}

export const DropdownMenu = {
	Root: DropDownMenuRoot,
	Trigger: DropDownMenuTrigger,
	Content: DropDownMenuContent,
	Item: DropDownMenuItem,
};
