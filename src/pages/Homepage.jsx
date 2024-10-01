import Homecards from "../components/Homecards";
import JobListing from "../components/JobListing";
// import Navbar from "../components/Navbar";
// import ViewAllJobs from "../components/ViewAllJobs";

import Hero from "../components/Hero";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Homecards />
      <JobListing />
    </>
  );
};

export default Homepage;
