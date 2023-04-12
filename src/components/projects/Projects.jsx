import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import {
	CHAKRA_URL,
	CSS_URL,
	EXPRESS_URL,
	HTML_URL,
	JS_URL,
	MONGO_URL,
	NODE_URL,
	REACT_URL,
	REDUX_URL,
} from "../../helpers/ImageURLS";
import ProjectCard from "./ProjectCard";
import ProjectCardOP from "./ProjectCardOp";
import styles from "./ProjectCard.module.css";

const Projects = () => {
	const PROJECTS = [
		{
			name: "GlowUp.com",
			description:
				"Glowup.com is an Indian Lifestyle Brand and E-commerce platform. It offers a well-curated selection of products across makeup, skincare, haircare, bath and body, fragrance, luxury and premium brands. Use can browse through various products and add them to the cart or wishlist. Form validation is implemented for the authentication of users. The back-end is built in Node and Express and Mongo is the database.",
			image: "https://github.com/gk072745/glowup.com/raw/main/frontend/src/Assets/r1.png",
			techstack: [
				HTML_URL,
				CSS_URL,
				JS_URL,
				REACT_URL,
				REDUX_URL,
				CHAKRA_URL,
				EXPRESS_URL,
				NODE_URL,
				MONGO_URL,
			],
			github: "https://github.com/G-Dharani-raj/glowup.com",
			deployed: "https://glowup-com.netlify.app/",
		},
		{
			name: "Lens Studio (Lenskart clone)",
			description:
				"LensStudio.com is an ex-commerce website where user can search for a certain type, shape or brand of eyeglasses as per their needs. User can go browse through the website for products and add them to the cart before moving onto the payment section. Admin Panel displays the graphs of products and the number of visits the website is getting along with CRUD for maintaing the products. It is built using React and the state management is handled by Redux. ",
			image: "https://user-images.githubusercontent.com/112627297/213935697-a1ab334d-7afe-4276-a748-2ddf30f1bc8d.png",
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
				"Nykaa.com is an Indian Lifestyle Brand and E-commerce platform. It offers a well-curated selection of products across makeup, skincare, haircare, bath and body, fragrance, luxury and premium brands. User can search for a certain type of product from a certain brand and sort the items according to price or rating. User can also add items to cart. It is built using React.",
			image: "https://user-images.githubusercontent.com/105777295/220171481-631b1243-11b2-4bde-880c-eefb17e532a7.png",
			techstack: [HTML_URL, CSS_URL, JS_URL, REACT_URL, CHAKRA_URL],
			github: "https://github.com/G-Dharani-raj/condemned-increase-9667/tree/main/nykaa",
			deployed: "https://admirable-trifle-634f66.netlify.app/",
		},
		{
			name: "Anthropologie Clone",
			description:
				"Anthropologie.com is an E-commerce website that deals with clothing for women. Users can browse through all the available products or search for a certain product/type of products. There is also form validation for user Authentication. Admin panel has CRUD functions to maintain the products that are listed on the webiste. It using built using HTML, CSS and JavaScript.",
			image: "https://user-images.githubusercontent.com/105777295/220172103-8e850e19-3073-4891-a063-4ab8263e617f.png",
			techstack: [HTML_URL, CSS_URL, JS_URL],
			github: "https://github.com/G-Dharani-raj/acidic-blade-1610",
			deployed: "https://spontaneous-dolphin-60e6a7.netlify.app",
		},
	];

	return (
		<section id="projects">
			<Box
				style={{
					backgroundColor: "black",
					color: "whitesmoke",
					padding: "20px",
				}}
				// mt={10}
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
								<li key={i} className={styles.list}>
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
			</Box>
		</section>
	);
};

export default Projects;
