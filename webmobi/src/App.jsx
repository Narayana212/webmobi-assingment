import About from "./components/About";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Hero/>
      <About id="about" heading="About Us" para="With over 3 years of experience, we at incubyte specialize in setting up
        captive dimunt centers for growing startups, addressing key challenges
        and providing lor made solution for your business needs" value={true}/>
      <Expertise/>
      <About id="success" heading="Success Stories" para="Over the years, we have helped numerous startups successfully establish their captive development centers. Join the roster of our successful collaborations" value={false}/>
      <Contact/>
      <p className="copy-para text-center "> &#169; 2023 Incubyte</p>
    </div>
  );
};

export default App;
