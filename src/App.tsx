import React from "react";
import "./styles/_globalstyle.css";
import { typography } from "./styles/mixins/typography";
import Hero from "./sections/hero";

const App: React.FC = () => {
	return (
		<div className="h-full">
			<Hero />
		</div>
	);
};

export default App;
