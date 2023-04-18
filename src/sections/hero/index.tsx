import React from "react";
import Logo from "../../components/logo/Logo";
import Button from "../../components/button/Button";

const Hero: React.FC = () => {
	return (
		<section id="hero-section" className="h-[48.171rem] bg-darkpurple px-[1.6rem] pt-[3.2rem]">
			<div className="hero-section-logo-wrapper flex justify-between w-full h-[3.4rem]">
				<Logo dark={false} />
				<Button isPrimary={false} />
			</div>
		</section>
	);
};

export default Hero;
