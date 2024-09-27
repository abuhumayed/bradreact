import Hero from "./components/Hero";
import Homecards from "./components/Homecards";
import JobListing from "./components/JobListing";
import Navbar from "./components/Navbar";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Homecards />
      <JobListing />
      <ViewAllJobs />
    </>
  );
};

export default App;
