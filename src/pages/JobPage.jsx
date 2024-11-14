import React from "react";
import { useLoaderData } from "react-router-dom";

const JobPage = () => {
  const job = useLoaderData();
  return <h1>{job.title}</h1>;
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = res.json();
  return data;
};

export { JobPage as default, jobLoader };
