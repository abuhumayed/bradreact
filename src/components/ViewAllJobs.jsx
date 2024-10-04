import { useState } from "react";
import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/jobs"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </Link>

        <button className="px-5 border border-black mx-5 my-2">-</button>
        <span>0</span>
        <button className="px-5 border border-black mx-5">+</button>
      </section>
    </>
  );
};

export default ViewAllJobs;
