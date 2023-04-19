import React from "react";
import InfoDisplay from "./infodisplay";

const Info: React.FC = () => {
	return (
		<section
			id="info-section"
			className="bg-ghostwhite h-fit pt-[6.4rem] pb-[7.1rem] flex flex-col justify-center items-center gap-y-[4rem] lg:flex-row"
		>
			<InfoDisplay
				number={1}
				title={"Actionable insights"}
				desc={
					"Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
				}
			/>
			<InfoDisplay
				number={2}
				title={"Data-driven decisions"}
				desc={
					"Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
				}
			/>
			<InfoDisplay
				number={3}
				title={"Always affordable"}
				desc={
					"Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
				}
			/>
		</section>
	);
};

export default Info;
