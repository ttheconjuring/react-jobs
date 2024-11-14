import React from "react"; 
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

const JobPage = () => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`api/jobs/${id}`);
        const job = await res.json();
        setJob(job);
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, []);

  return loading ? <Spinner /> : <h1>{job.title}</h1>;
};

export default JobPage;
