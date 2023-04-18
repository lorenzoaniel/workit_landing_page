import React from "react";
import darklogo from "../../assets/images/logo-dark.svg";
import lightlogo from "../../assets/images/logo-light.svg";

interface Props {
	dark: boolean;
}

const Logo: React.FC<Props> = ({ dark }) => {
	return (
		<div className="h-[2.461rem] w-[9.576rem] flex justify-center items-center">
			<img
				src={dark ? darklogo : lightlogo}
				alt={dark ? "workit logo dark purple color" : "workit logo white color"}
			/>
		</div>
	);
};

export default Logo;
