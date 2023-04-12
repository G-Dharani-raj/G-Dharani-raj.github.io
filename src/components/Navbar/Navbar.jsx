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
import RESUME from "../../assets/fw21_0279_Dharani_raj_resume.pdf";
import { BsDownload } from "react-icons/bs";
import { useState } from "react";

const Links = [
	{ name: "Home", path: "#intro" },
	{ name: "About Me", path: "#aboutme" },
	{ name: "Projects", path: "#projects" },
	{ name: "Skills", path: "#skills" },
	{ name: "Contact", path: "#contact" },
	// { name: "Resume", path: "#aboutme" },
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
	const [color, setColor] = useState(styles.navbar_top);
	const [ham, setHam] = useState("white");

	const changeColor = () => {
		// if (window.scrollY >= 20) {
		// 	setColor(styles.navbar_top);
		// } else if (window.scrollY >= 21) {
		// 	setColor(styles.navbar_black);
		// } else {
		// 	setColor("whiteAlpha.400");
		// }

		if (window.scrollY >= 1000) {
			setColor(styles.navbar_black);
			setHam("black");
		} else {
			setColor(styles.navbar_top);
			setHam("white");
		}
	};
	window.addEventListener("scroll", changeColor);
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
				// bg={useColorModeValue("gray.100", "gray.900")}
				className={`${color}`}
				// bg={color}
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
						// className={ham}
						bg={ham}
					/>
					<HStack
						spacing={8}
						alignItems={"center"}
						width={"100%"}
						justify={"space-between"}
					>
						<Box>
							<Text
								fontSize={"lg"}
								textAlign="center"
								fontWeight={"bold"}
							>
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
								rightIcon={<BsDownload />}
								className={`${styles.btn_read} ${styles.btn_animated}`}
								bg={"blackAlpha.700"}
								color={"white"}
								align={"center"}
							>
								Resume
							</Button>
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
								rightIcon={<BsDownload />}
								className={`${styles.btn_read} ${styles.btn_animated}`}
								align={"center"}
							>
								Resume
							</Button>
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
}
