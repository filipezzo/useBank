import { DashboardProvider } from "../../../app/contexts/DashboardContext";
import { Logo } from "../../components/Logo";
import UserMenu from "../../components/UserMenu";
import { Accounts } from "./Account/Accounts";
import { Transactions } from "./Transactions/Transactions";

export function Dashboard() {
	return (
		<DashboardProvider>
			<div className="flex h-full w-full flex-col gap-2 p-4 xl:gap-4 xl:p-8 xl:pt-6">
				<header className="flex h-12 items-center justify-between">
					<Logo className="h-6" />
					<UserMenu />
				</header>
				<main className="flex max-h-full flex-1 flex-col gap-2    xl:flex-row">
					<Accounts />
					<Transactions />
				</main>
			</div>
		</DashboardProvider>
	);
}
