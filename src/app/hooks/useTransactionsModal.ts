import { useDashboard } from "./useDashboard";

export function useTransactionsModal() {
	const {
		isTransactionModalOpen,
		openTransactionModal,
		closeTransactionModal,
		transactionType,
	} = useDashboard();

	return {
		isTransactionModalOpen,
		closeTransactionModal,
		openTransactionModal,
		transactionType,
	};
}
