import { createContext, useCallback, useState } from "react";

interface DashboardProps {
	showingValues: boolean;
	toggleShowingValues(): void;
	openFabModal(): void;
	closeFabModal(): void;
	isFabModalOpen: boolean;
	isTransactionModalOpen: boolean;
	openTransactionModal(type: "income" | "expense" | null): void;
	closeTransactionModal(): void;
	transactionType: "income" | "expense" | null;
}

export const DashboardContext = createContext({} as DashboardProps);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
	const [showingValues, setShowingValues] = useState(true);
	const [isFabModalOpen, setIsFabModalOpen] = useState(false);
	const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(true);
	const [transactionType, setTransactionType] = useState<
		"income" | "expense" | null
	>(null);

	const openTransactionModal = useCallback(
		(type: "income" | "expense" | null) => {
			setIsTransactionModalOpen(true);
			setTransactionType(type);
		},
		[],
	);

	const closeTransactionModal = useCallback(() => {
		setIsTransactionModalOpen(false);
		setTransactionType(null);
	}, []);

	const toggleShowingValues = useCallback(() => {
		setShowingValues((prev) => !prev);
	}, []);

	const openFabModal = useCallback(() => {
		setIsFabModalOpen(true);
	}, []);

	const closeFabModal = useCallback(() => {
		setIsFabModalOpen(false);
	}, []);

	return (
		<DashboardContext.Provider
			value={{
				showingValues,
				toggleShowingValues,
				closeFabModal,
				openFabModal,
				isFabModalOpen,
				isTransactionModalOpen,
				closeTransactionModal,
				openTransactionModal,
				transactionType,
			}}
		>
			{children}
		</DashboardContext.Provider>
	);
}
