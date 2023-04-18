import React from "react";
import { button } from "../../styles/mixins/button";

interface Props {
	isPrimary: boolean;
}

const Button: React.FC<Props> = ({ isPrimary }) => {
	return (
		<button
			className={`${
				isPrimary ? button.primary : button.secondary
			} flex justify-center items-end border-b-[0.3rem] border-green`}
		>
			Apply for access
		</button>
	);
};

export default Button;
