import { Box, Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";

const SkillCard = ({ img, name }) => {
	return (
		<Box
			width={{ base: 200, sm: "100%", lg: 200 }}
			transition="all 0.8s ease-in-out"
			transform={"scale(0.8)"}
			_hover={{ transform: "scale(1)" }}
			m="auto"
		>
			<VStack
				background="gray.700"
				p={5}
				borderRadius="lg"
				alignContent={"space-between"}
			>
				<Image src={img} width={"50%"} />
				<Box
					paddingTop={{
						"2xl": name === "NextJS" ? 5 : 0,
						lg: name === "NextJS" ? 14 : 0,
						sm: name === "NextJS" ? 7 : 0,
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
		</Box>
	);
};

export default SkillCard;
