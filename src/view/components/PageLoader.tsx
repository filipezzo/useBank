import { Loader } from "./Loader";

export function PageLoader() {
	return (
		<div className="fixed left-0 top-0 flex h-full w-full items-center justify-center ">
			<Loader className="size-28 border-t-blue-500 text-blue-500" />
		</div>
	);
}
