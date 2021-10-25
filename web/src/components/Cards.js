import { useContext } from "react";
import { JobContext } from "../context/JobContext";
import Card from "./Card";

const Cards = () => {
  const { data, loading, error } = useContext(JobContext);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Oops! Something wrong! Nothing to see here</p>;

  return (
    <section className="cards">
      {data.allJob.map((job) => (
        <Card key={job._id} job={job} />
      ))}
    </section>
  );
};

export default Cards;
