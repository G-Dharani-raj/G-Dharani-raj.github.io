import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./introtop.module.css";

const IntroTop = () => {
	return (
		<>
			<Center py={{ base: 20, lg: 305 }}>
				<VStack>
					<Heading size={"sm"}>HEY! I AM</Heading>
					<TypeAnimation
						sequence={[
							"> Dharani Raj", // Types Dharani Raj
							1000, // Waits 1s
							"> a Full Stack Web Developer", // Types a Full Stack Web Developer
							2000,
							() => {
								console.log("Done typing!"); //optional callback
							},
						]}
						wrapper="div"
						cursor={true}
						repeat={Infinity}
						style={{ fontSize: "2em", color: "#004cf0" }}
					/>
				</VStack>
			</Center>
			<Center my={20}>
				<ArrowDownIcon className={styles.bounce} boxSize="2em" />
			</Center>
		</>
	);
};

export default IntroTop;
