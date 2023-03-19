import React, { FC, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const SideBar: FC = () => {
	const [showSidebar, setShowSidebar] = useState(true);
	const [settingOpen, setSettingOpen] = useState(true);

	return (
		<div className={`w-100 h-full flex fixed`}>
			<div
				className={`fixed w-[100%] h-[78%] top-[11%] bg-custom-main flex flex-col justify-between`}
				style={{ display: settingOpen ? "block" : "none" }}
			>
				<div className="ml-4 mt-8 text-white">
					<div className="grid grid-cols-12 ">
						<div className="col-span-3">
							<p className="ml-2 text-2xl">port configuration</p>
						</div>
						<div className="text-4xl py-1 flex col-span-9">
							<select
								id="countries"
								className="bg-custom-main border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center "
							>
								<option selected>4 pt</option>
							</select>
							<select
								id="countries"
								className="bg-custom-main border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center ml-4 "
							>
								<option selected>BNC</option>
							</select>
						</div>
					</div>
					<div className="grid grid-cols-12">
						<div className="col-span-3">
							<p className="ml-2 text-2xl">integration time</p>
						</div>
						<div className="text-4xl py-1  flex col-span-9">
							<select
								id="countries"
								className="bg-custom-main border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center "
							>
								<option selected>4 pt</option>
							</select>
							<select
								id="countries"
								className="bg-custom-main border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center ml-4 "
							>
								<option selected>BNC</option>
							</select>
						</div>
					</div>
					<div className="grid grid-cols-12">
						<div className="col-span-3">
							<p className="ml-2 text-2xl">averaging</p>
						</div>
						<div className="text-4xl py-1  flex col-span-9">
							<select
								id="countries"
								className="bg-custom-main border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center "
							>
								<option selected>4 pt</option>
							</select>
							<select
								id="countries"
								className="bg-custom-main border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center ml-4 "
							>
								<option selected>BNC</option>
							</select>
						</div>
					</div>
					<div className="grid grid-cols-12">
						<div className="col-span-3">
							<p className="ml-2 text-2xl">compensation</p>
						</div>
						<div className="text-4xl py-1  flex col-span-9">
							<select
								id="countries"
								className="bg-custom-main border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center "
							>
								<option selected>4 pt</option>
							</select>
							<select
								id="countries"
								className="bg-custom-main border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center ml-4 "
							>
								<option selected>BNC</option>
							</select>
						</div>
					</div>
				</div>
				<div>
					'sslkdlk'
				</div>
			</div>
			<div
				className={`fixed top-[14%] right-0 h-[72%] w-[22%] border-t-4 border-zinc-300 bg-custom-main  text-white  z-40  ease-in-out duration-300 ${
					showSidebar ? "translate-x-0 none" : "translate-x-full"
				}`}
			>
				{settingOpen ? (
					""
				) : showSidebar ? (
					<span
						className="absolute -left-8 -top-1 p-1 bg-zinc-300 rounded-tl-lg rounded-bl-lg"
						onClick={() => setShowSidebar((prev) => !prev)}
					>
						<BiRightArrow size={24} color="gray" fill="gray" />
					</span>
				) : (
					<span
						className="absolute -left-14 top-2/4 p-1 h-44 bg-custom-main rounded-tl-xl rounded-bl-xl flex"
						onClick={() => setShowSidebar((prev) => !prev)}
					>
						<BiLeftArrow size={24} color="#e0e0e0" fill="#e0e0e0" />
						<div className="text-white text-2xl -rotate-90">
							settings
						</div>
					</span>
				)}
				<div className="p-2 border-b-2">
					<p className="ml-2">presets:</p>
					<div>
						<button className="bg-custom-primary text-4xl py-1 px-3 border-t-8 border-custom-primary ml-2">
							1
						</button>
						<button className="bg-zinc-400 text-4xl py-1 px-3 border-t-8 border-custom-olive  ml-2">
							2
						</button>
						<button className="bg-zinc-400 text-4xl py-1 px-3 border-t-8 border-custom-orange ml-2">
							3
						</button>
						<button className="bg-zinc-400 text-4xl py-1 px-3 border-t-8 border-custom-saddleBrown ml-2">
							4
						</button>
					</div>
				</div>

				<div className="p-2 border-b-2">
					<p className="ml-2">voltage level:</p>
					<div className="text-4xl py-1">
						100 mV
						<sub>pp</sub>
					</div>
				</div>
				<div className="p-2 border-b-2">
					<p className="ml-2">frequency:</p>
					<div className="text-4xl py-1">1 kHz</div>
				</div>

				<div className="p-1  border-b-2 flex">
					<span className="ml-2">
						<p className="ml-2">range:</p>
						<div className="text-4xl py-1">
							<select
								id="countries"
								className="bg-custom-main border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center "
							>
								<option selected>10 mA</option>
							</select>
						</div>
					</span>
					<span className="ml-6">
						<p className="ml-2">auto:</p>
						<div className="text-4xl py-1">
							<span className="bg-custom-primary border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green justify-end">
								<span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow">
									{/* <span className="text-sm">ON</span> */}
								</span>
							</span>
						</div>
					</span>
				</div>
				<div className="p-1 border-b-2 flex">
					<span className="ml-2">
						<p className="ml-2">trigger:</p>
						<div className="text-4xl py-1">
							<select className="bg-custom-main border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center ">
								<option selected>manual</option>
							</select>
						</div>
					</span>
					{/* <span className="ml-6">
						<p className="ml-2">auto:</p>
						<div className="text-4xl py-1">
							<span className="bg-custom-primary border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green justify-end">
								<span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow">
									<span className="text-sm">ON</span>
								</span>
							</span>
						</div>
					</span> */}
				</div>
				<div className="p-2 ">
					<button
						className="bg-custom-main ml-1 border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center"
						onClick={() => setSettingOpen((prev) => !prev)}
					>
						more settings
					</button>
				</div>
			</div>
		</div>
	);
};

export default SideBar;

// <div
// 	className={`fixed top-[14%] right-0 h-[72%] w-[22%] border-t-4 border-zinc-300 bg-custom-main  text-white  z-40  ease-in-out duration-300 ${
// 		showSidebar ? "translate-x-0 none" : "translate-x-full"
// 	}`}
// >
// 	{showSidebar ? (
// 		<span
// 			className="absolute -left-8 -top-1 p-1 bg-zinc-300 rounded-tl-lg rounded-bl-lg"
// 			onClick={() => setShowSidebar((prev) => !prev)}
// 		>
// 			<BiRightArrow size={24} color="gray" fill="gray" />
// 		</span>
// 	) : (
// 		<span
// 			className="absolute -left-14 top-2/4 p-1 h-44 bg-custom-main rounded-tl-xl rounded-bl-xl flex"
// 			onClick={() => setShowSidebar((prev) => !prev)}
// 		>
// 			<BiLeftArrow size={24} color="#e0e0e0" fill="#e0e0e0" />
// 			<div className="text-white text-2xl -rotate-90">settings</div>
// 		</span>
// 	)}
// 	<div className="p-2 border-b-2">
// 		<p className="ml-2">presets:</p>
// 		<div>
// 			<button className="bg-custom-primary text-4xl py-1 px-3 border-t-8 border-custom-primary ml-2">
// 				1
// 			</button>
// 			<button className="bg-zinc-400 text-4xl py-1 px-3 border-t-8 border-custom-olive  ml-2">
// 				2
// 			</button>
// 			<button className="bg-zinc-400 text-4xl py-1 px-3 border-t-8 border-custom-orange ml-2">
// 				3
// 			</button>
// 			<button className="bg-zinc-400 text-4xl py-1 px-3 border-t-8 border-custom-saddleBrown ml-2">
// 				4
// 			</button>
// 		</div>
// 	</div>

// 	<div className="p-2 border-b-2">
// 		<p className="ml-2">voltage level:</p>
// 		<div className="text-4xl py-1">
// 			100 mV
// 			<sub>pp</sub>
// 		</div>
// 	</div>
// 	<div className="p-2 border-b-2">
// 		<p className="ml-2">frequency:</p>
// 		<div className="text-4xl py-1">1 kHz</div>
// 	</div>

// 	<div className="p-1  border-b-2 flex">
// 		<span className="ml-2">
// 			<p className="ml-2">range:</p>
// 			<div className="text-4xl py-1">
// 				<select
// 					id="countries"
// 					className="bg-custom-main border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center "
// 				>
// 					<option selected>10 mA</option>
// 				</select>
// 			</div>
// 		</span>
// 		<span className="ml-6">
// 			<p className="ml-2">auto:</p>
// 			<div className="text-4xl py-1">
// 				<span className="bg-custom-primary border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green justify-end">
// 					<span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow">
// 						{/* <span className="text-sm">ON</span> */}
// 					</span>
// 				</span>
// 			</div>
// 		</span>
// 	</div>
// 	<div className="p-1 border-b-2 flex">
// 		<span className="ml-2">
// 			<p className="ml-2">trigger:</p>
// 			<div className="text-4xl py-1">
// 				<select className="bg-custom-main border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center ">
// 					<option selected>manual</option>
// 				</select>
// 			</div>
// 		</span>
// 		{/* <span className="ml-6">
// 					<p className="ml-2">auto:</p>
// 					<div className="text-4xl py-1">
// 						<span className="bg-custom-primary border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green justify-end">
// 							<span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow">
// 								<span className="text-sm">ON</span>
// 							</span>
// 						</span>
// 					</div>
// 				</span> */}
// 	</div>
// 	<div className="p-2 ">
// 		<button className="bg-custom-main ml-1 border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center">
// 			more settings
// 		</button>
// 	</div>
// </div>;
