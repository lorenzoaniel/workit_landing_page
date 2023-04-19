import React from "react";
import founderavatar from "../../assets/images/image-founder.webp";
import Button from "../../components/button/Button";
import { typography } from "../../styles/mixins/typography";
import footerlogo from "../../assets/images/logo-dark.svg";
import fbicon from "../../assets/images/icon-facebook.svg";
import igicon from "../../assets/images/icon-instagram.svg";
import twicon from "../../assets/images/icon-twitter.svg";
import bgpattern3 from "../../assets/images/bg-pattern-3.svg";

const Register: React.FC = () => {
	return (
		<section
			id="register-section"
			className="h-fit pt-[20rem] self-center flex flex-col items-center md:relative md:w-[68.9rem] lg:w-[111.2rem]"
		>
			<img
				className="register-section-founderavatar h-[28.1rem] w-[28.1rem] absolute z-[-1] md:top-[32rem] md:left-[0rem] lg:w-[47.7rem] lg:h-[47.7rem] lg:top-[33%]"
				src={founderavatar}
				alt=""
			/>
			<div
				className={`
					register-section-register-wrapper
				 	h-[37.5rem]
					w-[34.3rem]
					flex flex-col
					justify-between
					items-center
					gap-y-[1.6rem]
					p-[3.2rem]
					bg-darkpurple
					mt-[23rem]
					md:mt-[27rem]
					md:w-[51.4rem]
					md:self-end
					md:items-start
					md:justify-center
					md:gap-y-[2.4rem]
					lg:w-[73rem]
					lg:h-[41.3rem]
					lg:md:mt-[40rem]
					lg:relative
					lg:gap-y-[3.2rem]
				`}
			>
				<h2
					className={`
						info-section-display-title
						${typography.heading.medium} 
						lg:text-[5.6rem]
      			lg:leading-[6.4rem] 
						text-white					
					`}
				>
					Be the first to test
				</h2>
				<p
					className={`info-section-display-description h-fit ${typography.body.default} text-white lg:text-left`}
				>
					Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a
					beta tester for our app and kickstart your company. Apply for access below and I’ll be in
					touch to schedule a call.
				</p>
				<Button isPrimary={true} title={"Apply for access"} width={"w-[17.2rem] lg:w-[19rem]"} />
			</div>
			<img
				className="hidden md:block info-section-display-swirl absolute md:top-[74rem] md:left-[45rem] md:z-[2] lg:left-[73%] lg:top-[66%]"
				src={bgpattern3}
				alt="swirl pattern"
			/>
			<div className="footer-section-wrapper h-[10.3rem] w-[11.6rem] flex flex-col justify-between mt-[7.4rem] mb-[6.4rem] md:mt-[8rem] md:mb-[12.1rem]">
				<img className="footer-section-logo" src={footerlogo} alt="footer-section-logo" />
				<div className="footer-section-wrapper-icons flex justify-between">
					<svg
						className="footer-section-icon icon-hover"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
					>
						<path
							fill="#584D62"
							d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0Z"
						/>
					</svg>
					<svg
						className="footer-section-icon icon-hover"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
					>
						<path
							fill="#584D62"
							d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058ZM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0Zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
						/>
					</svg>
					<svg
						className="footer-section-icon icon-hover"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="17"
						viewBox="0 0 20 17"
					>
						<path
							fill="#584D62"
							d="M20 2.172a8.192 8.192 0 0 1-2.357.646 4.11 4.11 0 0 0 1.805-2.27 8.22 8.22 0 0 1-2.606.996A4.096 4.096 0 0 0 13.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 0 1 1.392 1a4.109 4.109 0 0 0 1.27 5.478 4.086 4.086 0 0 1-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 0 1-1.853.07 4.106 4.106 0 0 0 3.833 2.849A8.25 8.25 0 0 1 0 14.658a11.616 11.616 0 0 0 6.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0 0 20 2.172Z"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
};

export default Register;
