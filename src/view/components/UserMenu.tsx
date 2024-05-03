import { LogOut } from "lucide-react";
import { useAuth } from "../../app/hooks/useAuth";
import { DropdownMenu } from "./DropdownMenu";

export function UserMenu() {
	const { signout, user } = useAuth();

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<div className="flex size-12 items-center justify-center rounded-full bg-sky-800 ">
					<div className="text-[14px] font-bold uppercase text-gray-400 shadow-md">
						{user?.email[0] || "U"}
					</div>
				</div>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content className="animate-slideUpAndFade mr-2 w-28">
				<DropdownMenu.Item
					onSelect={signout}
					className="flex items-center justify-between gap-1"
				>
					<LogOut className="size-4" />
					<p className="order-1">Sair</p>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}

export default UserMenu;
