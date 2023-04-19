import React from "react";
import "./styles/_globalstyle.css";
import { typography } from "./styles/mixins/typography";
import Hero from "./sections/hero";
import Info from "./sections/info";
import Register from "./sections/register";

const App: React.FC = () => {
	return (
		<main className="h-fit flex flex-col">
			<Hero />
			<Info />
			<Register />
		</main>
	);
};

export default App;
