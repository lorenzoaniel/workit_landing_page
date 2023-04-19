import React from "react";
import Logo from "../../components/logo/Logo";
import Button from "../../components/button/Button";
import { typography } from "../../styles/mixins/typography";
import learnmorelogo from "../../assets/images/image-hero.webp";
import bgpattern1 from "../../assets/images/bg-pattern-1.svg";
import bgpattern2 from "../../assets/images/bg-pattern-2.svg";

const Hero: React.FC = () => {
	return (
		<section
			id="hero-section"
			className="relative h-fit z-[2] bg-ghostwhite px-[1.6rem] pt-[3.2rem] flex flex-col items-center gap-y-[6.4rem] md:px-[4rem] lg:px-[16.5rem] lg:pt-[5.6rem]"
		>
			<img
				className="hidden md:block hero-section-swirl absolute top-[7.1rem] left-[-22rem] lg:left-[-13rem] lg:top-[17%]"
				src={bgpattern1}
				alt="background swirl pattern"
			/>
			<img
				className="hidden md:block hero-section-swirl absolute top-[25rem] left-[95%] overflow-hidden"
				src={bgpattern2}
				alt="background swirl pattern"
			/>
			<div className="hero-section-logo-wrapper flex items-center justify-between w-full h-[3.4rem]">
				<Logo dark={false} />
				<Button isPrimary={false} title={"Apply for access"} width={"w-[12.5rem]"} />
			</div>
			<div className="hero-section-learnmore-wrapper h-[19.5rem] w-full flex flex-col items-center justify-between md:h-[21.5rem] lg:w-[63.5rem] lg:h-[25.8rem]">
				<h1
					className={`${typography.heading.large} text-center break-words flex flex-col text-white`}
				>
					<div className={`${typography.heading.large} w-full flex justify-between`}>
						Data{" "}
						<div
							className={`${typography.heading.large} border-b-[0.3rem] border-green h-fit w-fit mx-[0.8rem]`}
						>
							tailored
						</div>{" "}
						to
					</div>
					<div className={`${typography.heading.large}`}>your needs.</div>
				</h1>
				<Button isPrimary={true} title={"Learn more"} width={"w-[13rem] lg:w-[16.1rem]"} />
			</div>
			<img
				className="hero-section-learnmore-logo h-[18.4rem] w-[32rem] md:h-[29.6rem] md:w-[51.4rem] lg:h-[44.1rem] lg:w-[76.7rem]"
				src={learnmorelogo}
				alt="learnmore-logo"
			/>
		</section>
	);
};

export default Hero;
