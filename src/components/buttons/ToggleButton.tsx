import React, { useState } from "react";

type Props = {}

const ToggleButton = (props: Props) => {
  const [isActive, setIsActive] = useState(false)
  return (
		<label className="flex items-center relative w-max cursor-pointer select-none ">
			<input
				type="checkbox"
				className={`appearance-none transition-colors cursor-pointer w-14 h-7 border-[1.5px] border-gray-300 rounded-full  ${
					isActive ? "bg-custom-main" : "bg-custom-primary"
				}`}
				onChange={() => setIsActive((prev) => !prev)}
			/>
			{!isActive ? (
				<span className="absolute font-medium text-xs uppercase right-8 text-white">
					{" "}
					ON{" "}
				</span>
			) : (
				<span className="absolute font-medium text-xs uppercase right-1 text-white">
					{" "}
					OFF{" "}
				</span>
			)}
			<span
				className={`w-7 h-7 absolute rounded-full transform transition-transform bg-gray-200  ${
					isActive
						? "right-7 translate-x-0 "
						: "right-0 translate-x-1"
				}`}
			/>
		</label>
  );
}

export default ToggleButton