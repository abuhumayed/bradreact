import Hero from "../components/Hero";
import Homecards from "../components/Homecards";
import JobListing from "../components/JobListing";
import ViewAllJobs from "../components/ViewAllJobs";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Homecards />
      <JobListing isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default Homepage;
