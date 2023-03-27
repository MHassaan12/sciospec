import React, { FC, useState } from "react";
import { CIcon, LIcon, RCIcon, RCParIcon, ResistorIcon, RIcon, RLIcon, RLParIcon, SciospecLogo, ZphiIcon, ZrealImagIcon } from "../assets/SvgIcons";
import { SymbolModel, TextButton, ToggleButton } from "../components";

const modelData = [
	<ZphiIcon width={100} height={100} />,
	<ZrealImagIcon width={100} height={100} />,
	<LIcon width={100} height={100} />,
	<CIcon width={100} height={100} />,
	<RIcon width={100} height={100} />,
	<RCParIcon width={100} height={100} />,
	<RLParIcon width={100} height={100} />,
	<RCIcon width={100} height={100} />,
	<RLIcon width={100} height={100} />,
];

const MainPage: FC = () => {
	const [modelOne, setModelOne] = useState(false);
	const [modelTwo, setModelTwo] = useState(false);
	const [select, setSelect] = useState(0);
	return (
		<div className="h-full flex flex-col justify-center items-start text-2xl text-white">
			<div className={`w-[100%] ${modelTwo ? "hidden" : "block"}`}>
				<div className="w-[100%] flex">
					<div
						className="flex items-center w-[72%] border-4 border-custom-primary m-4"
						onClick={() => setModelOne((prev) => !prev)}
					>
						<div className="w-[20%] bg-custom-primary pb-10 text-center">
							<div className="text-7xl ">
								R{/* <sub className="z-0">p</sub> */}
							</div>
							<div className="text-7xl mt-5">
								C{/* <sub>p</sub> */}
							</div>
						</div>
						<div className="w-[70%] text-center">
							<div className="text-7xl ml-28 ">
								<div>
									42.344
									<span className="ml-14">&#937;</span>
								</div>
								<div className="text-lg text-zinc-400 text-end mr-40">
									<span>&#177;</span>
									0.08%
									<span className="ml-1">&#177;</span>1
									<span className="ml-1">m&#937;</span>
								</div>
							</div>
							<div className="text-7xl ml-36">
								2.701 <span className="ml-6">pF</span>
								<div className="text-lg text-zinc-400 text-end mr-40">
									<span>&#177;</span>
									3.42%
									<span className="ml-1">&#177;</span>0.1
									<span className="ml-1">pF</span>
								</div>
							</div>
						</div>
					</div>
					<div
						className={`${
							modelOne ? "block" : "hidden"
						} ml-8 m-4 flex flex-col justify-between`}
					>
						<div className="">
							<p className="">show error:</p>
							<div className="block">

							<ToggleButton />
							</div>
							{/* <div className="text-4xl py-1">
								<span className="bg-custom-primary border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green justify-end">
									<span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow">
										<span className="text-sm">ON</span>
									</span>
								</span>
							</div> */}
						</div>

						<TextButton text="OK" bgColor="bg-custom-main" />
					</div>
				</div>
				<div
					className={` ${
						modelOne ? "block" : "hidden"
					} m-4 transition-all duration-500 pb-12`}
				>
					<h1 className="text-4xl">select model:</h1>
					<div className="flex mt-8">
						{/* <SymbolModel
							data={[<ResistorIcon />, <ResistorIcon />]}
						/> */}
						{modelData.map((item, index) => (
							<SymbolModel
								key={index}
								icon={item}
								index={index}
								select={select}
								setSelect={setSelect}
								children={
									<div className="text-2xl ">| Z |</div>
								}
							/>
						))}
						{/* <SymbolModel
							icon={<ResistorIcon />}
							select={select}
							setSelect={setSelect}
						/> */}
					</div>
				</div>
			</div>
			<div className={`w-[100%] ${modelOne ? "hidden" : "block"}`}>
				<div
					className={` ${
						modelTwo ? "block" : "hidden"
					} m-4 transition-all duration-500`}
				>
					<h1 className="text-4xl">select model:</h1>
					<div className="flex mt-8 mb-16">
						{/* <SymbolModel
							data={[<ResistorIcon />, <ResistorIcon />]}
						/> */}
						{modelData.map((item, index) => (
							<SymbolModel
								key={index}
								icon={item}
								index={index}
								select={select}
								setSelect={setSelect}
								children={
									<div className="text-2xl ">| Z |</div>
								}
							/>
						))}
						{/* <SymbolModel
							icon={<ResistorIcon />}
							select={select}
							setSelect={setSelect}
						/> */}
					</div>
				</div>
				<div className="w-[100%] flex">
					<div
						className="flex items-center w-[72%] border-4 border-custom-primary m-4"
						onClick={() => setModelTwo((prev) => !prev)}
					>
						<div className="w-[20%] bg-custom-primary pb-10 text-center">
							<div className="text-7xl ">| Z |</div>
							<div className="text-7xl mt-5">&#8861;</div>
						</div>
						<div className="w-[70%] text-center">
							<div className="text-7xl ml-28 ">
								<div>
									41.004
									<span className="ml-14">&#937;</span>
								</div>
							</div>
							<div className="text-7xl ml-32 mt-6">
								-8.701 <span className="ml-16">&#176;</span>
							</div>
						</div>
					</div>
					<div
						className={`${
							modelTwo ? "block" : "hidden"
						} ml-8 m-4 flex flex-col justify-between`}
					>
						<TextButton text="OK" bgColor="bg-custom-main" />

						<div className="">
							<p className="">show error:</p>
							<ToggleButton />
							{/* <div className="text-4xl py-1">
								<span className="bg-custom-primary border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green justify-end">
									<span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow">
										<span className="text-sm">ON</span>
									</span>
								</span>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;


