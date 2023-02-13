import Aboutme from "./components/About/Aboutme";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
	return (
		<>
			<Navbar />
			<Intro />
			<Aboutme />
			<Skills />
			<Projects />
		</>
	);
}

export default App;
