import { Box, Image } from "@chakra-ui/react";
import React from "react";

import IntroTop from "./IntroTop";

const Intro = () => {
	return (
		<Box
			backgroundImage={{
				lg: "https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=1380&t=st=1677565901~exp=1677566501~hmac=99c9a7aefe46a0601af3b03f0153369b28cec4fe35993ab18bf8a3cee874771a",
				md: "https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=1380&t=st=1677565901~exp=1677566501~hmac=99c9a7aefe46a0601af3b03f0153369b28cec4fe35993ab18bf8a3cee874771a",
				sm: "",
			}}
			bgRepeat="no-repeat"
			bgSize={{ base: "100%", lg: "100%", sm: "100%" }}
		>
			<IntroTop />
		</Box>
	);
};

export default Intro;
