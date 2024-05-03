import { useState } from "react";

export function useTransactionsController() {
	const [isFilteredModalOpen, setIsFilteredModalOpen] = useState(false);
	const onOpenFilteredModal = () => setIsFilteredModalOpen(true);
	const onCloseFilteredModal = () => setIsFilteredModalOpen(false);

	return {
		isLoading: false,
		initialLoading: false,
		transactions: [],
		onOpenFilteredModal,
		onCloseFilteredModal,
		isFilteredModalOpen,
	};
}
