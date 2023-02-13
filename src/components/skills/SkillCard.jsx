import { Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";

const SkillCard = ({ img, name }) => {
	return (
		<>
			<VStack background="gray.700" p={5} borderRadius="lg">
				<Image src={img} width={"60%"} />
				<Heading size="md">{name}</Heading>
			</VStack>
		</>
	);
};

export default SkillCard;
