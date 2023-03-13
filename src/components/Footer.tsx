import React, { FC } from "react";
import { SciospecLogo } from "../assets/SvgIcons";

const Footer: FC = () => {
	return (
		<div className="mt-auto bg-custom-main h-18 flex justify-between">
			<div className="flex flex-col">
				<div className="text-lg text-white mt-2 ml-2">
					<span className="px-4 border-2 border-green-600 rounded-lg mx-2">
						USB
					</span>
					<span className="px-8 border-2 border-custom-orange rounded-lg mx-2">
						idle
					</span>
					<span className="px-2 bg-red-600 rounded-lg mx-2">
						out of range
					</span>
				</div>
				<div className="text-lg text-white ml-4">
					<span>integration time: 1s</span>
					<span>averaging: cont. 12 samples</span>
				</div>
			</div>
			<SciospecLogo width="172" height="62" />
		</div>
	);
};

export default Footer;
