import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import styles from "./Navbar.module.css";

const Links = [
	{ name: "About Me", path: "#aboutme" },
	{ name: "Projects", path: "#projects" },
	{ name: "Skills", path: "#skills" },
	{ name: "Contact", path: "#contact" },
	{ name: "Resume", path: "#aboutme" },
];

const NavLink = ({ name, path, toggle }) => (
	<Link
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		href={path}
		className={styles.links}
		onClick={toggle}
	>
		<Text fontSize={"lg"} fontWeight="bold">
			{name}
		</Text>
	</Link>
);

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toggle = () => {
		if (isOpen) {
			onClose();
		} else {
			onOpen();
		}
	};

	return (
		<>
			<Box
				bg={useColorModeValue("gray.100", "gray.900")}
				px={4}
				style={{ position: "sticky", top: "0px", zIndex: 100 }}
				width={"100%"}
			>
				<Flex
					h={16}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<IconButton
						size={"md"}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack
						spacing={8}
						alignItems={"center"}
						width={"100%"}
						justify={"space-between"}
					>
						<Box>
							<Text fontSize={"lg"} textAlign="center">
								{"<Dharani Raj/>"}
							</Text>
						</Box>
						<HStack
							as={"nav"}
							spacing={10}
							display={{ base: "none", md: "flex" }}
						>
							{Links.map((e) => (
								<NavLink
									key={e.name}
									name={e.name}
									path={e.path}
								/>
							))}
						</HStack>
					</HStack>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
							{Links.map((e) => (
								<NavLink
									key={e.path}
									name={e.name}
									path={e.path}
									toggle={toggle}
								/>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
}
