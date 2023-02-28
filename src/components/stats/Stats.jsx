import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
const Stats = () => {
	return (
		<section
			id="stats"
			style={{
				backgroundColor: "black",
				color: "whitesmoke",
				padding: "10px",
			}}
		>
			<Box my={10}>
				<Heading textAlign={"center"} color="#9dc4fb">
					GITHUB STATS
				</Heading>
				<Text textAlign={"center"}>Check out my github stats</Text>
			</Box>
			<Box align={"center"}>
				<GitHubCalendar username="g-dharani-raj" />
				<Box my={10}>
					<Image src="http://github-readme-streak-stats.herokuapp.com?user=G-Dharani-raj&theme=soft-green&hide_border=true" />
				</Box>
			</Box>
		</section>
	);
};

export default Stats;
