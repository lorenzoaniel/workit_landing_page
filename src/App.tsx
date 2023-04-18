import React from "react";
import "./styles/_globalstyle.css";
import { typography } from "./styles/mixins/typography";
import Hero from "./sections/hero";

const App: React.FC = () => {
	return (
		<main className="h-full">
			<Hero />
		</main>
	);
};

export default App;
