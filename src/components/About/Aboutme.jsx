import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Aboutme = () => {
	return (
		<Flex
			maxW={"70%"}
			gap={10}
			margin={"auto"}
			alignItems={"center"}
			py={20}
		>
			<Fade direction="left" triggerOnce={true}>
				<Image
					src="https://avatars.githubusercontent.com/u/105777295?s=400&u=b0a1a27550acba06294c9a54312a2f4840f4ad46&v=4"
					borderRadius="md"
				/>
			</Fade>
			<Fade direction="right" triggerOnce={true}>
				<VStack>
					<Heading>About Me</Heading>
					<Text>
						Aspiring Full Stack Developer. Capable of writing
						production-ready code using React, HTML, CSS for the
						front end and JS for the back end. Always up for a
						challenge, interested in learning new languages and
						frameworks.
					</Text>
				</VStack>
			</Fade>
		</Flex>
	);
};

export default Aboutme;
