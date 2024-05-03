import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface IModal {
	open: boolean;
	title: string;
	right?: React.ReactNode;
	children?: React.ReactNode;
	onClose(): void;
}

export function Modal({ open, title, right, children, onClose }: IModal) {
	return (
		<Dialog.Root open={open} onOpenChange={onClose}>
			<Dialog.Trigger />
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-overlayShow" />
				<Dialog.Content className="fixed left-1/2 top-1/2 z-[51] w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-md outline-none data-[state=open]:animate-contentShow ">
					<header className="flex h-12 items-center justify-between">
						<button
							onClick={onClose}
							className="flex h-12 items-center justify-center outline-none"
						>
							<X />
						</button>
						<h4 className="text-lg font-medium text-gray-800 ">{title}</h4>
						<div className="flex items-center justify-center outline-none">
							{right}
						</div>
					</header>
					<div>{children}</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export default Modal;
