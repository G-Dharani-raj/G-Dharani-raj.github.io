import Aboutme from "./components/About/Aboutme";
import Contact from "./components/contacts/Contact";
import BottomCurve from "./components/curves/BottomCurve";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Stats from "./components/stats/Stats";
import "./App.css";
import TopCurve from "./components/curves/TopCurve";
import BlueCurve from "./components/curves/BlueCurve";

function App() {
	return (
		<>
			<Navbar />
			<Intro />
			{/* <TopCurve /> */}
			{/* <BottomCurve /> */}
			<Aboutme />
			<Skills />
			<BottomCurve />
			<Projects />
			<Stats />
			<BlueCurve />
			<Contact />
		</>
	);
}

export default App;
