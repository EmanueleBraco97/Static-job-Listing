import Job from "./Job";

const Jobs = ({ data }) => {
  console.log(data);
  return (
    <div className="jobs">
      {data.map((d, index) => {
        return <Job key={index} data={d} />;
      })}
    </div>
  );
};

export default Jobs;
