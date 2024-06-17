import React from "react";

function article_1() {
	return {
		date: "Mar 19, 2023",
		title: "CSS-About: Pseudo Selector",
		description:
			"CSS selectors define the pattern to select elements to which a set of CSS rules are then applied.CSS selectors can be grouped into the following categories based on the type of elements thay can select.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Feb 29, 2024",
		title: "React Patterns",
		description:
			"The Compound Components pattern, Render Props pattern, and Debouncing pattern are all common techniques used in React to help manage state and behavior in a more organized and reusable way.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
