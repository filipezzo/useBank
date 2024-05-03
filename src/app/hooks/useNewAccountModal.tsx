import { useDashboard } from "./useDashboard";

export function useNewAccountModal() {
	const { isFabModalOpen, closeFabModal, openFabModal } = useDashboard();

	return {
		isFabModalOpen,
		closeFabModal,
		openFabModal,
	};
}
