import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	Divider,
	Flex,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
	name,
	description,
	image,
	techstack,
	github,
	deployed,
}) => {
	return (
		<>
			<Card
				direction={{ base: "column", sm: "column", lg: "row" }}
				overflow="hidden"
				variant="outline"
				background={"black"}
				color="white"
				width="80%"
				m="auto"
				marginBottom={10}
				p={5}
				transition="all 0.8s ease-in-out"
				transform={"scale(1)"}
				_hover={{ transform: "scale(1.1)" }}
			>
				<Box>
					<Image
						objectFit="cover"
						maxW={{ base: "100%", sm: "200px" }}
						src={image}
						alt="project image"
					/>
				</Box>
				<Stack lineHeight={"2rem"}>
					<CardBody>
						<Heading size={"md"}>{name}</Heading>
						<Text>{description}</Text>
						<HStack>
							<Text>Tech Stack</Text>
							<HStack>
								{techstack.map((e) => (
									<Image src={e} width={30} key={e} />
								))}
							</HStack>
						</HStack>

						<Divider my={5} />
						<ButtonGroup color={"black"}>
							<Button
								className={`${styles.btn_read} ${styles.btn_animated}`}
								as="a"
								target={"_blank"}
								href={github}
							>
								Github
							</Button>
							<Button
								className={`${styles.btn_read} ${styles.btn_animated}`}
								as="a"
								target={"_blank"}
								href={deployed}
							>
								Demo
							</Button>
						</ButtonGroup>
					</CardBody>
				</Stack>
			</Card>
		</>
	);
};

export default ProjectCard;
