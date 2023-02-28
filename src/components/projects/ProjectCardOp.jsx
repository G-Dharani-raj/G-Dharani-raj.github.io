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

const ProjectCardOP = ({
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
				direction={{ base: "column", sm: "row" }}
				overflow="hidden"
				variant="outline"
				background={"black"}
				color="white"
				width="80%"
				m="auto"
				marginBottom={5}
				p={5}
			>
				<Stack lineHeight={"2rem"}>
					<CardBody>
						<Heading size={"md"}>{name}</Heading>
						<Text>{description}</Text>
						<HStack>
							<Text>Tech Stack</Text>
							<HStack>
								{techstack.map((e) => (
									<Image src={e} width={30} />
								))}
							</HStack>
						</HStack>

						<Divider my={5} />
						<ButtonGroup color={"black"}>
							<Button>Github</Button>
							<Button>Deployed</Button>
						</ButtonGroup>
					</CardBody>
				</Stack>
				<Box>
					<Image
						objectFit="cover"
						maxW={{ base: "100%", sm: "200px" }}
						src={image}
						alt="project image"
					/>
				</Box>
			</Card>
		</>
	);
};

export default ProjectCardOP;
