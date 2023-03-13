import { FC } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Main, PassFail, Setting, TimeTrace } from "./pages";
import { PopupPage } from "./pages/popup";

export const Router: FC = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Layout children={undefined} />}>
					<Route index element={<Main />} />
					<Route path="timeTrace" element={<TimeTrace />} />
					<Route path="passFail" element={<PassFail />} />
					<Route path="setting" element={<Setting />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};
