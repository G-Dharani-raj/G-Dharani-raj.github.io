import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./introtop.module.css";

const IntroTop = () => {
	return (
		<Box height={"100vh"}>
			<Center>
				<VStack py={{ base: 20, lg: 305 }}>
					<Heading size={"sm"}>HEY! I AM</Heading>
					<TypeAnimation
						sequence={[
							"> Dharani Raj", // Types Dharani Raj
							1000, // Waits 1s
							"> a Full Stack Web Developer", // Types a Full Stack Web Developer
							2000,
							// () => {
							// 	console.log("Done typing!"); //optional callback
							// },
						]}
						wrapper="div"
						cursor={true}
						repeat={Infinity}
						style={{ fontSize: "2em", color: "#004cf0" }}
					/>
				</VStack>
			</Center>
			<Center>
				<a href="#aboutme">
					<ArrowDownIcon className={styles.bounce} boxSize="2em" />
				</a>
			</Center>
			{/* <div className={styles.waves}>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						className={styles.shape_fill}
					></path>
				</svg>
			</div>
			<div className={styles.top_waves}>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						className={styles.top_shape_fill}
					></path>
				</svg>
			</div> */}
		</Box>
	);
};

export default IntroTop;
