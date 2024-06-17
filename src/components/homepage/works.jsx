import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./ijse.jfif"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">IJSE</div>
							<div className="work-subtitle">
							SE Undergraduate [Student]
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./ceye.jfif"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Ceyentra Technologies</div>
							<div className="work-subtitle">
							Associate Trainee Software Engineer 
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./plgo.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Prabhash Wijerathna Photography</div>
							<div className="work-subtitle">
							Freelance Photography
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>



						<div className="work">
							<img
								src="./freelancer.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Freelancer</div>
							<div className="work-subtitle">
							 Software Engineer / UI / UX Designer 
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
