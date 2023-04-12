import {
	Box,
	Center,
	Heading,
	Image,
	SimpleGrid,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import {
	EXPRESS_URL,
	MONGO_URL,
	NODE_URL,
	POSTMAN_URL,
	TYPESCRIPT_URL,
} from "../../helpers/ImageURLS";
import SkillCard from "./SkillCard";

const Skills = () => {
	const IMAGES = [
		{ src: "https://i.ibb.co/7RBGS9d/1051277.png", name: "HTML" },
		{
			src: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
			name: "CSS",
		},
		{ src: "https://i.ibb.co/DLck1xV/5968292.png", name: "Javascript" },
		{ src: "https://i.ibb.co/pvTb0z9/pngwing-com-1.png", name: "ReactJS" },
		{ src: TYPESCRIPT_URL, name: "Typescript" },
		{ src: "https://i.ibb.co/dPFHFDn/pngwing-com.png", name: "Redux" },
		{ src: "https://i.ibb.co/m8B4F7h/pngwing-com-2.png", name: "NextJS" },
		{ src: NODE_URL, name: "NodeJS" },
		{ src: EXPRESS_URL, name: "ExpressJS" },
		{ src: MONGO_URL, name: "MongoDB" },
	];
	const TOOLS = [
		{ src: "https://i.ibb.co/pfyhW85/pngwing-com-5.png", name: "GitHub" },
		{ src: "https://i.ibb.co/jyPf42r/pngwing-com-3.png", name: "npm" },
		{ src: "https://i.ibb.co/J7rmj6P/906324.png", name: "vscode" },
		{ src: POSTMAN_URL, name: "Postman" },
	];
	return (
		<section id="skills">
			<Box p={10}>
				<Heading
					size="lg"
					textAlign="center
            "
					my={10}
				>
					SKILLS
				</Heading>
				<SimpleGrid
					columns={{ base: 1, lg: 4, sm: 2 }}
					maxW="70%"
					margin={"auto"}
					color="white"
					gap={2}
				>
					{IMAGES.map((e, i) => (
						<SkillCard img={e.src} name={e.name} key={i} />
					))}
				</SimpleGrid>
				<Heading size="lg" textAlign="center" my={10}>
					TOOLS
				</Heading>
				<SimpleGrid
					columns={{ base: 1, lg: 4, sm: 2 }}
					maxW="70%"
					m={"auto"}
					color="white"
					gap={5}
				>
					{TOOLS.map((e, i) => (
						<SkillCard img={e.src} name={e.name} key={i} />
					))}
				</SimpleGrid>
			</Box>
		</section>
	);
};

export default Skills;
