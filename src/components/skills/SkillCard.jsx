import { Box, Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";

const SkillCard = ({ img, name }) => {
	return (
		<>
			<VStack
				background="gray.700"
				p={5}
				borderRadius="lg"
				alignContent={"space-between"}
			>
				<Image src={img} width={"60%"} />
				<Box
					paddingTop={{
						"2xl": name === "NextJS" ? 90 : 0,
						lg: name === "NextJS" ? 14 : 0,
						sm: name === "NextJS" ? 55 : 0,
						md: name === "NextJS" ? 14 : 0,
					}}
				>
					<Heading size="md">
						<Fade cascade damping={0.2} duration={500} triggerOnce>
							{name}
						</Fade>
					</Heading>
				</Box>
			</VStack>
		</>
	);
};

export default SkillCard;
