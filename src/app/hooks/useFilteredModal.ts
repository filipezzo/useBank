import { useState } from "react";
const getYear = new Date().getFullYear();

export const useFilteredModal = () => {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [selectedYear, setSelectedYear] = useState(getYear);

	const onSelectedId = (newId: string) =>
		setSelectedId((prev) => (prev === newId ? null : newId));

	const onSelectYear = (step: number) => {
		setSelectedYear((prev) => prev + step);
	};

	return {
		selectedId,
		onSelectedId,
		selectedYear,
		onSelectYear,
	};
};
