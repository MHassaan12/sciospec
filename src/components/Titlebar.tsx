import { FC, useEffect, useState } from "react";
import {
	IoCloseOutline,
	IoContractOutline,
	IoExpandOutline,
	IoHome,
	IoRemove,
} from "react-icons/io5";
import { ImHome } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
// import Amethyst from "../../assets/SciospecWaves.svg";
import { ReactSVG } from "react-svg";
import {
	IconBalance,
	IconDiagnosticPulse,
	IconHome,
	IconQuestionMark,
	IconSetting,
	SciospecIcon,
	SciospecWavesLogo,
} from "../assets/SvgIcons";

const { getCurrentWindow, app } = window.require("@electron/remote");

const Titlebar: FC = () => {
	const currentWindow = getCurrentWindow();
	const [maximized, setMaximized] = useState(currentWindow.isMaximized());

	// useEffect(() => {
	// 	const icon = document.getElementById("icon") as HTMLElement;
	// 	icon.ondragstart = () => false;
	// });

	const onMinimize = () => currentWindow.minimize();
	const onMaximize = () => {
		setMaximized(!currentWindow.isMaximized());
		currentWindow.isMaximized()
			? currentWindow.unmaximize()
			: currentWindow.maximize();
	};
	const onQuit = () => app.quit();

	return (
		<nav className="bg-custom-main border-b-4 border-neutral-400">
			<div className="max-w-7xl mx-auto ">
				<div className="relative flex items-center justify-between h-16">
					{/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<button
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="block h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							<svg
								className="hidden h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div> */}
					<div className="flex-1 h-full flex justify-center items-end ">
						<div className="flex-shrink-0 ml-2">
							<Link
								to="/"
								className="text-white text-xl font-bold leading-tight"
							>
								{/* <img src={Amethyst} /> */}
								<SciospecWavesLogo width="68" height="68" />
							</Link>
						</div>
						<div className="">
							<div className="flex">
								<NavLink
									to="/"
									className={({ isActive }) =>
										`text-custom-main hover:bg-white hover:text-gray-500 px-10 py-1 rounded-t-md mx-1 border-x-2 border-t-2 border-neutral-400 ${
											isActive
												? "bg-white text-black"
												: "bg-neutral-400"
										}`
									}
								>
									<IconHome width="52" height="52" />
								</NavLink>
								<NavLink
									to="/timeTrace"
									className={({ isActive }) =>
										`text-custom-main hover:bg-white hover:text-gray-500 mx-1 px-10 py-1 rounded-t-md border-x-2 border-t-2 border-neutral-400 ${
											isActive
												? "bg-white text-black"
												: "bg-neutral-300"
										}`
									}
								>
									<IconDiagnosticPulse
										width="52"
										height="52"
									/>
								</NavLink>
								<NavLink
									to="/passFail"
									className={({ isActive }) =>
										`text-custom-main hover:bg-white hover:text-gray-500 mx-1 px-10 py-1 rounded-t-md border-x-2 border-t-2 border-neutral-400 ${
											isActive
												? "bg-white text-black"
												: "bg-neutral-300"
										}`
									}
								>
									<IconBalance width="52" height="52" />
								</NavLink>
								<NavLink
									to="/setting"
									className={({ isActive }) =>
										`text-custom-main hover:bg-white hover:text-gray-500 mx-1 px-10 py-1 rounded-t-md border-x-2 border-t-2 border-neutral-400 ${
											isActive
												? "bg-white text-black"
												: "bg-neutral-300"
										}`
									}
								>
									<IconSetting width="52" height="52" />
								</NavLink>
							</div>
						</div>
						<div className="window-controls-container flex-1 h-full flex ">
							<button
								title="Minimize"
								className="minimize-button rounded-full p-2 mb-2 mr-8 bg-neutral-400 focus:outline-none hover:bg-gray-700"
								onClick={onMinimize}
							>
								<IconQuestionMark
									width="26"
									height="26"
									fill="#fff"
								/>
							</button>

							<button
								title="Maximize"
								className="min-max-button focus:outline-none hover:bg-gray-700"
								onClick={onMaximize}
							>
								{maximized ? (
									<IoContractOutline />
								) : (
									<IoExpandOutline />
								)}
							</button>

							<button
								title="Close"
								className="close-button bg-zinc-400 focus:outline-none hover:bg-gray-700"
								onClick={onQuit}
							>
								<IoCloseOutline size={32} color="#787878" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Titlebar;
