import { Outlet } from "react-router-dom";
import { Logo } from "../components/Logo";

export function AuthLayout() {
	return (
		<div className="flex h-full w-full p-4 xl:p-0">
			<section className=" flex h-full w-full flex-col items-center justify-center  xl:w-1/2 ">
				<Logo className="mb-10 h-6 text-gray-500" />
				<section className="w-full max-w-xl  xl:max-w-md ">
					<Outlet />
				</section>
			</section>
			<section className="relative hidden  h-full w-1/2  items-center justify-center  p-8 xl:flex   ">
				<img
					className=" h-full max-h-[960px] w-full  max-w-[656px] rounded-[32px] object-cover shadow-md   "
					src="https://images.unsplash.com/photo-1541599468348-e96984315921?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="banner de ilustracao"
				/>
				<div className="absolute bottom-8  mx-4 max-w-[656px] rounded-b-[32px] bg-white px-10 py-12  ">
					<Logo />
					<p className="mt-6 text-xl font-medium text-gray-700">
						Gerencie suas finanças pessoais com o useBank. Elegante, funcional e
						0800 😎
					</p>
				</div>
			</section>
		</div>
	);
}
