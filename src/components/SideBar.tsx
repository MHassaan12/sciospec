import React, { FC, useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { IconSetting, PlayIcon } from "../assets/SvgIcons";
import ToggleButton from "./buttons/ToggleButton";
// const { ipcRenderer } = window.require("electron");

const SideBar: FC = () => {
	const [showSidebar, setShowSidebar] = useState(true);
	const [settingOpen, setSettingOpen] = useState(false);
	const [button, setButton] = useState(true);
	const [isActive, setIsActive] = useState(false)

	// useEffect(() => {
	// const storeValue = window.electron.store.get('myKey')
	// 	console.log("sotre vlauesss ::::::::::;;;", storeValue);

	// }, [])
	

	return (
		<div className={`w-100 h-full flex fixed`}>
			<div
				className={`fixed w-[100%] h-[78%] top-[11%] bg-custom-main  flex-col justify-between items-start py-4`}
				style={{ display: settingOpen ? "flex" : "none" }}
			>
				<div className="ml-4 text-white">
					<div className="grid grid-cols-12 ">
						<div className="col-span-3">
							<p className="ml-2 text-2xl">port configuration</p>
						</div>
						<div className="text-4xl py-1 flex col-span-9 ml-4">
							<select className="bg-neutral-400 bg-opacity-25 border-[1.5px] border-gray-300 text-white text-lg rounded-lg block w-20 p-1 text-center ">
								<option selected>4 pt</option>
							</select>
							<select className="bg-neutral-400 bg-opacity-25 border-[1.5px]  border-gray-300 text-white text-lg rounded-lg block w-24 p-1 text-center ml-4 ">
								<option selected>BNC</option>
							</select>
							<span className="bg-neutral-400 bg-opacity-25 border  border-gray-300 text-white text-lg rounded-lg block w-9 p-1 text-center ml-4 ">
								<IconSetting width="26" height="26" />
							</span>
						</div>
					</div>
					<div className="grid grid-cols-12">
						<div className="col-span-3">
							<p className="ml-2 text-2xl">integration time</p>
						</div>
						<div className="text-4xl py-1  flex col-span-9 ml-4">
							<input
								type="text"
								value="2 s"
								className=" text-xl rounded-lg w-20 border-[1.5px] border-gray-300 bg-black text-white text-end p-1"
							/>
						</div>
					</div>
					<div className="grid grid-cols-12">
						<div className="col-span-3">
							<p className="ml-2 text-2xl">averaging</p>
						</div>
						<div className="text-4xl py-1  flex col-span-9 ml-4">
							<span className="bg-custom-primary border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green justify-end">
								<span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow">
									{/* <span className="text-sm">ON</span> */}
								</span>
							</span>
							<select className="bg-neutral-400 bg-opacity-25 border-[1.5px]  border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center ml-4">
								<option selected>continuous</option>
							</select>
							<input
								type="text"
								value="12"
								className=" text-xl rounded-lg w-12 border-[1.5px] border-gray-300 bg-black text-white text-end p-1 ml-4"
							/>
							<span className="ml-2 text-xl">samples</span>
						</div>
					</div>
					<div className="grid grid-cols-12">
						<div className="col-span-3">
							<p className="ml-2 text-2xl">compensation</p>
						</div>
						<div className="text-lg py-1 flex col-span-9 ml-4">
							<select className="bg-neutral-400 bg-opacity-25 border-[1.5px]  border-gray-300 text-white text-lg rounded-lg block w-40 p-1 text-center ">
								<option selected>open-short-load</option>
							</select>
							<span className="bg-custom-primary border-[1.5px] border-gray-300 rounded-lg px-2 ml-4">
								measure
							</span>
							<span className="bg-custom-primary border-[1.5px] border-gray-300 rounded-lg px-2 ml-4">
								load
							</span>
							<span className="bg-custom-primary border-[1.5px] border-gray-300 rounded-lg px-2 ml-4">
								save
							</span>
						</div>
					</div>
				</div>
				<div className="w-[100%] flex justify-center text-white">
					<span className="bg-custom-primary border-[1.5px] border-gray-300 rounded-lg px-2 py-1.5 ">
						save to file
					</span>
					<span className="bg-custom-primary border-[1.5px] border-gray-300  rounded-lg ml-2 px-2 py-1.5 ">
						load from file
					</span>
					<span className="bg-custom-primary border-[1.5px] border-gray-300 rounded-lg ml-2 px-2 py-1.5 ">
						copy from preset
					</span>
					<span className="ml-2">
						<select
							id="countries"
							className="bg-custom-main border-[1.5px] border-gray-300 text-white text-lg rounded-lg block w-10 p-1 text-center "
						>
							<option selected>3</option>
						</select>
					</span>
				</div>
			</div>
			<div
				className={`fixed top-[13%] right-0 h-[72%] w-[18%] border-t-4 border-zinc-300 bg-custom-main  text-white  z-40  ease-in-out duration-300 ${
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
						className="relative -left-8 top-[25%] py-6 h-60 bg-custom-main rounded-tl-xl rounded-bl-xl flex"
						onClick={() => setShowSidebar((prev) => !prev)}
					>
						<div className="[writing-mode:vertical-lr] flex">
							<span className="ml-1 mb-8">
								<BiLeftArrow
									size={24}
									color="#e0e0e0"
									fill="#e0e0e0"
								/>
							</span>
							<div className="text-white text-2xl rotate-180 -ml-1">
								settings
							</div>
						</div>
					</span>
				)}
				<div className="p-1 border-b-2">
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

				<div className="p-1 border-b-2">
					<p className="ml-2">voltage level:</p>
					<div className="text-4xl py-1">
						100 mV
						<sub>pp</sub>
					</div>
				</div>
				<div className="p-1 border-b-2">
					<p className="ml-2">frequency:</p>
					<div className="text-4xl py-1">1 kHz</div>
				</div>

				<div className="p-1  border-b-2 flex">
					<span className="ml-2">
						<p className="ml-2">range:</p>
						<div className="text-4xl py-1">
							<select className="bg-neutral-400 bg-opacity-25 border-[1.5px] border-gray-300 text-white text-xl rounded-lg block w-28 p-1 text-center ">
								<option selected>10 mA</option>
							</select>
						</div>
					</span>
					<span className="ml-6">
						<p className="ml-2">auto:</p>
						<div className="text-4xl py-1">
							<ToggleButton/>
							{/* <span className="bg-custom-primary border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green justify-end">
								<span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow">
									<span className="text-sm">ON</span>
								</span>
							</span> */}
						</div>
					</span>
				</div>
				<div className="p-1 border-b-2 flex">
					<span className="ml-2">
						<p className="ml-2">trigger:</p>
						<div className="text-4xl py-1">
							<select className="bg-neutral-400 bg-opacity-25 border-[1.5px] border-gray-300 text-xl rounded-lg block w-28 p-1 text-center ">
								<option selected>manual</option>
							</select>
						</div>
					</span>
					<span className="flex items-end p-1">
						<button
							className={` text-white rounded-xl px-5	 py-2 text-center bg-custom-primary border-[1.5px] border-gray-300 ml-3`}
						>
							<PlayIcon width="10mm" height="10mm" />
						</button>
					</span>
				</div>
				<div className="p-2 ">
					<button
						className={`bg-custom-main ml-1 border border-gray-300 text-white text-lg rounded-lg w-32 p-1 text-center`}
						style={{ display: settingOpen ? "none" : "block" }}
						onClick={() => setSettingOpen((prev) => !prev)}
					>
						more settings
					</button>
					<button
						className={` text-white text-5xl rounded-lg px-10 py-2 text-center bg-custom-primary border border-white `}
						style={{ display: settingOpen ? "block" : "none" }}
						onClick={() => setSettingOpen((prev) => !prev)}
					>
						<span className="inline-block">OK</span>
					</button>

					{/* <button
							className="bg-custom-main ml-1 border border-gray-300 text-white text-lg rounded-lg block w-32 p-1 text-center"
							onClick={() => setSettingOpen((prev) => !prev)}
						>
							ok
						</button> */}
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
