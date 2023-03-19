import React, { FC } from "react";

type Props = {
	width?: any;
	height?: any;
	bgColor?: any;
	text: string;
};

const TextButton: FC<Props> = ({ text, bgColor }) => {
	return (
		<button
			className={`${bgColor} hover:${bgColor}-700 text-white text-5xl rounded px-14 py-5 text-center`}
		>
			<span className="inline-block ml-2">{text}</span>
		</button>
	);
};

export default TextButton;
