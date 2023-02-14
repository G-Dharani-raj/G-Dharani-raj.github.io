import Aboutme from "./components/About/Aboutme";
import BottomCurve from "./components/curves/BottomCurve";
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
			<BottomCurve />
			<Projects />
		</>
	);
}

export default App;
