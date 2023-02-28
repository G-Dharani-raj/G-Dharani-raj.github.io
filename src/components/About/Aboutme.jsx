import {
	Box,
	Button,
	Flex,
	Heading,
	Highlight,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import RESUME from "../../assets/fw21_0279_Dharani_raj_resume.pdf";

const Aboutme = () => {
	return (
		<section id="aboutme">
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
							<Highlight
								query={[
									"Dharani Raj",
									"Vizianagaram, Andhra Pradesh",
								]}
								styles={{
									fontWeight: "bold",
									color: "#9dc4fb",
								}}
							>
								Hi, I am Dharani Raj from Vizianagaram, Andhra
								Pradesh. I'm an aspiring Full Stack Developer.
								Capable of writing production-ready code using
								React, HTML, CSS for the front end and JS for
								the back end. Always up for a challenge,
								interested in learning new languages and
								frameworks.
							</Highlight>
						</Text>
						<Button
							as={"a"}
							onClick={() =>
								window.open(
									`https://drive.google.com/file/d/1mmtIkFrrgXRP3kauseFISbwFThV9V4hz/view?usp=sharing`
								)
							}
							href={RESUME}
							target="_blank"
							download="fw21_0279-Dharani-Raj-Resume"
							rel="noreferrer"
						>
							Resume
						</Button>
					</VStack>
				</Fade>
			</Flex>
		</section>
	);
};

export default Aboutme;
