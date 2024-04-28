import { Logo } from "../../components/Logo";
import { Accounts } from "./components/Accounts";
import { Transactions } from "./components/Transactions";

export function Dashboard() {
	return (
		<div className="flex h-full w-full flex-col gap-2 p-4 xl:gap-4 xl:p-8 xl:pt-6">
			<header className="flex h-12 items-center justify-between">
				<Logo className="h-6" />
				<div className="flex size-12 items-center justify-center rounded-full bg-sky-800 ">
					<div className="text-[14px] font-bold uppercase text-gray-400">
						FA
					</div>
				</div>
			</header>
			<main className="flex flex-1 flex-col gap-2 border xl:flex-row">
				<Accounts />
				<Transactions />
			</main>
		</div>
	);
}
