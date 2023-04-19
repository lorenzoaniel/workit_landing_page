import React from "react";
import { button } from "../../styles/mixins/button";

interface Props {
	isPrimary: boolean;
	title: string;
	width: string;
}

const Button: React.FC<Props> = ({ isPrimary, title, width }) => {
	return (
		<button className={`${isPrimary ? button.primary : button.secondary} ${width} `}>
			{title}
		</button>
	);
};

export default Button;
