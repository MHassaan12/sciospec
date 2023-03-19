import React, { FC, useState } from "react";
import { ResistorIcon } from "../assets/SvgIcons";

type Props = {
	select: any;
	setSelect: any;
	icon: any;
	index: number,
	children: any
};

const SymbolModel: FC<Props> = ({children, index, icon, select, setSelect }) => {
	return (
		<div className="mr-2 " onClick={() => setSelect(index)}>
			<div
				className={`w-[100px] h-[92px] flex flex-col justify-center items-center ${
					select === index ? "bg-custom-primary" : "bg-custom-main"
				}`}
			>
				{icon}
				{/* <div className="mb-4">{children}</div> */}
			</div>
		</div>
	);
};

export default SymbolModel;
