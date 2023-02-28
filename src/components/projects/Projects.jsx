import { Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import {
	CHAKRA_URL,
	CSS_URL,
	HTML_URL,
	JS_URL,
	REACT_URL,
	REDUX_URL,
} from "../../helpers/ImageURLS";
import ProjectCard from "./ProjectCard";
import ProjectCardOP from "./ProjectCardOp";

const Projects = () => {
	const PROJECTS = [
		{
			name: "Lens Studio (Lenskart clone)",
			description:
				"E-commerce website where customers can find a variety of eyewear, they can sort, filter based on their requirements and can add the selected product to the cart",
			image: "https://user-images.githubusercontent.com/105777295/218666491-07366d7f-43d0-4717-99a1-31f70a571f2c.png",
			techstack: [
				HTML_URL,
				CSS_URL,
				JS_URL,
				REACT_URL,
				REDUX_URL,
				CHAKRA_URL,
			],
			github: "https://github.com/G-Dharani-raj/Lens-studio",
			deployed: "https://next-hill-6732.vercel.app/",
		},
		{
			name: "Nykaa clone",
			description:
				"A beauty products site where users can search for products and filter the results",
			image: "https://user-images.githubusercontent.com/105777295/220171481-631b1243-11b2-4bde-880c-eefb17e532a7.png",
			techstack: [HTML_URL, CSS_URL, JS_URL, REACT_URL, CHAKRA_URL],
			github: "https://github.com/G-Dharani-raj/condemned-increase-9667/tree/main/nykaa",
			deployed: "https://admirable-trifle-634f66.netlify.app/",
		},
		{
			name: "Anthropologie Clone",
			description:
				"E-commerce website where user can search for clothing, add them to cart and filter the search results",
			image: "https://user-images.githubusercontent.com/105777295/220172103-8e850e19-3073-4891-a063-4ab8263e617f.png",
			techstack: [HTML_URL, CSS_URL, JS_URL],
			github: "https://github.com/G-Dharani-raj/acidic-blade-1610",
			deployed: "https://spontaneous-dolphin-60e6a7.netlify.app",
		},
	];

	return (
		<section id="projects">
			<div
				style={{
					backgroundColor: "black",
					color: "whitesmoke",
					padding: "5px",
				}}
			>
				<Heading textAlign={"center"} color="#9dc4fb" my={10}>
					PROJECTS
				</Heading>
				<Fade cascade triggerOnce>
					<ul>
						{PROJECTS.map(
							(
								{
									name,
									description,
									image,
									techstack,
									github,
									deployed,
								},
								i
							) => (
								<li key={i}>
									<ProjectCard
										name={name}
										description={description}
										image={image}
										techstack={techstack}
										github={github}
										deployed={deployed}
									/>
								</li>
							)
						)}
					</ul>
				</Fade>
			</div>
		</section>
	);
};

export default Projects;
