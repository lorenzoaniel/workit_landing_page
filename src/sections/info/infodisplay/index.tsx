import React from "react";
import { typography } from "../../../styles/mixins/typography";

interface Props {
	number: number;
	title: string;
	desc: string;
}

const InfoDisplay: React.FC<Props> = ({ number, title, desc }) => {
	return (
		<article className="info-section-display h-fit w-[34.3rem] flex flex-col items-center gap-y-[2.4rem] md:w-[57.3rem] md:flex-row md:gap-x-[3.2rem] lg:flex-col lg:justify-between lg:gap-y-[5.6rem]">
			<div
				className={`
					info-section-display-bulletpoint
					${typography.bulletpoints.default} 
					w-[4.8rem] h-[4.6rem]
					flex justify-center
					items-center
					rounded-full
					border-bulletSlate
					border-[0.1rem]
					lg:w-[5.6rem]
					lg:h-[5.6rem]
				`}
			>
				{number}
			</div>
			<div className="info-section-display-wrapper flex flex-col justify-center items-center gap-y-[2.4rem] md:items-start md:w-[49.3rem] lg:w-[35.4rem]">
				<h2 className={`info-section-display-title ${typography.heading.medium} lg:self-center`}>
					{title}
				</h2>
				<p className={`info-section-display-description ${typography.body.default} lg:text-center`}>
					{desc}
				</p>
			</div>
		</article>
	);
};

export default InfoDisplay;
